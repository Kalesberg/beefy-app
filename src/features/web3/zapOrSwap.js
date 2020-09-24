import { fetchGasPrice } from '.';

export const zapOrSwap = async ({web3, address, contract, call, amount}) => {
  // console.log(`=====================================deposit begin=====================================`)
  const gasPrice = await fetchGasPrice();
  console.log(`
    address:${address}\n
    gasPrice:${gasPrice}\n
    call:${call}\n
    amount:${amount}
  `)
  const data = await _zapOrSwap({web3, address, contract, call, amount, gasPrice:web3.utils.toWei(gasPrice, 'gwei')});
  // console.log(`=====================================deposit success=====================================`)
  return data;
}

const _zapOrSwap = ({contract, amount, call, address, gasPrice}) => {
  return new Promise((resolve, reject) => {
    // console.log(isAll)
    contract.methods[call](amount).send({ from: address, gasPrice }).on('transactionHash', function(hash){
      console.log(hash)
      resolve(hash)
    })
    .on('confirmation', function(confirmationNumber, receipt){
      console.log(confirmationNumber, receipt);
    })
    .on('receipt', function(receipt){
      console.log(receipt);
    })
    .on('error', function(error) {
      console.log(error)
    })
    .catch((error) => {
      console.log(error)
      reject(error)
    })
  })
}