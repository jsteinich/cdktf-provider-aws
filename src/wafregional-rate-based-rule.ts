// https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WafregionalRateBasedRuleConfig extends TerraformMetaArguments {
  readonly metricName: string;
  readonly name: string;
  readonly rateKey: string;
  readonly rateLimit: number;
  readonly tags?: { [key: string]: string };
  /** predicate block */
  readonly predicate?: WafregionalRateBasedRulePredicate[];
}
export interface WafregionalRateBasedRulePredicate {
  readonly dataId: string;
  readonly negated: boolean;
  readonly type: string;
}

// Resource

export class WafregionalRateBasedRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafregionalRateBasedRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_rate_based_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metricName = config.metricName;
    this._name = config.name;
    this._rateKey = config.rateKey;
    this._rateLimit = config.rateLimit;
    this._tags = config.tags;
    this._predicate = config.predicate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName: string;
  public get metricName() {
    return this._metricName;
  }
  public set metricName(value: string) {
    this._metricName = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // rate_key - computed: false, optional: false, required: true
  private _rateKey: string;
  public get rateKey() {
    return this._rateKey;
  }
  public set rateKey(value: string) {
    this._rateKey = value;
  }

  // rate_limit - computed: false, optional: false, required: true
  private _rateLimit: number;
  public get rateLimit() {
    return this._rateLimit;
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // predicate - computed: false, optional: true, required: false
  private _predicate?: WafregionalRateBasedRulePredicate[];
  public get predicate() {
    return this._predicate;
  }
  public set predicate(value: WafregionalRateBasedRulePredicate[] | undefined) {
    this._predicate = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      metric_name: this._metricName,
      name: this._name,
      rate_key: this._rateKey,
      rate_limit: this._rateLimit,
      tags: this._tags,
      predicate: this._predicate,
    };
  }
}
