
import { createSlice } from '@reduxjs/toolkit'

export const addressSlice = createSlice({
    name: 'address',
    initialState: {
        waddress: '',
        walletName: 'Metamask',
        walletModal: '',
        networkModal: 'false',

        networkName: '',
        tokenName: "",
        token1Bal: '',
        token2Bal: '',
        tokenList: [],
        poolList: [],
        slippageTolerance: '3',
        remLiqPercent: "1"
    },
    setWAddress: (state, action) => {
        state.waddress = action.payload
    },
    setWalletName: (state, action) => {
        state.walletName = action.payload
    },
    setWalletModal: (state, action) => {
        state.walletModal = action.payload
    },
    setNetworkName: (state, action) => {
        state.networkName = action.payload
    },
    setTokenName: (state, action) => {
        state.tokenName = action.payload
    },
    setToken1Bal: (state, action) => {
        state.token1Bal = action.payload
    },
    setToken2Bal: (state, action) => {
        state.token2Bal = action.payload
    },
    setPoolList: (state, action) => {
        state.poolList = action.payload
    },
    setTokenList: (state, action) => {
        state.tokenList = action.payload
    },
    setSlippageTolerance: (state, action) => {
        state.slippageTolerance = action.payload
    },
    setRemoveLiqPercent: (state, action) => {
        state.remLiqPercent = action.payload
    }
});
export const {
    setWAddress,
    setWalletName,
    setWalletModal,
    setNetworkName,
    setTokenName,
    setToken1Bal,
    setToken2Bal,
    setTokenList,
    setSlippageTolerance,
    setRemoveLiqPercent,
} = addressSlice.actions

export default addressSlice.reducer;