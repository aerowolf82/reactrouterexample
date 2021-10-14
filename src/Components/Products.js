import IndivProduct from "./IndivProduct";
import { Switch, Route, Link, useRouteMatch} from "react-router-dom";

function Products() {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h1>
                Product List
            </h1>
            <ul>
                <li>
                    <Link to={`${url}/Product 1`}>Product 1</Link>
                </li>
                <li>
                    <Link to={`${url}/Product 2`}>Product 2</Link>
                </li>
                <li>
                    <Link to={`${url}/Product 3`}>Product 3</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a Product.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <IndivProduct />
                </Route>
            </Switch>
        </div>

    );
}

export default Products;