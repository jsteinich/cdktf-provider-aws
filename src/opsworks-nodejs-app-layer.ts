// https://www.terraform.io/docs/providers/aws/r/opsworks_nodejs_app_layer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface OpsworksNodejsAppLayerConfig extends TerraformMetaArguments {
  readonly autoAssignElasticIps?: boolean;
  readonly autoAssignPublicIps?: boolean;
  readonly autoHealing?: boolean;
  readonly customConfigureRecipes?: string[];
  readonly customDeployRecipes?: string[];
  readonly customInstanceProfileArn?: string;
  readonly customJson?: string;
  readonly customSecurityGroupIds?: string[];
  readonly customSetupRecipes?: string[];
  readonly customShutdownRecipes?: string[];
  readonly customUndeployRecipes?: string[];
  readonly drainElbOnShutdown?: boolean;
  readonly elasticLoadBalancer?: string;
  readonly installUpdatesOnBoot?: boolean;
  readonly instanceShutdownTimeout?: number;
  readonly name?: string;
  readonly nodejsVersion?: string;
  readonly stackId: string;
  readonly systemPackages?: string[];
  readonly tags?: { [key: string]: string };
  readonly useEbsOptimizedInstances?: boolean;
  /** ebs_volume block */
  readonly ebsVolume?: OpsworksNodejsAppLayerEbsVolume[];
}
export interface OpsworksNodejsAppLayerEbsVolume {
  readonly encrypted?: boolean;
  readonly iops?: number;
  readonly mountPoint: string;
  readonly numberOfDisks: number;
  readonly raidLevel?: string;
  readonly size: number;
  readonly type?: string;
}

// Resource

