// https://www.terraform.io/docs/providers/aws/r/dx_hosted_transit_virtual_interface.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DxHostedTransitVirtualInterfaceConfig extends TerraformMetaArguments {
  readonly addressFamily: string;
  readonly amazonAddress?: string;
  readonly bgpAsn: number;
  readonly bgpAuthKey?: string;
  readonly connectionId: string;
  readonly customerAddress?: string;
  readonly mtu?: number;
  readonly name: string;
  readonly ownerAccountId: string;
  readonly vlan: number;
  /** timeouts block */
  readonly timeouts?: DxHostedTransitVirtualInterfaceTimeouts;
}
export interface DxHostedTransitVirtualInterfaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DxHostedTransitVirtualInterface extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DxHostedTransitVirtualInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_hosted_transit_virtual_interface',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._addressFamily = config.addressFamily;
    this._amazonAddress = config.amazonAddress;
    this._bgpAsn = config.bgpAsn;
    this._bgpAuthKey = config.bgpAuthKey;
    this._connectionId = config.connectionId;
    this._customerAddress = config.customerAddress;
    this._mtu = config.mtu;
    this._name = config.name;
    this._ownerAccountId = config.ownerAccountId;
    this._vlan = config.vlan;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: false, optional: false, required: true
  private _addressFamily: string;
  public get addressFamily() {
    return this._addressFamily;
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }

  // amazon_address - computed: true, optional: true, required: false
  private _amazonAddress?: string;
  public get amazonAddress() {
    return this._amazonAddress ?? this.getStringAttribute('amazon_address');
  }
  public set amazonAddress(value: string | undefined) {
    this._amazonAddress = value;
  }

  // amazon_side_asn - computed: true, optional: false, required: true
  public get amazonSideAsn() {
    return this.getStringAttribute('amazon_side_asn');
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_device - computed: true, optional: false, required: true
  public get awsDevice() {
    return this.getStringAttribute('aws_device');
  }

  // bgp_asn - computed: false, optional: false, required: true
  private _bgpAsn: number;
  public get bgpAsn() {
    return this._bgpAsn;
  }
  public set bgpAsn(value: number) {
    this._bgpAsn = value;
  }

  // bgp_auth_key - computed: true, optional: true, required: false
  private _bgpAuthKey?: string;
  public get bgpAuthKey() {
    return this._bgpAuthKey ?? this.getStringAttribute('bgp_auth_key');
  }
  public set bgpAuthKey(value: string | undefined) {
    this._bgpAuthKey = value;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId: string;
  public get connectionId() {
    return this._connectionId;
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }

  // customer_address - computed: true, optional: true, required: false
  private _customerAddress?: string;
  public get customerAddress() {
    return this._customerAddress ?? this.getStringAttribute('customer_address');
  }
  public set customerAddress(value: string | undefined) {
    this._customerAddress = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // jumbo_frame_capable - computed: true, optional: false, required: true
  public get jumboFrameCapable() {
    return this.getBooleanAttribute('jumbo_frame_capable');
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number;
  public get mtu() {
    return this._mtu;
  }
  public set mtu(value: number | undefined) {
    this._mtu = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // owner_account_id - computed: false, optional: false, required: true
  private _ownerAccountId: string;
  public get ownerAccountId() {
    return this._ownerAccountId;
  }
  public set ownerAccountId(value: string) {
    this._ownerAccountId = value;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan: number;
  public get vlan() {
    return this._vlan;
  }
  public set vlan(value: number) {
    this._vlan = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DxHostedTransitVirtualInterfaceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DxHostedTransitVirtualInterfaceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: this._addressFamily,
      amazon_address: this._amazonAddress,
      bgp_asn: this._bgpAsn,
      bgp_auth_key: this._bgpAuthKey,
      connection_id: this._connectionId,
      customer_address: this._customerAddress,
      mtu: this._mtu,
      name: this._name,
      owner_account_id: this._ownerAccountId,
      vlan: this._vlan,
      timeouts: this._timeouts,
    };
  }
}
