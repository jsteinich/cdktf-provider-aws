// https://www.terraform.io/docs/providers/aws/r/waf_byte_match_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WafByteMatchSetConfig extends TerraformMetaArguments {
  readonly name: string;
  /** byte_match_tuples block */
  readonly byteMatchTuples?: WafByteMatchSetByteMatchTuples[];
}
export interface WafByteMatchSetByteMatchTuplesFieldToMatch {
  readonly data?: string;
  readonly type: string;
}
export interface WafByteMatchSetByteMatchTuples {
  readonly positionalConstraint: string;
  readonly targetString?: string;
  readonly textTransformation: string;
  /** field_to_match block */
  readonly fieldToMatch: WafByteMatchSetByteMatchTuplesFieldToMatch[];
}

// Resource

export class WafByteMatchSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafByteMatchSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_byte_match_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._byteMatchTuples = config.byteMatchTuples;
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

  // byte_match_tuples - computed: false, optional: true, required: false
  private _byteMatchTuples?: WafByteMatchSetByteMatchTuples[];
  public get byteMatchTuples() {
    return this._byteMatchTuples;
  }
  public set byteMatchTuples(value: WafByteMatchSetByteMatchTuples[] | undefined) {
    this._byteMatchTuples = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      byte_match_tuples: this._byteMatchTuples,
    };
  }
}
