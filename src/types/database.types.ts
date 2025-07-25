export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          full_name: string | null
          phone: string | null
          location: string | null
          avatar_url: string | null
          user_type: 'farmer' | 'buyer' | 'both'
          is_verified: boolean
          bio: string | null
          website: string | null
          social_links: Json | null
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          phone?: string | null
          location?: string | null
          avatar_url?: string | null
          user_type?: 'farmer' | 'buyer' | 'both'
          is_verified?: boolean
          bio?: string | null
          website?: string | null
          social_links?: Json | null
        }
        Update: {
          updated_at?: string
          full_name?: string | null
          phone?: string | null
          location?: string | null
          avatar_url?: string | null
          user_type?: 'farmer' | 'buyer' | 'both'
          is_verified?: boolean
          bio?: string | null
          website?: string | null
          social_links?: Json | null
        }
        Relationships: []
      }
      equipment: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          user_id: string
          title: string
          description: string | null
          price: number
          currency: string
          category_id: string
          condition: 'new' | 'excellent' | 'good' | 'fair' | 'poor'
          year: number | null
          brand: string | null
          model: string | null
          hours_used: number | null
          location: string
          coordinates: Json | null
          images: string[]
          is_available: boolean
          is_featured: boolean
          view_count: number
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id: string
          title: string
          description?: string | null
          price: number
          currency?: string
          category_id: string
          condition?: 'new' | 'excellent' | 'good' | 'fair' | 'poor'
          year?: number | null
          brand?: string | null
          model?: string | null
          hours_used?: number | null
          location: string
          coordinates?: Json | null
          images?: string[]
          is_available?: boolean
          is_featured?: boolean
          view_count?: number
        }
        Update: {
          updated_at?: string
          title?: string
          description?: string | null
          price?: number
          currency?: string
          category_id?: string
          condition?: 'new' | 'excellent' | 'good' | 'fair' | 'poor'
          year?: number | null
          brand?: string | null
          model?: string | null
          hours_used?: number | null
          location?: string
          coordinates?: Json | null
          images?: string[]
          is_available?: boolean
          is_featured?: boolean
          view_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "equipment_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "equipment_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          }
        ]
      }
      land_listings: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          user_id: string
          title: string
          description: string | null
          price: number
          currency: string
          listing_type: 'sale' | 'rent'
          area_size: number
          area_unit: 'hectare' | 'acre' | 'dunum'
          location: string
          coordinates: Json | null
          soil_type: string | null
          water_source: string | null
          images: string[]
          is_available: boolean
          is_featured: boolean
          view_count: number
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id: string
          title: string
          description?: string | null
          price: number
          currency?: string
          listing_type?: 'sale' | 'rent'
          area_size: number
          area_unit?: 'hectare' | 'acre' | 'dunum'
          location: string
          coordinates?: Json | null
          soil_type?: string | null
          water_source?: string | null
          images?: string[]
          is_available?: boolean
          is_featured?: boolean
          view_count?: number
        }
        Update: {
          updated_at?: string
          title?: string
          description?: string | null
          price?: number
          currency?: string
          listing_type?: 'sale' | 'rent'
          area_size?: number
          area_unit?: 'hectare' | 'acre' | 'dunum'
          location?: string
          coordinates?: Json | null
          soil_type?: string | null
          water_source?: string | null
          images?: string[]
          is_available?: boolean
          is_featured?: boolean
          view_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "land_listings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      animal_listings: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          user_id: string
          title: string
          description: string | null
          price: number
          currency: string
          animal_type: 'sheep' | 'cow' | 'goat' | 'chicken' | 'camel' | 'horse' | 'other'
          breed: string | null
          age_months: number | null
          gender: 'male' | 'female' | 'mixed'
          quantity: number
          health_status: string | null
          vaccination_status: boolean
          location: string
          coordinates: Json | null
          images: string[]
          is_available: boolean
          is_featured: boolean
          view_count: number
          weight_kg: number | null
          price_per_head: boolean
          purpose: 'meat' | 'dairy' | 'breeding' | 'work' | 'pets' | 'other'
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id: string
          title: string
          description?: string | null
          price: number
          currency?: string
          animal_type: 'sheep' | 'cow' | 'goat' | 'chicken' | 'camel' | 'horse' | 'other'
          breed?: string | null
          age_months?: number | null
          gender: 'male' | 'female' | 'mixed'
          quantity?: number
          health_status?: string | null
          vaccination_status?: boolean
          location: string
          coordinates?: Json | null
          images?: string[]
          is_available?: boolean
          is_featured?: boolean
          view_count?: number
          weight_kg?: number | null
          price_per_head?: boolean
          purpose?: 'meat' | 'dairy' | 'breeding' | 'work' | 'pets' | 'other'
        }
        Update: {
          updated_at?: string
          title?: string
          description?: string | null
          price?: number
          currency?: string
          animal_type?: 'sheep' | 'cow' | 'goat' | 'chicken' | 'camel' | 'horse' | 'other'
          breed?: string | null
          age_months?: number | null
          gender?: 'male' | 'female' | 'mixed'
          quantity?: number
          health_status?: string | null
          vaccination_status?: boolean
          location?: string
          coordinates?: Json | null
          images?: string[]
          is_available?: boolean
          is_featured?: boolean
          view_count?: number
          weight_kg?: number | null
          price_per_head?: boolean
          purpose?: 'meat' | 'dairy' | 'breeding' | 'work' | 'pets' | 'other'
        }
        Relationships: [
          {
            foreignKeyName: "animal_listings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      categories: {
        Row: {
          id: string
          created_at: string
          name: string
          name_ar: string
          description: string | null
          icon: string
          parent_id: string | null
          sort_order: number
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          name_ar: string
          description?: string | null
          icon: string
          parent_id?: string | null
          sort_order?: number
        }
        Update: {
          name?: string
          name_ar?: string
          description?: string | null
          icon?: string
          parent_id?: string | null
          sort_order?: number
        }
        Relationships: []
      }
      expert_profiles: {
        Row: {
          id: string
          user_id: string
          created_at: string
          updated_at: string
          name: string
          title: string
          specialization: string
          bio: string
          years_of_experience: number
          education: string
          certifications: string[]
          location: string
          phone: string | null
          email: string | null
          profile_image: string | null
          rating: number
          reviews_count: number
          hourly_rate: number | null
          availability_status: 'available' | 'busy' | 'unavailable'
          services_offered: string[]
          languages: string[]
          is_verified: boolean
          is_active: boolean
        }
        Insert: {
          id?: string
          user_id: string
          created_at?: string
          updated_at?: string
          name: string
          title: string
          specialization: string
          bio: string
          years_of_experience: number
          education: string
          certifications?: string[]
          location: string
          phone?: string | null
          email?: string | null
          profile_image?: string | null
          rating?: number
          reviews_count?: number
          hourly_rate?: number | null
          availability_status?: 'available' | 'busy' | 'unavailable'
          services_offered?: string[]
          languages?: string[]
          is_verified?: boolean
          is_active?: boolean
        }
        Update: {
          updated_at?: string
          name?: string
          title?: string
          specialization?: string
          bio?: string
          years_of_experience?: number
          education?: string
          certifications?: string[]
          location?: string
          phone?: string | null
          email?: string | null
          profile_image?: string | null
          rating?: number
          reviews_count?: number
          hourly_rate?: number | null
          availability_status?: 'available' | 'busy' | 'unavailable'
          services_offered?: string[]
          languages?: string[]
          is_verified?: boolean
          is_active?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "expert_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      vegetables: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          user_id: string
          title: string
          description: string | null
          price: number
          currency: string
          vegetable_type: string
          variety: string | null
          quantity: number
          unit: string
          freshness: string
          organic: boolean
          location: string
          coordinates: Json | null
          images: string[]
          is_available: boolean
          is_featured: boolean
          view_count: number
          harvest_date: string | null
          expiry_date: string | null
          certification: string | null
          packaging: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id: string
          title: string
          description?: string | null
          price: number
          currency?: string
          vegetable_type: string
          variety?: string | null
          quantity: number
          unit?: string
          freshness?: string
          organic?: boolean
          location: string
          coordinates?: Json | null
          images?: string[]
          is_available?: boolean
          is_featured?: boolean
          view_count?: number
          harvest_date?: string | null
          expiry_date?: string | null
          certification?: string | null
          packaging?: string
        }
        Update: {
          updated_at?: string
          title?: string
          description?: string | null
          price?: number
          currency?: string
          vegetable_type?: string
          variety?: string | null
          quantity?: number
          unit?: string
          freshness?: string
          organic?: boolean
          location?: string
          coordinates?: Json | null
          images?: string[]
          is_available?: boolean
          is_featured?: boolean
          view_count?: number
          harvest_date?: string | null
          expiry_date?: string | null
          certification?: string | null
          packaging?: string
        }
        Relationships: [
          {
            foreignKeyName: "vegetables_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "auth.users"
            referencedColumns: ["id"]
          }
        ]
      }
      nurseries: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          user_id: string
          title: string
          description: string | null
          price: number
          currency: string
          quantity: number
          location: string
          coordinates: Json | null
          images: string[]
          is_available: boolean
          is_featured: boolean
          view_count: number
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id: string
          title: string
          description?: string | null
          price: number
          currency?: string
          quantity: number
          location: string
          coordinates?: Json | null
          images?: string[]
          is_available?: boolean
          is_featured?: boolean
          view_count?: number
        }
        Update: {
          updated_at?: string
          title?: string
          description?: string | null
          price?: number
          currency?: string
          quantity?: number
          location?: string
          coordinates?: Json | null
          images?: string[]
          is_available?: boolean
          is_featured?: boolean
          view_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "nurseries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "auth.users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// Type helpers for easier use
export type Tables<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

// Convenience type exports for easier use throughout the app
export type Profile = Tables<'profiles'>
export type Equipment = Tables<'equipment'>
export type LandListing = Tables<'land_listings'>
export type AnimalListing = Tables<'animal_listings'>
export type ExpertProfile = Tables<'expert_profiles'>
export type Category = Tables<'categories'>
export type Vegetable = Tables<'vegetables'>
export type Nursery = Tables<'nurseries'>

// Additional types for missing tables
export interface Message {
  id: string
  created_at: string
  sender_id: string
  receiver_id: string
  content: string
  is_read: boolean
  item_id?: string
  item_type?: 'equipment' | 'land'
}

export interface Favorite {
  id: string
  created_at: string
  user_id: string
  item_id: string
  item_type: 'equipment' | 'land'
}

export interface Review {
  id: string
  created_at: string
  user_id: string
  item_id: string
  item_type: 'equipment' | 'land'
  rating: number
  comment: string
}

export type EquipmentInsert = TablesInsert<'equipment'>
export type LandListingInsert = TablesInsert<'land_listings'>
export type AnimalListingInsert = TablesInsert<'animal_listings'>
export type ExpertProfileInsert = TablesInsert<'expert_profiles'>
export type ProfileInsert = TablesInsert<'profiles'>
