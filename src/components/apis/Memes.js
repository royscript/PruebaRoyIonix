import fetch from "./fetch";
const Memes = (()=>{
    const endPoint = 'chile';
    return {
        listarConFiltro : async (query, pag = 0)=>{
            return await fetch(endPoint,`/search.json?q=${encodeURI(query)}&limit=100&after=${pag}`)
        }
    }
})()
export default Memes;