export default defineEventHandler(async (event) => {
    // // handle query params
    // const { name } = getQuery(event);

    // // handle post data
    // const { age } = await readBody(event);

    // api call with private key
    const { data: currencyApiData } = await $fetch("https://api.currencyapi.com/v3/latest?apikey=IxB2mFjLlyFBbzrriRuUzbJtaEvoRH0ZhHKnSbFr")

    return {
        currencyApiData
    };
});