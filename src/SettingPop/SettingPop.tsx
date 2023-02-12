// import React, { useState, useEffect } from 'react'
// import { Modal, Row, Select, Col, Input } from 'antd'
// // import { useDispatch, useSelector } from 'react-redux';


// import { setSlippageTolerance } from '../../redux/address/addressSlice';



// type SettingProps = {
//     isSettingVisible: boolean;
//     showModal1: () => void,
//     handleCancel1: () => void,
// }

// export const SettingPop = (props: SettingProps) => {
//     const { Option } = Select;
//     const dispatch = useDispatch();
//     const slippageTolerance: any = useSelector((state: any) => state.address.slippageTolerance)

//     const handleChange = (value) => {
//         dispatch(setSlippageTolerance(value));
//     }

//     const [day, setDay] = useState(false);
//     useEffect(() => {
//         const theme = localStorage.getItem('theme');
//         if (theme == "dark") {
//             document.body.classList.remove("darkTheme");
//             return document.body.classList.add("darkTheme");
//         }
//         document.body.classList.remove("darkTheme");
//         document.body.classList.add('lightTheme');
//     }, [])

//     const handleToggle = async () => {
//         const theme = await localStorage.getItem('theme');
//         if (theme == " dark") {
//             setDay(false);
//             document.body.classList.remove('darkTheme');
//             document.body.classList.add('lightTheme');
//             localStorage.removeItem('theme')
//         } else {
//             setDay(true);
//             document.body.classList.remove('lightTheme');
//             document.body.classList.add('darkTheme');
//             localStorage.setItem('theme', 'dark');

//         }
//     }

//     return (
//         <>
//             <Modal
//                 title="Setting"
//                 data-scrollable={true}
//                 open={props.isSettingVisible}
//                 onCancel={props.isSettingVisible}
//                 className='connect-Wallet'
//                 footer={null}
//                 centered
//             >
//                 <Row>
//                     <Col className='design_pop'>
//                         <ul>
//                             <li>
//                                 <div className='options'>
//                                     <span>Theme</span>
//                                     <div className='theme_change'>
//                                         <button onClick={handleToggle}>
//                                             <span className='sunIcon'>
//                                                 <SunIcon />
//                                             </span>
//                                             <span className='slash'>/</span>
//                                             <span className='moonIcon'>
//                                                 <MoonIcon />
//                                             </span>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </li>
//                             <li>
//                                 <div className='options'>
//                                     <span>Slippage Tolerance</span>
//                                     <Select defaultValue={slippageTolerance} onChange={handleChange}>
//                                         <option value='2.5'>2.5%</option>
//                                         <option value='5'>5%</option>
//                                         <option value='7'>7%</option>
//                                         <option value='10'>10%</option>
//                                         <option value='30'>30%</option>
//                                         <option value='50'>50%</option>

//                                     </Select>
//                                 </div>
//                             </li>
//                             <div className='options'>
//                                 <Select defaultValue={"Goreli"} onChange={handle}>
//                                     <option value="BINANCE">BINANCE</option>
//                                     <option value="AVALANCE">AVALANCHE</option>
//                                     <option value="MATIC">MATIC</option>
//                                     <option value="SEPOLIA">SEPOLIA</option>



//                                 </Select>
//                             </div>
//                         </ul>
//                     </Col>
//                 </Row>

//             </Modal>

//         </>
//     )
// }

// export default SettingPop;