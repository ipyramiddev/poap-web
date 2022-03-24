/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IERC721CollectionInterface extends ethers.utils.Interface {
  functions: {
    "COLLECTION_HASH()": FunctionFragment;
    "initialize(string,string,string,address,bool,bool,address,tuple[])": FunctionFragment;
    "issueTokens(address[],uint256[])": FunctionFragment;
    "items(uint256)": FunctionFragment;
    "setApproved(bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "COLLECTION_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      string,
      string,
      string,
      string,
      boolean,
      boolean,
      string,
      {
        rarity: string;
        price: BigNumberish;
        beneficiary: string;
        metadata: string;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "issueTokens",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "items", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "setApproved",
    values: [boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "COLLECTION_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "issueTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "items", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setApproved",
    data: BytesLike
  ): Result;

  events: {};
}

export class IERC721Collection extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IERC721CollectionInterface;

  functions: {
    COLLECTION_HASH(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _name: string,
      _symbol: string,
      _baseURI: string,
      _creator: string,
      _shouldComplete: boolean,
      _isApproved: boolean,
      _rarities: string,
      _items: {
        rarity: string;
        price: BigNumberish;
        beneficiary: string;
        metadata: string;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    issueTokens(
      _beneficiaries: string[],
      _itemIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    items(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, string, string, string]
    >;

    setApproved(
      _value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  COLLECTION_HASH(overrides?: CallOverrides): Promise<string>;

  initialize(
    _name: string,
    _symbol: string,
    _baseURI: string,
    _creator: string,
    _shouldComplete: boolean,
    _isApproved: boolean,
    _rarities: string,
    _items: {
      rarity: string;
      price: BigNumberish;
      beneficiary: string;
      metadata: string;
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  issueTokens(
    _beneficiaries: string[],
    _itemIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  items(
    _itemId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, BigNumber, BigNumber, string, string, string]>;

  setApproved(
    _value: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    COLLECTION_HASH(overrides?: CallOverrides): Promise<string>;

    initialize(
      _name: string,
      _symbol: string,
      _baseURI: string,
      _creator: string,
      _shouldComplete: boolean,
      _isApproved: boolean,
      _rarities: string,
      _items: {
        rarity: string;
        price: BigNumberish;
        beneficiary: string;
        metadata: string;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    issueTokens(
      _beneficiaries: string[],
      _itemIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    items(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, string, string, string]
    >;

    setApproved(_value: boolean, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    COLLECTION_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _name: string,
      _symbol: string,
      _baseURI: string,
      _creator: string,
      _shouldComplete: boolean,
      _isApproved: boolean,
      _rarities: string,
      _items: {
        rarity: string;
        price: BigNumberish;
        beneficiary: string;
        metadata: string;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    issueTokens(
      _beneficiaries: string[],
      _itemIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    items(_itemId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    setApproved(
      _value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    COLLECTION_HASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _name: string,
      _symbol: string,
      _baseURI: string,
      _creator: string,
      _shouldComplete: boolean,
      _isApproved: boolean,
      _rarities: string,
      _items: {
        rarity: string;
        price: BigNumberish;
        beneficiary: string;
        metadata: string;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    issueTokens(
      _beneficiaries: string[],
      _itemIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    items(
      _itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setApproved(
      _value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}