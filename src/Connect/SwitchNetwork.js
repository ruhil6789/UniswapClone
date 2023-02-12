import React from 'react'

import { binanceTest, avalancheTest, GoreliTest, polygonTest } from './constant'
import Web3 from 'web3';

export const SwitchNetwork = async (data) => {
    let network;
    if (data == polygonTest.chainId) network = polygonTest
    else if (data == avalancheTest.chainId) network = avalancheTest
    else if (data == binanceTest.chainId) network = binanceTest
    else if (data == GoreliTest.chainId) network = GoreliTest

    try {
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: Web3.utils.toHex(data) }],

        });

    } catch (error) {
        if (error.code == 4001) {
            return error.message
        }
        if (error.code == 4902) {
            try {
                const res = await window.ethereum.request({

                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: Web3.utils.toHex(network?.chainId),
                            chainName: [network.chainName],
                            nativeCurrency: {
                                name: network.chainName,
                                symbol: network.currencySymbol,
                                decimals: 18
                            }
                        }
                    ]
                })
                return res
            } catch (error) {
                return error.message
            }
        }
    }


}
