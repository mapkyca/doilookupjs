import axios from "axios";

class DOIResolver {

    resolve(doi) {

        const data = axios
            .get('https://doi.org/' + doi, {
                headers: {
                    Accept: "application/vnd.citationstyles.csl+json",
                },
            })
            .then((res) => {
                return res.data;
            })
            .catch((err) => console.error(err));

        return data;
    }
}

export default DOIResolver;