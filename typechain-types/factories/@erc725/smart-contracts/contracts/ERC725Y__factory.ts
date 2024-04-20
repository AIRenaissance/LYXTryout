/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../../../common";
import type {
  ERC725Y,
  ERC725YInterface,
} from "../../../../@erc725/smart-contracts/contracts/ERC725Y";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
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

const _bytecode =
  "0x6080604052604051610cbf380380610cbf833981016040819052610022916100c5565b6001600160a01b038116610049576040516306b620db60e21b815260040160405180910390fd5b61005281610058565b506100f5565b6000546001600160a01b038281169116146100c257600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0383161790555b50565b6000602082840312156100d757600080fd5b81516001600160a01b03811681146100ee57600080fd5b9392505050565b610bbb806101046000396000f3fe60806040526004361061007b5760003560e01c80638da5cb5b1161004e5780638da5cb5b1461010c5780639790242114610134578063dedff9c614610147578063f2fde38b1461017457600080fd5b806301ffc9a71461008057806354f6127f146100b5578063715018a6146100e25780637f23690c146100f9575b600080fd5b34801561008c57600080fd5b506100a061009b366004610648565b610194565b60405190151581526020015b60405180910390f35b3480156100c157600080fd5b506100d56100d0366004610691565b61022d565b6040516100ac91906106f0565b3480156100ee57600080fd5b506100f7610238565b005b6100f76101073660046107ba565b61024c565b34801561011857600080fd5b506000546040516001600160a01b0390911681526020016100ac565b6100f7610142366004610890565b610281565b34801561015357600080fd5b50610167610162366004610965565b610373565b6040516100ac91906109a2565b34801561018057600080fd5b506100f761018f366004610a04565b61041e565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f629aa69400000000000000000000000000000000000000000000000000000000148061022757507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b606061022782610472565b610240610514565b61024a600061056d565b565b610254610514565b34156102735760405163f36ba73760e01b815260040160405180910390fd5b61027d82826105f3565b5050565b610289610514565b34156102a85760405163f36ba73760e01b815260040160405180910390fd5b80518251146102e3576040517f3bcc897900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815160000361031e576040517f97da5f9500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b825181101561036e5761036683828151811061033f5761033f610a2d565b602002602001015183838151811061035957610359610a2d565b60200260200101516105f3565b600101610321565b505050565b6060815167ffffffffffffffff81111561038f5761038f610703565b6040519080825280602002602001820160405280156103c257816020015b60608152602001906001900390816103ad5790505b50905060005b8251811015610418576103f38382815181106103e6576103e6610a2d565b6020026020010151610472565b82828151811061040557610405610a2d565b60209081029190910101526001016103c8565b50919050565b610426610514565b6001600160a01b038116610466576040517f1ad8836c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61046f8161056d565b50565b600081815260016020526040902080546060919061048f90610a43565b80601f01602080910402602001604051908101604052809291908181526020018280546104bb90610a43565b80156105085780601f106104dd57610100808354040283529160200191610508565b820191906000526020600020905b8154815290600101906020018083116104eb57829003601f168201915b50505050509050919050565b336105276000546001600160a01b031690565b6001600160a01b03161461024a576040517fbf1169c500000000000000000000000000000000000000000000000000000000815233600482015260240160405180910390fd5b6000546001600160a01b0382811691161461046f57600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0383167fffffffffffffffffffffffff000000000000000000000000000000000000000090911617905550565b600082815260016020526040902061060b8282610ac5565b50817fece574603820d07bc9b91f2a932baadf4628aabcb8afba49776529c14a6104b28260405161063c91906106f0565b60405180910390a25050565b60006020828403121561065a57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461068a57600080fd5b9392505050565b6000602082840312156106a357600080fd5b5035919050565b6000815180845260005b818110156106d0576020818501810151868301820152016106b4565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061068a60208301846106aa565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561074257610742610703565b604052919050565b600082601f83011261075b57600080fd5b813567ffffffffffffffff81111561077557610775610703565b610788601f8201601f1916602001610719565b81815284602083860101111561079d57600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156107cd57600080fd5b82359150602083013567ffffffffffffffff8111156107eb57600080fd5b6107f78582860161074a565b9150509250929050565b600067ffffffffffffffff82111561081b5761081b610703565b5060051b60200190565b600082601f83011261083657600080fd5b8135602061084b61084683610801565b610719565b82815260059290921b8401810191818101908684111561086a57600080fd5b8286015b84811015610885578035835291830191830161086e565b509695505050505050565b600080604083850312156108a357600080fd5b823567ffffffffffffffff808211156108bb57600080fd5b6108c786838701610825565b93506020915081850135818111156108de57600080fd5b8501601f810187136108ef57600080fd5b80356108fd61084682610801565b81815260059190911b8201840190848101908983111561091c57600080fd5b8584015b83811015610954578035868111156109385760008081fd5b6109468c898389010161074a565b845250918601918601610920565b508096505050505050509250929050565b60006020828403121561097757600080fd5b813567ffffffffffffffff81111561098e57600080fd5b61099a84828501610825565b949350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156109f757603f198886030184526109e58583516106aa565b945092850192908501906001016109c9565b5092979650505050505050565b600060208284031215610a1657600080fd5b81356001600160a01b038116811461068a57600080fd5b634e487b7160e01b600052603260045260246000fd5b600181811c90821680610a5757607f821691505b60208210810361041857634e487b7160e01b600052602260045260246000fd5b601f82111561036e57600081815260208120601f850160051c81016020861015610a9e5750805b601f850160051c820191505b81811015610abd57828155600101610aaa565b505050505050565b815167ffffffffffffffff811115610adf57610adf610703565b610af381610aed8454610a43565b84610a77565b602080601f831160018114610b285760008415610b105750858301515b600019600386901b1c1916600185901b178555610abd565b600085815260208120601f198616915b82811015610b5757888601518255948401946001909101908401610b38565b5085821015610b755787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea26469706673582212209048bc6809f327a7495a61c2780c173b4814cfe8ce9647e899feca978ee8f40664736f6c63430008130033";

type ERC725YConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC725YConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC725Y__factory extends ContractFactory {
  constructor(...args: ERC725YConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialOwner, overrides || {});
  }
  override deploy(
    initialOwner: AddressLike,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(initialOwner, overrides || {}) as Promise<
      ERC725Y & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC725Y__factory {
    return super.connect(runner) as ERC725Y__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC725YInterface {
    return new Interface(_abi) as ERC725YInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC725Y {
    return new Contract(address, _abi, runner) as unknown as ERC725Y;
  }
}
