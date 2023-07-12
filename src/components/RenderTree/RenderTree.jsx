import React from "react";

const RenderTree = ({ userData }) => (
  <div className="tree">{nestedNodes(userData)}</div>
);

const nestedNodes = (userData) => {
  return (
    <ul>
      {userData?.map((item, index) => {
        let conditional_class = "";
        let conditional_border = "";
        switch (item.Test_Result) {
          case 0:
            conditional_class = "not_tested";
            break;
          case "Negative":
            conditional_class = "p_negative";
            break;
          case "Positive":
            conditional_class = "p_positive";
            break;
          default:
            conditional_class = "";
        }

        switch (item.Contact_type) {
          case "Spouse":
            conditional_border = "spouse";
            break;
          case "Sexual Partner":
            conditional_border = "s_partner";
            break;
          case "Injecting Partner":
            conditional_border = "i_partner";
            break;
          default:
            conditional_border = "";
        }

        return (
          // check the key porp
          <li key={index}>
            <div className={`${conditional_class} ${conditional_border}`}>
              <p>{item.Index_client_Code}</p>
              {/* {test && <p>Name</p>} */}
            </div>
            {/* {console.log(item)} */}
            {item.nodes && item.nodes.length ? nestedNodes(item.nodes) : ""}
          </li>
        );
      })}
    </ul>
  );
};

export default RenderTree;
