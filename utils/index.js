export const query=(obj)=>{
    const {labels,keyword,language,state,updated}=obj;
        const labelString=labels.map(({name})=>`label:"${name}"`).join(" ");
        const keywordString=keyword?`${keyword}`:"";
        const languageString=language?`language:${language}`:"";
        const stateString=state?`state:${state}`:"";
        const updatedString=updated?`updated:>${updated}`:"";
        const queryString=`${labelString} ${keywordString} ${languageString} ${stateString} ${updatedString}`;
        return queryString;
}