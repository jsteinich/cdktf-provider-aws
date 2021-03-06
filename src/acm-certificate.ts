// https://www.terraform.io/docs/providers/aws/r/acm_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface AcmCertificateConfig extends TerraformMetaArguments {
  readonly certificateAuthorityArn?: string;
  readonly certificateBody?: string;
  readonly certificateChain?: string;
  readonly domainName?: string;
  readonly privateKey?: string;
  readonly subjectAlternativeNames?: string[];
  readonly tags?: { [key: string]: string };
  readonly validationMethod?: string;
  /** options block */
  readonly options?: AcmCertificateOptions[];
}
export class AcmCertificateDomainValidationOptions extends ComplexComputedList {

  // domain_name - computed: true, optional: false, required: true
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // resource_record_name - computed: true, optional: false, required: true
  public get resourceRecordName() {
    return this.getStringAttribute('resource_record_name');
  }

  // resource_record_type - computed: true, optional: false, required: true
  public get resourceRecordType() {
    return this.getStringAttribute('resource_record_type');
  }

  // resource_record_value - computed: true, optional: false, required: true
  public get resourceRecordValue() {
    return this.getStringAttribute('resource_record_value');
  }
}
export interface AcmCertificateOptions {
  readonly certificateTransparencyLoggingPreference?: string;
}

// Resource

export class AcmCertificate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AcmCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_acm_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateAuthorityArn = config.certificateAuthorityArn;
    this._certificateBody = config.certificateBody;
    this._certificateChain = config.certificateChain;
    this._domainName = config.domainName;
    this._privateKey = config.privateKey;
    this._subjectAlternativeNames = config.subjectAlternativeNames;
    this._tags = config.tags;
    this._validationMethod = config.validationMethod;
    this._options = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_authority_arn - computed: false, optional: true, required: false
  private _certificateAuthorityArn?: string;
  public get certificateAuthorityArn() {
    return this._certificateAuthorityArn;
  }
  public set certificateAuthorityArn(value: string | undefined) {
    this._certificateAuthorityArn = value;
  }

  // certificate_body - computed: false, optional: true, required: false
  private _certificateBody?: string;
  public get certificateBody() {
    return this._certificateBody;
  }
  public set certificateBody(value: string | undefined) {
    this._certificateBody = value;
  }

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain?: string;
  public get certificateChain() {
    return this._certificateChain;
  }
  public set certificateChain(value: string | undefined) {
    this._certificateChain = value;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string;
  public get domainName() {
    return this._domainName ?? this.getStringAttribute('domain_name');
  }
  public set domainName(value: string | undefined) {
    this._domainName = value;
  }

  // domain_validation_options - computed: true, optional: false, required: true
  public domainValidationOptions(index: string) {
    return new AcmCertificateDomainValidationOptions(this, 'domain_validation_options', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string;
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string | undefined) {
    this._privateKey = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject_alternative_names - computed: true, optional: true, required: false
  private _subjectAlternativeNames?: string[];
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames ?? this.getListAttribute('subject_alternative_names');
  }
  public set subjectAlternativeNames(value: string[] | undefined) {
    this._subjectAlternativeNames = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // validation_emails - computed: true, optional: false, required: true
  public get validationEmails() {
    return this.getListAttribute('validation_emails');
  }

  // validation_method - computed: true, optional: true, required: false
  private _validationMethod?: string;
  public get validationMethod() {
    return this._validationMethod ?? this.getStringAttribute('validation_method');
  }
  public set validationMethod(value: string | undefined) {
    this._validationMethod = value;
  }

  // options - computed: false, optional: true, required: false
  private _options?: AcmCertificateOptions[];
  public get options() {
    return this._options;
  }
  public set options(value: AcmCertificateOptions[] | undefined) {
    this._options = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_authority_arn: this._certificateAuthorityArn,
      certificate_body: this._certificateBody,
      certificate_chain: this._certificateChain,
      domain_name: this._domainName,
      private_key: this._privateKey,
      subject_alternative_names: this._subjectAlternativeNames,
      tags: this._tags,
      validation_method: this._validationMethod,
      options: this._options,
    };
  }
}
