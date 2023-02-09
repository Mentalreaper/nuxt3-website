export default defineEventHandler(async (event) => {
    const { currencyCode } = event.context.params;

    const { currencyKey } = useRuntimeConfig();

    const uri = `https://api.currencyapi.com/v3/latest?currencies=${currencyCode}&apikey=${currencyKey}`;

    const { data } = await $fetch(uri);

    return data;
});