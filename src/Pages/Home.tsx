import React, { useEffect, useState } from "react";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import axios from "axios";
import CustomDropDwon from "../Components/CustomDropDwon";
import { countryOptions, base_url } from "../Utils/Common";
const Home = () => {
  const [addressData, setAddressData] = useState<{
    name: string;
    street_name: string;
    city: string;
    country: string;
    house_number: string;
    postal_code: string;
  } | null>(null);
  const [compName, setCompName] = useState("");
  const [country, setCountry] = useState("");

  const headers = {
    Version: "CIBT",
  };
  const searchAddressUrl = `${base_url}/api/personas/address-search?country=${country}&name=${compName}`;
  useEffect(() => {
    if (compName && country) {
      searchAddress();
    }
  }, [compName, country]);

  const searchAddress = () => {
    axios
      .get(searchAddressUrl, { headers })
      .then((response) => {
        // console.log("Response:", response.data[0]);
        setAddressData(response.data[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.2)",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          height: 350,
          width: "45%",
        }}
      >
        <div
          style={{
            padding: 50,
            flexDirection: "row",
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            justifyContent: "space-between",
          }}
        >
          <CustomInput
            placeholder={"Name"}
            name={"name"}
            type={"text"}
            onChange={(e) => {
              setCompName(e.target.value);
            }}
            onSubmit={() => {}}
            value={compName}
          />
          <CustomDropDwon
            placeholder={"Country"}
            name={"country"}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            options={countryOptions}
          />
          <CustomInput
            placeholder={"Street Name"}
            name={"name"}
            type={"text"}
            onChange={() => {}}
            onSubmit={() => {}}
            value={addressData?.street_name}
          />
          <CustomInput
            placeholder={"Street Number"}
            name={"name"}
            type={"text"}
            onChange={() => {}}
            onSubmit={() => {}}
            value={addressData?.house_number}
          />
          <CustomInput
            placeholder={"Post Code"}
            name={"name"}
            type={"text"}
            onChange={() => {}}
            onSubmit={() => {}}
            value={addressData?.postal_code}
          />
          <CustomInput
            placeholder={"Town / City"}
            name={"name"}
            type={"text"}
            onChange={() => {}}
            onSubmit={() => {}}
            value={addressData?.city}
          />
          <CustomInput
            placeholder={"Location"}
            name={"name"}
            type={"text"}
            onChange={() => {}}
            onSubmit={() => {}}
            value={addressData?.country}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "flex-end",
            marginRight: 40,
          }}
        >
          <CustomButton
            borderColor={"purple"}
            textColor={"purple"}
            text="Close"
            onClick={() => {}}
            backgroundColor="transparent"
          />
          <CustomButton
            borderColor={"transparent"}
            textColor={"white"}
            text="Add More"
            onClick={() => {}}
            backgroundColor="purple"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
