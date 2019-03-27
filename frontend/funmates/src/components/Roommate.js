// import React from "react";

// import { List, Avatar, Icon } from "antd";

// // const listData = [];
// // for (let i = 0; i < 3; i++) {
// //   listData.push({
// //     href: "http://ant.design",
// //     title: `ant design part ${i}`,
// //     avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
// //     description:
// //       "Ant Design, a design language for background applications, is refined by Ant UED Team.",
// //     content:
// //       "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
// //   });
// // }

// const IconText = ({ type, text }) => (
//   <span>
//     <Icon type={type} style={{ marginLeft: 10 }} />
//     {text}
//   </span>
// );

// const Roommate = props => {
//   return (
//     <div>
//       <List
//         itemLayout="vertical"
//         size="small"
//         pagination={{
//           onChange: page => {
//             console.log(page);
//           },
//           pageSize: 1
//         }}
//         dataSource={props.Roommate}
//         renderItem={item => (
//           <List.Item
//             key={item.title}
//             actions={[
//               <IconText type="star-o" text="156" />,
//               <IconText type="like-o" text="156" />,
//               <IconText type="message" text="2" />
//             ]}
//             extra={
//               <img
//                 width={100}
//                 alt="logo"
//                 src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
//               />
//             }
//           >
//             <List.Item.Meta
//               avatar={<Avatar src={item.avatar} />}
//               title={<a href={item.href}>{item.title}</a>}
//               desription={item.desription}
//             />
//             {item.content}
//           </List.Item>
//         )}
//       />
//     </div>
//   );
// };

// export default Roommate;

import React from "react";

const Roommate = props => {
  return (
    <div style={{ marginTop: "30px" }}>
      <ul className="demo-list-icon mdl-list">
        {/* <li className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-icon">person</i>
            Bryan Cranston
          </span>
        </li>
        <li className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-icon">person</i>
            Aaron Paul
          </span>
        </li>
        <li className="mdl-list__item">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-icon">person</i>
            Bob Odenkirk
          </span> */}
        {/* </li> */}
        <li className="mdl-list__item" key={props.roommate.id}>
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-icon">person</i>
            <p>{props.roommate.name}</p>
          </span>
          <span className="mdl-list__item-primary-content">
            {/* <i className="material-icons mdl-list__item-icon">person</i> */}
            {/* <p>{props.roommate.favourite_quote}</p> */}
          </span>
          <p>{props.roommate.favourite_quote}</p>
          {/* <p>{props.roommate.name}</p>
          <p>{props.roommate.favorite_quote}</p> */}
        </li>
      </ul>

      {/* <ul style={{ listStyle: "none" }}>
        <li key={props.roommate.id}>
          <p>{props.roommate.name}</p>
          <p>{props.roommate.favorite_quote}</p>
        </li>
      </ul> */}

      <hr />
    </div>
  );
};

export default Roommate;
