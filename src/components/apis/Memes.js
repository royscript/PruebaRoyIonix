import fetch from "./fetch";
const Memes = (()=>{
    const endPoint = 'chile';
    return {
        listar : async ()=>{
            return await fetch(endPoint,'/search.json?q=coquimbo&limit=100')
        },
        listarConFiltro : async (query)=>{
            return await fetch(endPoint,`/search.json?q=${encodeURI(query)}&limit=100`)
        }
    }
})()
export default Memes;