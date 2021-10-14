import IndivProduct from "./IndivProduct";
import { Switch, Route, Link, useRouteMatch} from "react-router-dom";
import './Products.css';

function Products() {
    let match = useRouteMatch();
    return (
        <div>
            <header>
                <h1>
                    Product List
                </h1>
                <button className="Button">
                    <Link to={`${match.url}/product-1`}>Product 1</Link>
                </button>
                <button className="Button">
                    <Link to={`${match.url}/product-2`}>Product 2</Link>
                </button>
                <button className="Button">
                    <Link to={`${match.url}/product-3`}>Product 3</Link>
                </button>
            </header>

            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <IndivProduct />
                </Route>
                <Route exact path={match.path}>
                    <h3>Please select a Product.</h3>
                </Route>
            </Switch>
        </div>

    );
}

export default Products;