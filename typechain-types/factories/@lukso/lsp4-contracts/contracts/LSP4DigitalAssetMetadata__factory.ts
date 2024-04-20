/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  LSP4DigitalAssetMetadata,
  LSP4DigitalAssetMetadataInterface,
} from "../../../../@lukso/lsp4-contracts/contracts/LSP4DigitalAssetMetadata";

const _abi = [
  {
    inputs: [],
    name: "ERC725Y_DataKeysValuesEmptyArray",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC725Y_DataKeysValuesLengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC725Y_MsgValueDisallowed",
    type: "error",
  },
  {
    inputs: [],
    name: "LSP4TokenNameNotEditable",
    type: "error",
  },
  {
    inputs: [],
    name: "LSP4TokenSymbolNotEditable",
    type: "error",
  },
  {
    inputs: [],
    name: "LSP4TokenTypeNotEditable",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "callerAddress",
        type: "address",
      },
    ],
    name: "OwnableCallerNotTheOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnableCannotSetZeroAddressAsOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "dataKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "dataValue",
        type: "bytes",
      },
    ],
    name: "DataChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataKey",
        type: "bytes32",
      },
    ],
    name: "getData",
    outputs: [
      {
        internalType: "bytes",
        name: "dataValue",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "dataKeys",
        type: "bytes32[]",
      },
    ],
    name: "getDataBatch",
    outputs: [
      {
        internalType: "bytes[]",
        name: "dataValues",
        type: "bytes[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataKey",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "dataValue",
        type: "bytes",
      },
    ],
    name: "setData",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "dataKeys",
        type: "bytes32[]",
      },
      {
        internalType: "bytes[]",
        name: "dataValues",
        type: "bytes[]",
      },
    ],
    name: "setDataBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class LSP4DigitalAssetMetadata__factory {
  static readonly abi = _abi;
  static createInterface(): LSP4DigitalAssetMetadataInterface {
    return new Interface(_abi) as LSP4DigitalAssetMetadataInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): LSP4DigitalAssetMetadata {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as LSP4DigitalAssetMetadata;
  }
}
