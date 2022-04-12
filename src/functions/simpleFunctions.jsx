function suma(props){
    return <p>Sum Function =&gt;</p>
}

const ComponenteSimple = (props) => {
    return <p>{props.nombre}</p>
}

function resta(props){
    return <ComponenteSimple nombre={"Funcion Resta"} />;
}

export {suma, resta, ComponenteSimple };


// export default function suma2(props){
//     return (
//         <p>Sum Function</p>
//     )
// }