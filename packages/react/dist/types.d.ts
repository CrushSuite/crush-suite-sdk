import type {
  OrderCheckComplianceRequest,
  OrderCheckComplianceResponse,
  USAStateAbbreviation,
} from "../../core/src/types";
export type { USAStateAbbreviation } from "../../core/src/types";
export type CrushSuiteContextType = {
  namespace: string;
  customerDOB: string | null;
  setCustomerDOB: (arg0: string | null) => void;
  customerDefaultAddress: string | null;
  setCustomerDefaultAddress: (arg0: string | null) => void;
  shippingState: USAStateAbbreviation | null;
  setShippingState: (arg0: USAStateAbbreviation | null) => void;
  ageVerified: boolean;
  setAgeVerified: (arg0: boolean) => void;
  complianceProduct: number | null;
  setComplianceProduct: (arg0: number | null) => void;
  handleComplianceCheck: (
    arg0: OrderCheckComplianceRequest,
    arg1: OrderCheckComplianceResponse,
    arg2: (arg0: OrderCheckComplianceResponse) => void
  ) => Promise<void>;
};
export type Cart = {
  attributes: unknown;
  cart_level_discount_applications: unknown[];
  currency: string;
  item_count: number;
  items: CartItem[];
  items_subtotal_price: number;
  note: string;
  original_total_price: number;
  requires_shipping: boolean;
  token: string;
  total_discount: number;
  total_price: number;
  total_weight: number;
};
export type CartItem = {
  id: number;
  properties: unknown;
  quantity: number;
  variant_id: number;
  key: string;
  title: string;
  price: number;
  original_price: number;
  discounted_price: number;
  line_price: number;
  original_line_price: number;
  total_discount: number;
  discounts: unknown[];
  sku: string;
  grams: number;
  vendor: string;
  taxable: boolean;
  product_id: number;
  product_has_only_default_variant: boolean;
  gift_card: boolean;
  final_price: number;
  final_line_price: number;
  url: string;
  featured_image: FeaturedImage;
  image: string;
  handle: string;
  requires_shipping: boolean;
  product_type: string;
  product_title: string;
  product_description: string;
  variant_title: null;
  variant_options: string[];
  options_with_values: OptionWithValue[];
  line_level_discount_allocations: unknown[];
  line_level_total_discount: number;
  quantity_rule: QuantityRule;
  has_components: boolean;
};
export type FeaturedImage = {
  aspect_ratio: number;
  alt: string;
  height: number;
  url: string;
  width: number;
};
export type OptionWithValue = {
  name: string;
  value: string;
};
export type QuantityRule = {
  min: number;
  max: null;
  increment: number;
};