export class OpsworksNodejsAppLayer extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OpsworksNodejsAppLayerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_nodejs_app_layer',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoAssignElasticIps = config.autoAssignElasticIps;
    this._autoAssignPublicIps = config.autoAssignPublicIps;
    this._autoHealing = config.autoHealing;
    this._customConfigureRecipes = config.customConfigureRecipes;
    this._customDeployRecipes = config.customDeployRecipes;
    this._customInstanceProfileArn = config.customInstanceProfileArn;
    this._customJson = config.customJson;
    this._customSecurityGroupIds = config.customSecurityGroupIds;
    this._customSetupRecipes = config.customSetupRecipes;
    this._customShutdownRecipes = config.customShutdownRecipes;
    this._customUndeployRecipes = config.customUndeployRecipes;
    this._drainElbOnShutdown = config.drainElbOnShutdown;
    this._elasticLoadBalancer = config.elasticLoadBalancer;
    this._installUpdatesOnBoot = config.installUpdatesOnBoot;
    this._instanceShutdownTimeout = config.instanceShutdownTimeout;
    this._name = config.name;
    this._nodejsVersion = config.nodejsVersion;
    this._stackId = config.stackId;
    this._systemPackages = config.systemPackages;
    this._tags = config.tags;
    this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
    this._ebsVolume = config.ebsVolume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_assign_elastic_ips - computed: false, optional: true, required: false
  private _autoAssignElasticIps?: boolean;
  public get autoAssignElasticIps() {
    return this._autoAssignElasticIps;
  }
  public set autoAssignElasticIps(value: boolean | undefined) {
    this._autoAssignElasticIps = value;
  }

  // auto_assign_public_ips - computed: false, optional: true, required: false
  private _autoAssignPublicIps?: boolean;
  public get autoAssignPublicIps() {
    return this._autoAssignPublicIps;
  }
  public set autoAssignPublicIps(value: boolean | undefined) {
    this._autoAssignPublicIps = value;
  }

  // auto_healing - computed: false, optional: true, required: false
  private _autoHealing?: boolean;
  public get autoHealing() {
    return this._autoHealing;
  }
  public set autoHealing(value: boolean | undefined) {
    this._autoHealing = value;
  }

  // custom_configure_recipes - computed: false, optional: true, required: false
  private _customConfigureRecipes?: string[];
  public get customConfigureRecipes() {
    return this._customConfigureRecipes;
  }
  public set customConfigureRecipes(value: string[] | undefined) {
    this._customConfigureRecipes = value;
  }

  // custom_deploy_recipes - computed: false, optional: true, required: false
  private _customDeployRecipes?: string[];
  public get customDeployRecipes() {
    return this._customDeployRecipes;
  }
  public set customDeployRecipes(value: string[] | undefined) {
    this._customDeployRecipes = value;
  }

  // custom_instance_profile_arn - computed: false, optional: true, required: false
  private _customInstanceProfileArn?: string;
  public get customInstanceProfileArn() {
    return this._customInstanceProfileArn;
  }
  public set customInstanceProfileArn(value: string | undefined) {
    this._customInstanceProfileArn = value;
  }

  // custom_json - computed: false, optional: true, required: false
  private _customJson?: string;
  public get customJson() {
    return this._customJson;
  }
  public set customJson(value: string | undefined) {
    this._customJson = value;
  }

  // custom_security_group_ids - computed: false, optional: true, required: false
  private _customSecurityGroupIds?: string[];
  public get customSecurityGroupIds() {
    return this._customSecurityGroupIds;
  }
  public set customSecurityGroupIds(value: string[] | undefined) {
    this._customSecurityGroupIds = value;
  }

  // custom_setup_recipes - computed: false, optional: true, required: false
  private _customSetupRecipes?: string[];
  public get customSetupRecipes() {
    return this._customSetupRecipes;
  }
  public set customSetupRecipes(value: string[] | undefined) {
    this._customSetupRecipes = value;
  }

  // custom_shutdown_recipes - computed: false, optional: true, required: false
  private _customShutdownRecipes?: string[];
  public get customShutdownRecipes() {
    return this._customShutdownRecipes;
  }
  public set customShutdownRecipes(value: string[] | undefined) {
    this._customShutdownRecipes = value;
  }

  // custom_undeploy_recipes - computed: false, optional: true, required: false
  private _customUndeployRecipes?: string[];
  public get customUndeployRecipes() {
    return this._customUndeployRecipes;
  }
  public set customUndeployRecipes(value: string[] | undefined) {
    this._customUndeployRecipes = value;
  }

  // drain_elb_on_shutdown - computed: false, optional: true, required: false
  private _drainElbOnShutdown?: boolean;
  public get drainElbOnShutdown() {
    return this._drainElbOnShutdown;
  }
  public set drainElbOnShutdown(value: boolean | undefined) {
    this._drainElbOnShutdown = value;
  }

  // elastic_load_balancer - computed: false, optional: true, required: false
  private _elasticLoadBalancer?: string;
  public get elasticLoadBalancer() {
    return this._elasticLoadBalancer;
  }
  public set elasticLoadBalancer(value: string | undefined) {
    this._elasticLoadBalancer = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // install_updates_on_boot - computed: false, optional: true, required: false
  private _installUpdatesOnBoot?: boolean;
  public get installUpdatesOnBoot() {
    return this._installUpdatesOnBoot;
  }
  public set installUpdatesOnBoot(value: boolean | undefined) {
    this._installUpdatesOnBoot = value;
  }

  // instance_shutdown_timeout - computed: false, optional: true, required: false
  private _instanceShutdownTimeout?: number;
  public get instanceShutdownTimeout() {
    return this._instanceShutdownTimeout;
  }
  public set instanceShutdownTimeout(value: number | undefined) {
    this._instanceShutdownTimeout = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // nodejs_version - computed: false, optional: true, required: false
  private _nodejsVersion?: string;
  public get nodejsVersion() {
    return this._nodejsVersion;
  }
  public set nodejsVersion(value: string | undefined) {
    this._nodejsVersion = value;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId: string;
  public get stackId() {
    return this._stackId;
  }
  public set stackId(value: string) {
    this._stackId = value;
  }

  // system_packages - computed: false, optional: true, required: false
  private _systemPackages?: string[];
  public get systemPackages() {
    return this._systemPackages;
  }
  public set systemPackages(value: string[] | undefined) {
    this._systemPackages = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // use_ebs_optimized_instances - computed: false, optional: true, required: false
  private _useEbsOptimizedInstances?: boolean;
  public get useEbsOptimizedInstances() {
    return this._useEbsOptimizedInstances;
  }
  public set useEbsOptimizedInstances(value: boolean | undefined) {
    this._useEbsOptimizedInstances = value;
  }

  // ebs_volume - computed: false, optional: true, required: false
  private _ebsVolume?: OpsworksNodejsAppLayerEbsVolume[];
  public get ebsVolume() {
    return this._ebsVolume;
  }
  public set ebsVolume(value: OpsworksNodejsAppLayerEbsVolume[] | undefined) {
    this._ebsVolume = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_assign_elastic_ips: this._autoAssignElasticIps,
      auto_assign_public_ips: this._autoAssignPublicIps,
      auto_healing: this._autoHealing,
      custom_configure_recipes: this._customConfigureRecipes,
      custom_deploy_recipes: this._customDeployRecipes,
      custom_instance_profile_arn: this._customInstanceProfileArn,
      custom_json: this._customJson,
      custom_security_group_ids: this._customSecurityGroupIds,
      custom_setup_recipes: this._customSetupRecipes,
      custom_shutdown_recipes: this._customShutdownRecipes,
      custom_undeploy_recipes: this._customUndeployRecipes,
      drain_elb_on_shutdown: this._drainElbOnShutdown,
      elastic_load_balancer: this._elasticLoadBalancer,
      install_updates_on_boot: this._installUpdatesOnBoot,
      instance_shutdown_timeout: this._instanceShutdownTimeout,
      name: this._name,
      nodejs_version: this._nodejsVersion,
      stack_id: this._stackId,
      system_packages: this._systemPackages,
      tags: this._tags,
      use_ebs_optimized_instances: this._useEbsOptimizedInstances,
      ebs_volume: this._ebsVolume,
    };
  }
}
