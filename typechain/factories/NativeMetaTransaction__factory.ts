/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NativeMetaTransaction,
  NativeMetaTransactionInterface,
} from "../NativeMetaTransaction";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "relayerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
  },
  {
    inputs: [],
    name: "domainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "sigV",
        type: "uint8",
      },
    ],
    name: "executeMetaTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610759806100206000396000f3fe60806040526004361061003f5760003560e01c80630c53c51c146100445780632d0335ab1461006d5780633408e470146100b1578063f698da25146100c4575b600080fd5b6100576100523660046104d6565b6100da565b6040516100649190610663565b60405180910390f35b34801561007957600080fd5b506100a36100883660046104bc565b6001600160a01b031660009081526001602052604090205490565b604051908152602001610064565b3480156100bd57600080fd5b50466100a3565b3480156100d057600080fd5b506100a360005481565b60408051606081810183526001600160a01b0388166000818152600160209081529085902054845283015291810186905261011887828787876102f7565b61018f5760405162461bcd60e51b815260206004820152603d60248201527f4e4d5423657865637574654d6574615472616e73616374696f6e3a205349474e60448201527f45525f414e445f5349474e41545552455f444f5f4e4f545f4d4154434800000060648201526084015b60405180910390fd5b6001600160a01b0387166000908152600160208190526040909120546101b4916103d6565b6001600160a01b0388166000908152600160205260409081902091909155517f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b9061020490899033908a9061062e565b60405180910390a1600080306001600160a01b031634898b60405160200161022d9291906105fc565b60408051601f1981840301815290829052610247916105e0565b60006040518083038185875af1925050503d8060008114610284576040519150601f19603f3d011682016040523d82523d6000602084013e610289565b606091505b5091509150816102eb5760405162461bcd60e51b815260206004820152602760248201527f4e4d5423657865637574654d6574615472616e73616374696f6e3a2043414c4c60448201526617d1905253115160ca1b6064820152608401610186565b98975050505050505050565b60006001600160a01b03861661034c5760405162461bcd60e51b815260206004820152601a6024820152792726aa11bb32b934b33c9d1024a72b20a624a22fa9a4a3a722a960311b6044820152606401610186565b600161035f61035a876103e9565b610466565b6040805160008152602081018083529290925260ff851690820152606081018690526080810185905260a0016020604051602081039080840390855afa1580156103ad573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b031614905095945050505050565b60006103e28284610676565b9392505050565b60006040518060800160405280604381526020016106e16043913980516020918201208351848301516040808701518051908601209051610449950193845260208401929092526001600160a01b03166040830152606082015260800190565b604051602081830303815290604052805190602001209050919050565b6000805460405161190160f01b6020820152602281019190915260428101839052606201610449565b80356001600160a01b03811681146104a657600080fd5b919050565b803560ff811681146104a657600080fd5b6000602082840312156104cd578081fd5b6103e28261048f565b600080600080600060a086880312156104ed578081fd5b6104f68661048f565b945060208601356001600160401b0380821115610511578283fd5b818801915088601f830112610524578283fd5b813581811115610536576105366106ca565b604051601f8201601f19908116603f0116810190838211818310171561055e5761055e6106ca565b816040528281528b6020848701011115610576578586fd5b82602086016020830137918201602001859052509550505060408601359250606086013591506105a8608087016104ab565b90509295509295909350565b600081518084526105cc81602086016020860161069a565b601f01601f19169290920160200192915050565b600082516105f281846020870161069a565b9190910192915050565b6000835161060e81846020880161069a565b60609390931b6001600160601b0319169190920190815260140192915050565b6001600160a01b0384811682528316602082015260606040820181905260009061065a908301846105b4565b95945050505050565b6020815260006103e260208301846105b4565b6000821982111561069557634e487b7160e01b81526011600452602481fd5b500190565b60005b838110156106b557818101518382015260200161069d565b838111156106c4576000848401525b50505050565b634e487b7160e01b600052604160045260246000fdfe4d6574615472616e73616374696f6e2875696e74323536206e6f6e63652c616464726573732066726f6d2c62797465732066756e6374696f6e5369676e617475726529a26469706673582212208d2fcf9fc42d75377270ebbc7e1c68a9339e69d6e647aa3de690daae4bc71d4964736f6c63430008040033";

export class NativeMetaTransaction__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NativeMetaTransaction> {
    return super.deploy(overrides || {}) as Promise<NativeMetaTransaction>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NativeMetaTransaction {
    return super.attach(address) as NativeMetaTransaction;
  }
  connect(signer: Signer): NativeMetaTransaction__factory {
    return super.connect(signer) as NativeMetaTransaction__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NativeMetaTransactionInterface {
    return new utils.Interface(_abi) as NativeMetaTransactionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NativeMetaTransaction {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NativeMetaTransaction;
  }
}
