/* eslint-disable @typescript-eslint/no-explicit-any */

  
  declare module 'vtex.product-context/ProductDispatchContext' {
    type DispatchFunction = (payload: { type: string; args?: any }) => void
    export const useProductDispatch: () => DispatchFunction
  }
  
  declare module 'vtex.product-context' {
    export interface Seller {
      sellerId: string
      sellerName: string
      addToCartLink: string
      sellerDefault: boolean
      commertialOffer: CommercialOffer
    }

    interface ProductItem {
      complementName: string
      ean: string
      images: Array<{
        imageId: string
        imageLabel: string
        imageTag: string
        imageUrl: string
        imageText: string
      }>
      itemId: string
      measurementUnit: string
      name: string
      nameComplete: string
      referenceId: Array<{ Key: string; Value: string }>
      sellers: Seller[]
      unitMultiplier: number
      variations: Array<{ name: string; values: string[] }>
      videos: Array<{ videoUrl: string }>
    }
      
      interface Product {
        brand: string
        brandId: string
        cacheId: string
        categories: string[]
        categoriesIds: string[]
        categoryId: string
        categoryTree: Array<{ id: string; name: string; href: string }>
        clusterHighlights: Array<{ id: string; name: string }>
        description: string
        itemMetadata: ItemMetadata
        items: Item[]
        link: string
        linkText: string
        metaTagDescription: string
        priceRange: {
          sellingPrice: { highPrice: number; lowPrice: number }
          listPrice: { highPrice: number; lowPrice: number }
        }
        productClusters: Array<{ id: string; name: string }>
        productId: string
        productName: string
        productReference: string
        properties: ProductSpecification[]
        skuSpecifications: SkuSpecification[]
        specificationGroups: SpecificationGroup[]
        titleTag: string
      }
    
      export interface ProductSpecification {
        name: string
        originalName: string
        values: string[]
      }
    
      
      interface SkuSpecification {
        field: SkuSpecificationField
        values: SkuSpecificationValues[]
      }
      
      interface SkuSpecificationField {
        name: string
      }
      
      interface SkuSpecificationValues {
        name: string
      }

    export interface CommercialOffer  {
      Installments: Installment[]
      discountHighlights: Array<{ name: string }>
      teasers: Teaser[]
      Price: number
      ListPrice: number
      spotPrice: number
      SellingPrice?: number
      PriceWithoutDiscount: number
      RewardValue: number
      PriceValidUntil: string
      AvailableQuantity: number
      Tax: number
      taxPercentage: number
      CacheVersionUsedToCallCheckout: string
    }

    export interface Installment {
      Value: number
      InterestRate: number
      TotalValuePlusInterestRate: number
      NumberOfInstallments: number
      PaymentSystemName: string
      PaymentSystemGroupName: string
      Name: string
    }
  
    type GroupId = string
  
    interface AssemblyOptionItem {
      id: string
      quantity: number
      seller: string
      initialQuantity: number
      choiceType: string
      name: string
      price: number
      children: Record<string, AssemblyOptionItem[]> | null
    }
  
    type InputValues = Record<string, string>
  
    export interface ProductContext {
      product?: Product
      selectedItem: ProductItem | null
      selectedQuantity: number
      skuSelector: {
        isVisible: boolean
        areAllVariationsSelected: boolean
        selectedImageVariationSKU: string
      }
      buyButton: {
        clicked: boolean
      }
      assemblyOptions: {
        items: Record<GroupId, AssemblyOptionItem[]>
        inputValues: Record<GroupId, InputValues>
        areGroupsValid: Record<GroupId, boolean>
      }
    }
  
    export const useProduct: () => ProductContext
    type DispatchFunction = (payload: { type: string; args?: any }) => void
    export const useProductDispatch: () => DispatchFunction
    export const ProductContext
  }