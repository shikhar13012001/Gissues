import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Languages from "programing-language-names";
import SearchContext from "./IssueContext";
export default function FreeSolo() {
    const {setSearchData} = React.useContext(SearchContext); 
  const options = Object.keys(Languages).map((option) =>(Languages[option]));
  // remove duplicates from options
    const uniqueOptions = [...new Set(options)];
    const handleChange = (e) => {
        e.preventDefault(); 
        setSearchData((prev) => ({ ...prev, language: e.target.value }));
    }
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={uniqueOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            onSelect={handleChange}
          />
        )}
      />
    </Stack>
  );
}
 
 
