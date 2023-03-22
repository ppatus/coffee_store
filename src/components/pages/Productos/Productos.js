import { React, useEffect, useState } from "react";
import Store_item from "./Store_item";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import { Container, Row } from "react-bootstrap";
import "./Store_items.css";
import "./Productos.css";

function Productos(props){

    const [productos, setProductos] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;

    //Función que se ejecuta al cargar la página
    useEffect(() => {
        let url = "https://telecoffee-30869-default-rtdb.europe-west1.firebasedatabase.app/";

        switch(props.category){
            case "grano":
                url += "en_grano.json";
                break;
            case "molido":
                url += "molido.json";
                break;
            case "accesorios":
                url += "accesorios.json";
                break;
        }


        axios.get(url)
        .then((response) => {
            setProductos(response.data);
        });
    },[props]);




    //Función que se cuando se cambia de página
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(productos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(productos.length / itemsPerPage));
        window.scrollTo(0, 0)
    }, [itemOffset, itemsPerPage, productos]);



    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % productos.length;
        setItemOffset(newOffset);
    };

    
    function TituloProductos({category}){
        let title = "";
        switch(category){
            case "grano":
                title = "Cafés en grano";
                break;

            case "molido":
                title = "Cafés molidos";
                break;
            
            case "accesorios":
                title = "Accesorios";
                break;
        }

        return(
            <Container fluid className="productsTitle">
                {title}
            </Container>

        );
    }

    function Products({currentItems}){
        return (
            <>
            <Container>
                <Row>
                    {currentItems &&
                        currentItems.map((item) => (
                            <Store_item nombre={item.name} key={item.name} precio={item.price} imagen={item.img}></Store_item>
                    ))}
                </Row>
            </Container>
            </>
          );
    }



    return(
        <>
            <TituloProductos category={props.category}/>           
            <Products currentItems={currentItems}></Products>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                nextLinkClassName="page-num"
                previousLinkClassName="page-num"
                activeLinkClassName="active"
            />
        </>
    );
}

export default Productos;