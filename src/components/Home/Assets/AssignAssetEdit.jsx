import React, { useState, useEffect } from "react";
import { Link,  useParams, useNavigate } from "react-router-dom";
import ProductCategoryDropdown from "./ProductCategoryDropdownAssignAssets";
import ProductTypeDropdown from "./ProductTypeDropdownAssignAssets";
import ProductDropdown from "./ProductDropdownAssignAssets";
import VendorDropdown from "./VendorDropdownAssignAssets";
import AddressInput from "./AddressInputAssignAssets";
import AssetDropdown from "./AssetDropdownAssignAssets";
import DepartmentDropdown from "./DepartmentDropdownAssignAssets";
import EmployeeDropdown from "./EmployeeDropdownAssignAssets";
import DescriptionInput from "./DescriptionInputAssignAssets";
import AssignComponentInput from "./AssignComponentInputAssignAssets";
import { Params } from "react-router-dom";

function AssignAssetEdit() {
  const [prodCategory, setProdCategory] = useState([]);
  const [productType, setProductType] = useState([]);
  const [product, setProduct] = useState([]);
  const [vendor, setVendor] = useState([]);
  const [assetName, setAssetName] = useState([]);
  const [department, setDepartment] = useState([]);
  const [emp, setEmp] = useState([]);
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [assigncomponent, setAssigncomponent] = useState("");
  const [selectedAssetId, setSelectedAssetId] = useState();
  const [selectedproductTypeId, setSelectedproductTypeId] = useState();
  const [selectedDepartmentId, setSelectedDepartmentId] = useState();
  const [selectedproductCategoryId, setSelectedproductCategory] = useState();
  const [selectedproductId, setSelectedproductId] = useState();
  const [selectedVendorId, setSelectedVendorId] = useState();
  const [selectedEmployeeId, setSelectedEmployeeId] = useState();
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const vendordata = async () => {
    try {
      const response = await fetch("http://103.228.83.115:8081/api/v1/vendors");
      const data = await response.json();
      setVendor(data);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

  const fetchAssignAssetData = async () => {
    try {
      const response = await fetch(
        `hhttp://103.228.83.115:8081/api/v1/assign_assets/${params.id}`
      );
      const data = await response.json();
      setId(data.id);
      setSelectedproductCategory(data.product_category_id);
      setSelectedproductTypeId(data.product_type_id);
      setSelectedproductId(data.product_id);
      setSelectedVendorId(data.vendor_id);
      setAddress(data.address);
      setSelectedAssetId(data.asset_id);
      setSelectedDepartmentId(data.department_id);
      setSelectedEmployeeId(data.employee_id);
      setDescription(data.Discription);
      setAssigncomponent(data.Assign_Component);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(id, "pawan");

  useEffect(() => {
    fetchAssignAssetData();

    vendordata();
  }, []);

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const formData = {
      product_category_id: selectedproductCategoryId,
      product_type_id: selectedproductTypeId,
      product_id: selectedproductId,
      vendor_id: selectedVendorId,
      address: address,
      asset_id: selectedAssetId,
      department_id: selectedDepartmentId,
      employee_id: selectedEmployeeId,
      Discription: description,
      Assign_Component: assigncomponent,
    };

    fetch(`http://103.228.83.115:8081/api/v1/assign_assets/${id}`, {
      method: "PUT",
      body: JSON.stringify({ assign_asset: formData }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Asset updated successfully:", data);
        navigate("/assignlist");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const procuctcatogrydata = async () => {
    try {
      const response = await fetch(
        "http://103.228.83.115:8081/api/v1/productcategories"
      );
      const data = await response.json();
      setProdCategory(data);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

  const producttypedata = async () => {
    try {
      const response = await fetch("http://103.228.83.115:8081/api/v1/producttype");
      const data = await response.json();
      setProductType(data);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

  const Assetdata = async () => {
    try {
      const response = await fetch("http://103.228.83.115:8081/api/v1/asset");
      const data = await response.json();
      setAssetName(data);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

  const employedata = async () => {
    try {
      const response = await fetch("http://103.228.83.115:8081/api/v1/employee");
      const data = await response.json();
      setEmp(data);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

  const departmentdata = async () => {
    try {
      const response = await fetch("http://103.228.83.115:8081/api/v1/departments");
      const data = await response.json();
      setDepartment(data);
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

  const productdata = async () => {
    try {
      const response = await fetch(
        "http://103.228.83.115:8081/api/v1/products"
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    procuctcatogrydata();
    Assetdata();
    producttypedata();
    productdata();
    departmentdata();
    employedata();
  }, []);


    return (
      <>
        <main id="main" className="main">
          <section className="section">
            {/* ... (main section content) */}
            
            <div className="row">
              <ProductCategoryDropdown
                prodCategory={prodCategory}
                selectedproductCategoryId={selectedproductCategoryId}
                setSelectedproductCategory={setSelectedproductCategory}
              />
  
              <ProductTypeDropdown
                productType={productType}
                selectedproductTypeId={selectedproductTypeId}
                setSelectedproductTypeId={setSelectedproductTypeId}
              />
  
              <ProductDropdown
                product={product}
                selectedproductId={selectedproductId}
                setSelectedproductId={setSelectedproductId}
              />
  
              <VendorDropdown
                vendor={vendor}
                selectedVendorId={selectedVendorId}
                setSelectedVendorId={setSelectedVendorId}
              />
            </div>
  
            <br />
  
            <div className="row">
              <AddressInput
                address={address}
                setAddress={setAddress}
              />
  
              <AssetDropdown
                assetName={assetName}
                selectedAssetId={selectedAssetId}
                setSelectedAssetId={setSelectedAssetId}
              />
  
              <DepartmentDropdown
                department={department}
                selectedDepartmentId={selectedDepartmentId}
                setSelectedDepartmentId={setSelectedDepartmentId}
              />
  
              <EmployeeDropdown
                emp={emp}
                selectedEmployeeId={selectedEmployeeId}
                setSelectedEmployeeId={setSelectedEmployeeId}
              />
            </div>
  
            <br />
  
            <div className="row">
              <DescriptionInput
                description={description}
                setDescription={setDescription}
              />
  
              <AssignComponentInput
                assigncomponent={assigncomponent}
                setAssigncomponent={setAssigncomponent}
              />
           <div className="row">
            <div className="my-2">
              <Link to='/assignlist'>
              <button a="" href="#" className="btn btn-primary ad">
                Back
              </button>
              </Link>
              <button className="btn btn-primary sub" onClick={handleEditSubmit}>
              Update
            </button>
            </div>
            </div>
          </div>
          </section>
        </main>
      </>
    );
  }
  
  export default AssignAssetEdit;