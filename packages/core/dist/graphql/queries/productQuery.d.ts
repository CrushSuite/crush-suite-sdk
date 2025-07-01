/**
 * GraphQL query to fetch product details including compliance partner name and no-sale states.
 */
export declare const CrushSuiteProductQuery: "#graphql\n  query Product(\n    $handle: String!\n    $namespace: String!\n  )  {\n    product(handle: $handle) {\n      id\n      title\n      handle\n      productCompliancePartnerName: metafield(namespace: $namespace, key: \"product_compliance_partner_name\") {\n        key\n        value\n      }\n      variants(first: 250) {\n        nodes {\n          noSaleStates: metafield(namespace: $namespace, key: \"variant_no_sale_states\") {\n            key\n            value\n          }\n        }\n      }\n    }\n  }\n";
