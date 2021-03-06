// https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WafregionalXssMatchSetConfig extends TerraformMetaArguments {
  readonly name: string;
  /** xss_match_tuple block */
  readonly xssMatchTuple?: WafregionalXssMatchSetXssMatchTuple[];
}
export interface WafregionalXssMatchSetXssMatchTupleFieldToMatch {
  readonly data?: string;
  readonly type: string;
}
export interface WafregionalXssMatchSetXssMatchTuple {
  readonly textTransformation: string;
  /** field_to_match block */
  readonly fieldToMatch: WafregionalXssMatchSetXssMatchTupleFieldToMatch[];
}

// Resource

export class WafregionalXssMatchSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafregionalXssMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_xss_match_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._xssMatchTuple = config.xssMatchTuple;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // xss_match_tuple - computed: false, optional: true, required: false
  private _xssMatchTuple?: WafregionalXssMatchSetXssMatchTuple[];
  public get xssMatchTuple() {
    return this._xssMatchTuple;
  }
  public set xssMatchTuple(value: WafregionalXssMatchSetXssMatchTuple[] | undefined) {
    this._xssMatchTuple = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      xss_match_tuple: this._xssMatchTuple,
    };
  }
}
