// import React, { useState } from "react";
// import "semantic-ui-css/semantic.min.css";
// import "./HeaderView.css";
// import {
//   Button,
//   Form,
//   Modal,
//   Icon,
//   Menu,
//   Input,
//   Dropdown,
//   Image,
// } from "semantic-ui-react";

// const menuStyle = {
//   display: "flex",
//   justifyContent: "space-around",
//   background: "rgba(155, 155, 155, 0.2)",
//   padding: 20,
// };
// const inputStyle = {
//   marginLeft: "50%",
//   width: "20%",
// };
// const dropdownStyle = {
//   display: "block",
// };
// const iconStyle = {
//   cursor: "pointer",
// };
// function HeaderView(props) {
//   const [open, setOpen] = React.useState(false);
//   const options = [
//     { key: "beds", icon: "bed", text: "Beds", value: "edit" },
//     { key: "delete", icon: "home", text: "Sofas", value: "delete" },
//     { key: "hide", icon: "archive", text: "Tables", value: "hide" },
//     { key: "hide", icon: "coffee", text: "Accs", value: "hide" },
//   ];

//   const [loginStatus, setLoginStatus] = useState(false);
//   const { onSwitchItem, loginBool, setLoginUser, onSelectCategory } = props;
//   console.log(loginStatus);
//   return (
//     <div>
//       <Menu style={menuStyle}>
//         <Button.Group>
//           <Button color="black">
//             <Dropdown icon="bars" floating style={dropdownStyle}>
//               <Dropdown.Menu>
//                 {options.map((option, idx) => (
//                   <Dropdown.Item
//                     key={idx}
//                     onClick={() => onSelectCategory(option.text)}
//                   >
//                     <Icon name={option.icon}></Icon>
//                     <span>{option.text}</span>
//                   </Dropdown.Item>
//                 ))}
//               </Dropdown.Menu>
//             </Dropdown>
//           </Button>
//         </Button.Group>
//         {/* <Icon name='angellist' size="huge" style={{iconStyle}}></Icon> */}
//         <Input
//           className="inputSearch"
//           size="huge"
//           icon="search"
//           placeholder="Search..."
//           style={inputStyle}
//         />
//         <Modal
//           className="loginModal"
//           onClose={() => setOpen(false)}
//           onOpen={() => setOpen(true)}
//           open={open}
//           trigger={
//             !loginStatus && (
//               <Button icon size="huge" color="black" style={{ float: "right" }}>
//                 <Icon name="user circle outline" />
//                 LOGIN
//               </Button>
//             )
//           }
//         >
//           <Modal.Header>Login Page</Modal.Header>
//           <Modal.Content form>
//             <Form className="formModal">
//               <Form.Input
//                 icon="user"
//                 iconPosition="left"
//                 label="Username"
//                 placeholder="Username"
//                 onChange={(e) => setLoginUser("userID", e.target.value)}
//               />
//               <Form.Input
//                 icon="lock"
//                 iconPosition="left"
//                 label="Password"
//                 type="password"
//                 placeholder="Password"
//                 onChange={(e) => setLoginUser("userPassword", e.target.value)}
//               />
//             </Form>
//           </Modal.Content>
//           <Modal.Actions>
//             <Button color="black" onClick={() => setOpen(false)}>
//               Sign Up
//             </Button>

//             <Button
//               content="Login"
//               labelPosition="right"
//               icon="checkmark"
//               onClick={() => {
//                 if (loginBool) {
//                   alert("로그인이 성공했습니다.");
//                   setLoginStatus(true);
//                   setOpen(false);
//                 } else {
//                   alert("아이디나 비밀번호를 확인하세요.");
//                 }
//               }}
//               positive
//             />
//           </Modal.Actions>
//         </Modal>
//         {loginStatus && (
//           <>
//             {" "}
//             <Icon
//               size="huge"
//               name="shopping basket"
//               onClick={() => onSwitchItem("cart")}
//               style={iconStyle}
//             />{" "}
//             <Icon size="huge" name="user circle" style={iconStyle} />
//           </>
//         )}{" "}
//       </Menu>
//       <Image
//         src="resrc/kkj/logo.png"
//         onClick={() => onSwitchItem("home")}
//         style={{
//           height: "6rem",
//           position: "absolute",
//           top: "15%",
//           left: "11%",
//           cursor: "pointer",
//         }}
//       ></Image>
//     </div>
//   );
// }
// export default HeaderView;

