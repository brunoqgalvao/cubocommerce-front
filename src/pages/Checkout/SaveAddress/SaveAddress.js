import React, { useState } from "react";
import { useDict } from "../../../states/LangState";
import { useAlert } from "../../../states/AlertState";
import { useAddress } from "../../../states/AddressState";
import { goToCheckout } from "../../../services/dynamicRouting";
import {
  Typography,
  Paper,
  Button,
  FormControl,
  Input,
  InputLabel
} from "@material-ui/core";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { styles } from "../../../services/styleProvider";
import withStyles from "@material-ui/core/styles/withStyles";

const SaveAddress = props => {
  const { classes } = props;
  const dictionary = useDict();
  const alert = useAlert();
  const { addAddress } = useAddress();
  const [searchAddress, setSearchAddress] = useState("");
  const [address, setAddress] = useState(null);
  const [observacao, setObservacao] = useState("");
  const [complemento, setComplemento] = useState("");
  const [name, setName] = useState("");

  const saveAddress = async () => {
    const fullAddress = {
      address: address,
      complement: complemento,
      observation: observacao,
      name: name,
    }
    await addAddress(fullAddress);
    alert.show("Endereço Salvo",{callback:goToCheckout, title:"Sucesso"});
  }

  const handleSelect = address => {
    setSearchAddress("");
    setAddress(address);
    geocodeByAddress(address)
      .then(results => {
        return checkIfInRadius(getLatLng(results[0]));
      })
      .then(inRadius => console.log("inRadius"))
      .catch(error => console.error("Error", error));
  };

  const checkIfInRadius = latlon => {
    const lat = latlon.lat;
    const lon = latlon.lon;
    return lat > 31 && lat < 41 && lon > 30 && lon < 50;
  };

  return (
    <div className={classes.background}>
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Cadastrar Novo Endereço
        </Typography>
          <FormControl margin="normal" required fullWidth>
            <PlacesAutocomplete
              value={searchAddress}
              onChange={searchAddress => setSearchAddress(searchAddress)}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading
              }) => (
                <div>
                  <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="name">
                      {dictionary.get("address.searchPlaceholder")}
                    </InputLabel>
                    {/* When the name field is changed, setName will run and assign the name to the value in the input. */}
                    <Input
                      {...getInputProps({
                        className: "location-search-input"
                      })}
                    />
                  </FormControl>
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </FormControl>
          {address === null ? (
            ""
          ) : (
            <>
              <span>{address}</span>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="complemento">
                  {dictionary.get("address.complementoLabel")}
                </InputLabel>
                <Input
                  id="complemento"
                  name="complemento"
                  autoFocus
                  autoComplete="on"
                  value={complemento}
                  onChange={e => setComplemento(e.target.value)}
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="observacao">
                  {dictionary.get("address.observacaoLabel")}
                </InputLabel>
                <Input
                  id="observacao"
                  name="observacao"
                  autoComplete="on"
                  value={observacao}
                  onChange={e => setObservacao(e.target.value)}
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="name">
                  {dictionary.get("address.nameLabel")}
                </InputLabel>
                <Input
                  id="name"
                  name="name"
                  autoComplete="on"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </FormControl>
            </>
          )}

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => saveAddress()}
          >
            {dictionary.get("address.saveAddress")}
          </Button>
          <Button
            fullWidth
            color="secondary"
            className={classes.submit}
            onClick={()=>goToCheckout()}
          >
            Voltar
          </Button>
      </Paper>
    </main>
    </div>
  );
};

export default withStyles(styles)(SaveAddress);
