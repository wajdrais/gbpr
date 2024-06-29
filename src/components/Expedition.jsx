import React from "react";
import bac from "../assests/bac.png";
import palette from "../assests/palette.png";
import logo from "../assests/logo1.png";

function Expedition() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "1100px",
          height: "550px",
          border: "solid 1px #808080",
          borderRadius: "30px",
          marginTop: "50px",
          marginBottom: "50px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <img src={logo} alt="logo" style={{ width: "100px" }} />
          <h1
            style={{
              color: "#01c3df",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            EXPEDITION
          </h1>
        </div>
        <div style={{ display: "flex", marginTop: "50px" }}>
          <div style={{ display: "flex", marginLeft: "20px" }}>
            <p>Fournisseur :</p>
            <select
              style={{
                padding: "2px",
                borderRadius: "5px",
                border: "1px solid #808080",
                marginLeft: "10px",
              }}
            >
              <option value="Wajd and his brothers">
                Wajd and his brothers
              </option>
              <option value="Mahmoud gmbh">Mahmoud gmbh</option>
              <option value="Zaouri Holding">Zaouri Holding</option>
            </select>
          </div>
          <div style={{ display: "flex", marginLeft: "20px" }}>
            <p>M.camion :</p>
            <input
              type="text"
              placeholder="XXXXXXXX"
              style={{
                marginLeft: "10px",
                padding: "8px",
                width: "141px",
                borderRadius: "5px",
                border: "1px solid #808080",
              }}
            />
          </div>
          <div style={{ display: "flex", marginLeft: "20px" }}>
            <p>Numéro BL :</p>
            <input
              type="text"
              placeholder="XXXXXXXX"
              style={{
                marginLeft: "10px",
                padding: "8px",
                width: "141px",
                borderRadius: "5px",
                border: "1px solid #808080",
              }}
            />
          </div>
        </div>

        <div
          id="bacpalette"
          style={{
            display: "flex",
            marginTop: "70px",
            justifyContent: "center",
            gap: "200px",
          }}
        >
          <div id="bac">
            <div
              id="baccontent"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", marginLeft: "48px" , marginBottom:"10px" }}>
                <label>
                  <input type="checkbox" name="Bacs" value=" Bacs" />
                  Bacs
                </label>
                <img src={bac} alt="bac photo" style={{ width: "60px" }} />
              </div>
              <div style={{ display: "flex" }}>
                <p>Quantité :</p>
                <input
                  type="text"
                  placeholder="XXXXX"
                  style={{
                    marginLeft: "27px",
                    paddingLeft: "8px",
                    width: "141px",
                    borderRadius: "5px",
                    border: "1px solid #808080",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              borderLeft: "1px solid #ccc",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          ></div>
          <div id="palette">
            <div>
              <div style={{ display: "flex", marginLeft: "60px", marginBottom:"10px" }}>
                <label>
                  <input type="checkbox" name="palette" value=" palette" />
                  Palette
                </label>
                <img src={palette} alt="palette photo" style={{ width: "60px" }} />
              </div>
              <div id="checkboxes" style={{ marginBottom: "20px" }}>
                <div
                  id="first"
                  style={{ display: "flex", gap: "50px", marginBottom: "15px" }}
                >
                  <label>
                    <input
                      type="checkbox"
                      name="plastique"
                      value=" plastique"
                    />
                    Plastique
                  </label>
                  <label>
                    <input type="checkbox" name="type" value=" type" />
                    120 x 120
                  </label>
                </div>
                <div id="second" style={{ display: "flex", gap: "85px" }}>
                  <label>
                    <input
                      type="checkbox"
                      name="plastique"
                      value=" plastique"
                    />
                    Bois
                  </label>
                  <label>
                    <input type="checkbox" name="type" value=" type" />
                    120 x 80
                  </label>
                </div>
              </div>
              <div id="Q" style={{ display: "flex" }}>
                <p>Quantité :</p>
                <input
                  type="text"
                  placeholder="XXXXX"
                  style={{
                    marginLeft: "27px",
                    paddingLeft: "8px",
                    width: "141px",
                    borderRadius: "5px",
                    border: "1px solid #808080",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "50px" }}>
          <button
            type="submit"
            style={{
              margin: "20px 0",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#01c3df",
              color: "white",
              cursor: "pointer",
            }}
          >
            Valider
          </button>
        </div>
      </div>
    </div>
  );
}

export default Expedition;
