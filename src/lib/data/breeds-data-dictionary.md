# Data Dictionary: breeds.json

This file contains information about cat breeds. Each record represents a single cat breed with its characteristics and attributes.

## File Information
- **Format:** JSON Array
- **Location:** `src/lib/data/breeds.json`

---

## Field Definitions

### Identification Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `id` | string | Unique identifier for the breed (short code) | `"abys"` |
| `name` | string | Full name of the cat breed | `"Abyssinian"` |
| `alt_names` | string | Alternative names for the breed | `""` |

### Physical Characteristics

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `weight` | object | Weight range of the breed | See below |
| `weight.imperial` | string | Weight range in pounds | `"7 - 10"` |
| `weight.metric` | string | Weight range in kilograms | `"3 - 5"` |

### Origin & Location

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `origin` | string | Country or region of origin | `"Egypt"` |
| `country_code` | string | ISO 2-letter country code | `"EG"` |
| `country_codes` | string | ISO 2-letter country code(s) | `"EG"` |

### General Information

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `description` | string | Detailed description of the breed | Full text description |
| `temperament` | string | Comma-separated list of temperament traits | `"Active, Energetic, Independent"` |
| `life_span` | string | Expected life span range in years | `"14 - 15"` |

### Behavioral Ratings (Scale: 1-5)

| Field | Type | Description | Scale |
|-------|------|-------------|-------|
| `adaptability` | integer | How well the breed adapts to changes | 1 (low) - 5 (high) |
| `affection_level` | integer | Level of affection toward owners | 1 (low) - 5 (high) |
| `child_friendly` | integer | How well the breed gets along with children | 1 (low) - 5 (high) |
| `dog_friendly` | integer | How well the breed gets along with dogs | 1 (low) - 5 (high) |
| `energy_level` | integer | Activity and energy level | 1 (low) - 5 (high) |
| `grooming` | integer | Grooming requirements | 1 (low) - 5 (high) |
| `health_issues` | integer | Propensity for health problems | 1 (low) - 5 (high) |
| `intelligence` | integer | Intelligence level | 1 (low) - 5 (high) |
| `shedding_level` | integer | Amount of shedding | 1 (low) - 5 (high) |
| `social_needs` | integer | Need for social interaction | 1 (low) - 5 (high) |
| `stranger_friendly` | integer | Friendliness toward strangers | 1 (low) - 5 (high) |
| `vocalisation` | integer | Tendency to vocalize/meow | 1 (low) - 5 (high) |

### Boolean Flags (0 = No, 1 = Yes)

| Field | Type | Description |
|-------|------|-------------|
| `indoor` | integer | Whether the breed is suited for indoor living |
| `lap` | integer | Whether the breed enjoys sitting on laps (optional field) |
| `experimental` | integer | Whether the breed is experimental |
| `hairless` | integer | Whether the breed is hairless |
| `natural` | integer | Whether the breed developed naturally |
| `rare` | integer | Whether the breed is rare |
| `rex` | integer | Whether the breed has rex (curly) coat |
| `suppressed_tail` | integer | Whether the breed has a suppressed/shortened tail |
| `short_legs` | integer | Whether the breed has short legs |
| `hypoallergenic` | integer | Whether the breed is hypoallergenic |

### External Resources

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `cfa_url` | string | Cat Fanciers' Association URL (optional) | `"http://cfa.org/..."` |
| `vetstreet_url` | string | VetStreet article URL (optional) | `"http://www.vetstreet.com/..."` |
| `vcahospitals_url` | string | VCA Hospitals article URL (optional) | `"https://vcahospitals.com/..."` |
| `wikipedia_url` | string | Wikipedia article URL | `"https://en.wikipedia.org/..."` |

### Image Reference

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `reference_image_id` | string | ID for the breed's reference image | `"0XYvRd7oD"` |

---

## Notes

- The `lap` field is optional and not present in all records
- URL fields (`cfa_url`, `vetstreet_url`, `vcahospitals_url`) are optional
- Boolean fields use integers (0/1) rather than true/false
- Rating scales range from 1-5, where 1 is lowest and 5 is highest