import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "./HeaderView.css";
import {
  Button,
  Form,
  Modal,
  Icon,
  Menu,
  Input,
  Dropdown,
  Image,
} from "semantic-ui-react";

const menuStyle = {
  display: "flex",
  justifyContent: "space-around",
  background: "rgba(155, 155, 155, 0.2)",
  padding: 20,
};
const inputStyle = {
  marginLeft: "50%",
  width: "20%",
};
const dropdownStyle = {
  display: "block",
};
const iconStyle = {
  cursor: "pointer",
};
function HeaderView(props) {
  const [open, setOpen] = React.useState(false);
  const options = [
    { key: "beds", icon: "bed", text: "Beds", value: "edit" },
    { key: "delete", icon: "home", text: "Sofas", value: "delete" },
    { key: "hide", icon: "archive", text: "Tables", value: "hide" },
    { key: "hide", icon: "coffee", text: "Accs", value: "hide" },
  ];

  const [loginStatus, setLoginStatus] = useState(false);
  const { onSwitchItem, loginBool, setLoginUser, onSelectCategory } = props;
  console.log(loginStatus);
  return (
    <div>
      <Menu style={menuStyle}>
        <Button.Group>
          <Button color="black">
            <Dropdown icon="bars" floating style={dropdownStyle}>
              <Dropdown.Menu
                style={{ height: "255px", width: "200px", fontSize: "25px" }}
              >
                {options.map((option, idx) => (
                  <Dropdown.Item
                    key={idx}
                    onClick={() => onSelectCategory(option.text)}
                  >
                    <Icon name={option.icon}></Icon>
                    <span>{option.text}</span>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Button>
        </Button.Group>
        <Input
          className="inputSearch"
          size="huge"
          icon="search"
          placeholder="Search..."
          style={inputStyle}
        />
        <Modal
          className="loginModal"
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={
            !loginStatus && (
              <Button icon size="huge" color="black" style={{ float: "right" }}>
                <Icon name="user circle outline" />
                LOGIN
              </Button>
            )
          }
        >
          <Modal.Header>Login Page</Modal.Header>
          <Modal.Content form>
            <Form className="formModal">
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                placeholder="Username"
                onChange={(e) => setLoginUser("userID", e.target.value)}
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
                placeholder="Password"
                onChange={(e) => setLoginUser("userPassword", e.target.value)}
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={() => setOpen(false)}>
              Sign Up
            </Button>

            <Button
              content="Login"
              labelPosition="right"
              icon="checkmark"
              onClick={() => {
                if (loginBool) {
                  alert("로그인이 성공했습니다.");
                  setLoginStatus(true);
                  setOpen(false);
                } else {
                  alert("아이디나 비밀번호를 확인하세요.");
                }
              }}
              positive
            />
          </Modal.Actions>
        </Modal>
        {loginStatus && (
          <>
            {" "}
            <Icon
              size="huge"
              name="shopping basket"
              onClick={() => onSwitchItem("cart")}
              style={iconStyle}
            />{" "}
            <Icon size="huge" name="user circle" style={iconStyle} />
          </>
        )}{" "}
      </Menu>
      <Image
        src="resrc/kkj/logolast.png"
        onClick={() => onSwitchItem("home")}
        style={{
          height: "3rem",
          position: "absolute",
          top: "27%",
          left: "11%",
          cursor: "pointer",
        }}
      ></Image>
    </div>
  );
}
export default HeaderView;
