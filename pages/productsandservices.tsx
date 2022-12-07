import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../components/Filters";
import Card from "../components/_child/Card";
import NavItemHeaders from "../components/_child/NavItemHeaders";
import Wrapper from "../layout/Wrapper";
import { productsAndServicesType } from "../types/productsServiceType";
import { filterActions, initializeFilterState } from "../store/slices/filterSlice";
import Page from "../components/_child/Page";
import { productsAndServiceData, productsData } from "../data/sample";
import Product2 from "../components/_child/Product2";
import { productsType } from "../types/commonTypes";

const DATA = [
  {
    id: 1,
    sectionName: "States",
    options: [
      { id: 1, isActive: false, name: "Abia State" },
      { id: 2, isActive: false, name: "Adamawa" },
      { id: 3, isActive: false, name: "Akwa Ibom State" },
    ],
  },
  {
    id: 2,
    sectionName: "Category",
    options: [
      { id: 1, isActive: false, name: "Drilling Rigs" },
      { id: 2, isActive: false, name: "Cementing" },
      { id: 3, isActive: false, name: "Valves" },
    ],
  },
  {
    id: 3,
    sectionName: "Company",
    options: [
      { id: 1, isActive: false, name: "Marginal Fields" },
      { id: 2, isActive: false, name: "LLNG" },
      { id: 3, isActive: false, name: "NOGIC" },
    ],
  },
  {
    id: 4,
    sectionName: "Condition",
    options: [
      { id: 1, isActive: false, name: "New" },
      { id: 2, isActive: false, name: "Refubished" },
      { id: 3, isActive: false, name: "Used" },
    ],
  },
];

function ProdAndServices(props: productsAndServicesType) {
  const dispatch = useDispatch();
  const filter = useSelector(initializeFilterState);

  useEffect(() => {
    dispatch(filterActions.initializeFilterState(props.filters));
  }, []);

  return (
    <Wrapper>
      <Card>
        <NavItemHeaders name="Product and Services" itemCount="2,000" />
        <div>
          <div className="my-4 flex flex-row">
            <Filters data={filter} />
            <div className="grid grid-cols-3 gap-5 mx-8">
              {productsAndServiceData.map((product) => (
                <Product2 key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-between my-10 border-t pt-5">
            <div>Showing results 1-9 of 2000</div>
            <div className="flex flex-row gap-5">
              {[1, 2, 3, 4, "..."].map((item, idx) => (
                <Page key={item} number={item.toString()} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Wrapper>
  );
}

export async function getStaticProps() {
  return {
    props: { filters: DATA },
  };
}

export default ProdAndServices;
