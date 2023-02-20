
//Generate content for the empty fields

const products = [
  //Power Drill
  {
    
  "product_number": "1",
  "product_name": "Cordless Drill Set",
  "product_category": "Power Drill",
  "product_brand": "Bosch",
  "product_price": 129.99,
  "product_description": "This cordless drill set includes a 20-volt lithium-ion battery, charger, and carrying case. The drill has two-speed settings and can deliver up to 1,500 RPM. It also features an LED light for increased visibility in dark workspaces.",
  "product_info": "Weight: 5.2 lbs. | Dimensions: 12.5 x 3.6 x 9.8 inches | Chuck Size: 3/8 inch"
  },
  {
  "product_number": "2",
  "product_name": "Power Drill Kit",
  "product_category": "Power Drill",
  "product_brand": "DeWalt",
  "product_price": 179.99,
  "product_description": "This power drill kit includes a 20-volt MAX lithium-ion battery, charger, and soft carrying case. The drill has a high-performance motor that can deliver up to 2,000 RPM. It also features a built-in LED light and a belt hook for easy storage.",
  "product_info": "Weight: 4.35 lbs. | Dimensions: 13.88 x 9.38 x 4.25 inches | Chuck Size: 1/2 inch"
  },
  {
  "product_number": "3",
  "product_name": "Drill Driver Set",
  "product_category": "Power Drill",
  "product_brand": "Milwaukee",
  "product_price": 99.99,
  "product_description": "This drill driver set includes a 12-volt lithium-ion battery, charger, and carrying case. The drill has a two-speed gearbox and can deliver up to 1,500 RPM. It also features an on-board LED light and a fuel gauge to indicate the battery's charge level.",
  "product_info": "Weight: 2.1 lbs. | Dimensions: 7.75 x 7.5 x 3 inches | Chuck Size: 3/8 inch"
  },
  {
    "product_number": "4",
    "product_name": "Lithium-Ion Drill",
    "product_category": "Power Drill",
    "product_brand": "Makita",
    "product_price": 159.99,
    "product_description": "This lithium-ion drill features a 4-pole motor that delivers up to 480 in. lbs. of maximum torque. It also has a variable speed control dial that can adjust the speed from 0 to 1,900 RPM. The drill has a built-in LED light and an ergonomic design for comfort during extended use.",
    "product_info": "Weight: 3.3 lbs. | Dimensions: 10.8 x 3.5 x 8.1 inches | Chuck Size: 1/2 inch"
    },
    {
    "product_number": "5",
    "product_name": "Corded Drill Driver",
    "product_category": "Power Drill",
    "product_brand": "Hitachi",
    "product_price": 89.99,
    "product_description": "This corded drill driver has a powerful 7-amp motor that delivers up to 600 RPM. It also features a trigger switch with variable speed control, a reversible function, and a belt hook for easy storage. The drill comes with a case for safe transportation and storage.",
    "product_info": "Weight: 4.6 lbs. | Dimensions: 11.1 x 3.1 x 9.3 inches | Chuck Size: 3/8 inch"
    },
    {
    "product_number": "006_brushless_drill",
    "product_name": "Brushless Drill",
    "product_category": "Power Drill",
    "product_brand": "Ryobi",
    "product_price": 119.99,
    "product_description": "This brushless drill has a high-performance motor that can deliver up to 1,800 RPM. It also features a 24-position clutch and a 2-speed gearbox for increased versatility. The drill has an LED light and a magnetic bit holder for added convenience.",
    "product_info": "Weight: 3.15 lbs. | Dimensions: 9.5 x 2.9 x 7.5 inches | Chuck Size: 1/2 inch"
    },
  {
    "product_number": "007_max_drill_driver",
    "product_name": "Max Drill Driver",
    "product_category": "Power Drill",
    "product_brand": "Dremel",
    "product_price": "", 
    "product_description": "",
    "product_info": ""
  },
  {
    "product_number": "008_20v_max_cordless_drill",
    "product_name": "20V Max Cordless Drill",
    "product_category": "Power Drill",
    "product_brand": "Black+Decker",
    "product_price": "", 
    "product_description": "",
    "product_info": ""
  },
  {
    "product_number": "009_titanium_drill_set",
    "product_name": "Titanium Drill Set",
    "product_category": "Power Drill",
    "product_brand": "Kobalt"
  },
  {
    "product_number": "010_variable_speed_drill",
    "product_name": "Variable Speed Drill",
    "product_category": "Power Drill",
    "product_brand": "Craftsman"
  },

  //
  {
    "product_number": "011_handheld_circular_saw",
    "product_name": "Handheld Circular Saw",
    "product_category": "Saws",
    "product_brand": "DeWalt"
  },
  {
    "product_number": "012_reciprocating_saw",
    "product_name": "Reciprocating Saw",
    "product_category": "Saws",
    "product_brand": "Makita"
  },
  {
    "product_number": "013_jig_saw",
    "product_name": "Jig Saw",
    "product_category": "Saws",
    "product_brand": "Bosch"
  },
  {
    "product_number": "014_miter_saw",
    "product_name": "Miter Saw",
    "product_category": "Saws",
    "product_brand": "Milwaukee"
  },
  {
    "product_number": "015_table_saw",
    "product_name": "Table Saw",
    "product_category": "Saws",
    "product_brand": "Ryobi"
  },
  {
    "product_number": "016_band_saw",
    "product_name": "Band Saw",
    "product_category": "Saws",
    "product_brand": "Hitachi"
  },
  {
    "product_number": "017_chop_saw",
    "product_name": "Chop Saw",
    "product_category": "Saws",
    "product_brand": "Craftsman"
  },
  {
    "product_number": "018_tile_saw",
    "product_name": "Tile Saw",
    "product_category": "Saws",
    "product_brand": "SKIL"
  },
  {
    "product_number": "019_handheld_power_saw",
    "product_name": "Handheld Power Saw",
    "product_category": "Saws",
    "product_brand": "Porter-Cable"
  },
  {
    "product_number": "020_concrete_cutting_saw",
    "product_name": "Concrete Cutting Saw",
    "product_category": "Saws",
    "product_brand": "Husqvarna"
  },

  //Sanders
  {
    "product_number": "021_dustless_sander",
    "product_name": "Dustless Sander",
    "product_category": "Sanders",
    "product_brand": "DEWALT"
  },
  {
    "product_number": "022_random_orbit_sander",
    "product_name": "Random Orbit Sander",
    "product_category": "Sanders",
    "product_brand": "Makita"
  },
  {
    "product_number": "023_belt_sander",
    "product_name": "Belt Sander",
    "product_category": "Sanders",
    "product_brand": "Black & Decker"
  },
  {
    "product_number": "024_palm_sander",
    "product_name": "Palm Sander",
    "product_category": "Sanders",
    "product_brand": "Bosch"
  },
  {
    "product_number": "025_finish_sander",
    "product_name": "Finish Sander",
    "product_category": "Sanders",
    "product_brand": "Ryobi"
  },
  {
    "product_number": "026_detail_sander",
    "product_name": "Detail Sander",
    "product_category": "Sanders",
    "product_brand": "SKIL"
  },
  {
    "product_number": "027_disc_sander",
    "product_name": "Disc Sander",
    "product_category": "Sanders",
    "product_brand": "Hitachi"
  },
  {
    "product_number": "028_corner_sander",
    "product_name": "Corner Sander",
    "product_category": "Sanders",
    "product_brand": "Porter-Cable"
  },
  {
    "product_number": "029_power_sander",
    "product_name": "Power Sander",
    "product_category": "Sanders",
    "product_brand": "Craftsman"
  },
  {
    "product_number": "030_sheet_sander",
    "product_name": "Sheet Sander",
    "product_category": "Sanders",
    "product_brand": "Milwaukee"
  },

  // Hammers
  {
    "product_number": "031_16oz_claw_hammer",
    "product_name": "16oz Claw Hammer",
    "product_category": "Hammers",
    "product_brand": "DeWalt"
},
{
    "product_number": "032_20oz_straigth_claw_hammer",
    "product_name": "20oz Straight Claw Hammer",
    "product_category": "Hammers",
    "product_brand": "Makita"
},
{
    "product_number": "033_14oz_milled_face_hammer",
    "product_name": "14oz Milled Face Hammer",
    "product_category": "Hammers",
    "product_brand": "Milwaukee"
},
{
    "product_number": "034_22oz_smooth_face_framing_hammer",
    "product_name": "22oz Smooth Face Framing Hammer",
    "product_category": "Hammers",
    "product_brand": "Black+Decker"
},
{
    "product_number": "035_16oz_rip_claw_hammer",
    "product_name": "16oz Rip Claw Hammer",
    "product_category": "Hammers",
    "product_brand": "Ryobi"
},
{
    "product_number": "036_20oz_claw_hammer",
    "product_name": "20oz Claw Hammer",
    "product_category": "Hammers",
    "product_brand": "Husqvarna"
},
{
    "product_number": "037_16oz_curved_claw_hammer",
    "product_name": "16oz Curved Claw Hammer",
    "product_category": "Hammers",
    "product_brand": "Dremel"
},
{
    "product_number": "038_20oz_milled_face_hammer",
    "product_name": "20oz Milled Face Hammer",
    "product_category": "Hammers",
    "product_brand": "Hitachi"
},
{
    "product_number": "039_16oz_milled_face_hammer",
    "product_name": "16oz Milled Face Hammer",
    "product_category": "Hammers",
    "product_brand": "Bosch"
},
{
    "product_number": "040_20oz_framing_hammer",
    "product_name": "20oz Framing Hammer",
    "product_category": "Hammers",
    "product_brand": "Stanley"
},

// Screwdrivers
{
  "product_number": "041_phillips_screwdriver",
  "product_name": "Phillips Screwdriver",
  "product_category": "Screwdrivers",
  "product_brand": "Klein Tools"
},
{
  "product_number": "042_precision_screwdriver_set",
  "product_name": "Precision Screwdriver Set",
  "product_category": "Screwdrivers",
  "product_brand": "Wiha"
},
{
  "product_number": "043_ratcheting_screwdriver_set",
  "product_name": "Ratcheting Screwdriver Set",
  "product_category": "Screwdrivers",
  "product_brand": "DEWALT"
},
{
  "product_number": "044_magnetic_screwdriver_set",
  "product_name": "Magnetic Screwdriver Set",
  "product_category": "Screwdrivers",
  "product_brand": "Craftsman"
},
{
  "product_number": "045_insulated_screwdriver_set",
  "product_name": "Insulated Screwdriver Set",
  "product_category": "Screwdrivers",
  "product_brand": "Knipex"
},
{
  "product_number": "046_nut_driver_set",
  "product_name": "Nut Driver Set",
  "product_category": "Screwdrivers",
  "product_brand": "Milwaukee"
},
{
  "product_number": "047_offset_screwdriver_set",
  "product_name": "Offset Screwdriver Set",
  "product_category": "Screwdrivers",
  "product_brand": "GearWrench"
},
{
  "product_number": "048_torque_screwdriver_set",
  "product_name": "Torque Screwdriver Set",
  "product_category": "Screwdrivers",
  "product_brand": "Wera"
},
{
  "product_number": "049_interchangeable_screwdriver_set",
  "product_name": "Interchangeable Screwdriver Set",
  "product_category": "Screwdrivers",
  "product_brand": "Facom"
},
{
  "product_number": "050_pocket_screwdriver",
  "product_name": "Pocket Screwdriver",
  "product_category": "Screwdrivers",
  "product_brand": "STANLEY"
},

//Wrenches
{
  "product_number": "051_adjustable_wrench",
  "product_name": "Adjustable Wrench",
  "product_category": "Wrenches",
  "product_brand": "Craftsman"
},
{
  "product_number": "052_combination_wrench_set",
  "product_name": "Combination Wrench Set",
  "product_category": "Wrenches",
  "product_brand": "DeWalt"
},
{
  "product_number": "053_hex_key_set",
  "product_name": "Hex Key Set",
  "product_category": "Wrenches",
  "product_brand": "Milwaukee"
},
{
  "product_number": "054_pipe_wrench",
  "product_name": "Pipe Wrench",
  "product_category": "Wrenches",
  "product_brand": "Stanley"
},
{
  "product_number": "055_ratcheting_wrench_set",
  "product_name": "Ratcheting Wrench Set",
  "product_category": "Wrenches",
  "product_brand": "Kobalt"
},
{
  "product_number": "056_socket_wrench_set",
  "product_name": "Socket Wrench Set",
  "product_category": "Wrenches",
  "product_brand": "Snap-On"
},
{
  "product_number": "057_strap_wrench",
  "product_name": "Strap Wrench",
  "product_category": "Wrenches",
  "product_brand": "IRWIN"
},
{
  "product_number": "058_torque_wrench",
  "product_name": "Torque Wrench",
  "product_category": "Wrenches",
  "product_brand": "TEKTON"
},
{
  "product_number": "059_wrench_set",
  "product_name": "Wrench Set",
  "product_category": "Wrenches",
  "product_brand": "Channellock"
},
{
  "product_number": "060_adjustable_spud_wrench",
  "product_name": "Adjustable Spud Wrench",
  "product_category": "Wrenches",
  "product_brand": "RIDGID"
},

//Pliers
{
  "product_number": "061_channel_locks",
  "product_name": "Channel Locks",
  "product_category": "Pliers",
  "product_brand": "Channellock"
},
{
  "product_number": "062_vise_grips",
  "product_name": "Vise Grips",
  "product_category": "Pliers",
  "product_brand": "Irwin Tools"
},
{
  "product_number": "063_needle_nose_pliers",
  "product_name": "Needle Nose Pliers",
  "product_category": "Pliers",
  "product_brand": "Klein Tools"
},
{
  "product_number": "064_slip_joint_pliers",
  "product_name": "Slip Joint Pliers",
  "product_category": "Pliers",
  "product_brand": "Stanley"
},
{
  "product_number": "065_tongue_and_groove_pliers",
  "product_name": "Tongue and Groove Pliers",
  "product_category": "Pliers",
  "product_brand": "Milwaukee"
},
{
  "product_number": "066_long_nose_pliers",
  "product_name": "Long Nose Pliers",
  "product_category": "Pliers",
  "product_brand": "DEWALT"
},
{
  "product_number": "067_combination_pliers",
  "product_name": "Combination Pliers",
  "product_category": "Pliers",
  "product_brand": "Knipex"
},
{
  "product_number": "068_fencing_pliers",
  "product_name": "Fencing Pliers",
  "product_category": "Pliers",
  "product_brand": "Crescent"
},
{
  "product_number": "069_bent_nose_pliers",
  "product_name": "Bent Nose Pliers",
  "product_category": "Pliers",
  "product_brand": "TEKTON"
},
{
  "product_number": "070_locking_pliers",
  "product_name": "Locking Pliers",
  "product_category": "Pliers",
  "product_brand": "Husky"
},

// Levels
{
  "product_number": "071_24-inch_magnetic_torpedo_level",
  "product_name": "24-inch Magnetic Torpedo Level",
  "product_category": "Levels",
  "product_brand": "Klein Tools"
},
{
  "product_number": "072_48-inch_box_level",
  "product_name": "48-inch Box Level",
  "product_category": "Levels",
  "product_brand": "Klein Tools"
},
{
  "product_number": "073_72-inch_box_level",
  "product_name": "72-inch Box Level",
  "product_category": "Levels",
  "product_brand": "Klein Tools"
},
{
  "product_number": "074_24-inch_i-Beam_level",
  "product_name": "24-inch I-Beam Level",
  "product_category": "Levels",
  "product_brand": "Klein Tools"
},
{
  "product_number": "075_48-inch_i-Beam_level",
  "product_name": "48-inch I-Beam Level",
  "product_category": "Levels",
  "product_brand": "Klein Tools"
},
{
  "product_number": "076_24-inch_digital_level",
  "product_name": "24-inch Digital Level",
  "product_category": "Levels",
  "product_brand": "Stabila"
},
{
  "product_number": "077_48-inch_digital_level",
  "product_name": "48-inch Digital Level",
  "product_category": "Levels",
  "product_brand": "Stabila"
},
{
  "product_number": "078_72-inch_digital_level",
  "product_name": "72-inch Digital Level",
  "product_category": "Levels",
  "product_brand": "Stabila"
},
{
  "product_number": "079_24-inch_magnetic_level",
  "product_name": "24-inch Magnetic Level",
  "product_category": "Levels",
  "product_brand": "Stabila"
},
{
  "product_number": "080_48-inch_magnetic_level",
  "product_name": "48-inch Magnetic Level",
  "product_category": "Levels",
  "product_brand": "Stabila"
},

// Measuring Tools
{
  "product_number": "081_digital_caliper",
  "product_name": "Digital Caliper",
  "product_category": "Measuring tools",
  "product_brand": "Mitutoyo"
},
{
  "product_number": "082_tape_measure",
  "product_name": "Tape Measure",
  "product_category": "Measuring tools",
  "product_brand": "Stanley"
},
{
  "product_number": "083_laser_distance_meter",
  "product_name": "Laser Distance Meter",
  "product_category": "Measuring tools",
  "product_brand": "Bosch"
},
{
  "product_number": "084_telescoping_gage_set",
  "product_name": "Telescoping Gage Set",
  "product_category": "Measuring tools",
  "product_brand": "Starrett"
},
{
  "product_number": "085_dial_indicator",
  "product_name": "Dial Indicator",
  "product_category": "Measuring tools",
  "product_brand": "Fowler"
},
{
  "product_number": "086_feeler_gauge",
  "product_name": "Feeler Gauge",
  "product_category": "Measuring tools",
  "product_brand": "Craftsman"
},
{
  "product_number": "087_protractor",
  "product_name": "Protractor",
  "product_category": "Measuring tools",
  "product_brand": "Wixey"
},
{
  "product_number": "088_angle_finder",
  "product_name": "Angle Finder",
  "product_category": "Measuring tools",
  "product_brand": "General Tools"
},
{
  "product_number": "089_thread_pitch_gauge",
  "product_name": "Thread Pitch Gauge",
  "product_category": "Measuring tools",
  "product_brand": "Accusize Industrial Tools"
},
{
  "product_number": "090_digital_level",
  "product_name": "Digital Level",
  "product_category": "Measuring tools",
  "product_brand": "Johnson Level & Tool"
},

// Tool Storage
{
  "product_number": "091_portable_tool_box",
  "product_name": "Portable Tool Box",
  "product_category": "Tool Storage",
  "product_brand": "DeWalt"
},
{
  "product_number": "092_rolling_tool_chest",
  "product_name": "Rolling Tool Chest",
  "product_category": "Tool Storage",
  "product_brand": "Milwaukee"
},
{
  "product_number": "093_workshop_tool_trolley",
  "product_name": "Workshop Tool Trolley",
  "product_category": "Tool Storage",
  "product_brand": "Husky"
},
{
  "product_number": "094_wall-Mounted_tool_cabinet",
  "product_name": "Wall-Mounted Tool Cabinet",
  "product_category": "Tool Storage",
  "product_brand": "Craftsman"
},
{
  "product_number": "095_mobile_tool_organizer",
  "product_name": "Mobile Tool Organizer",
  "product_category": "Tool Storage",
  "product_brand": "Stanley"
},

// Safety Equipment
{
  "product_number": "096_impact_resistant_safety_glasses",
  "product_name": "Impact Resistant Safety Glasses",
  "product_category": "Safety equipment",
  "product_brand": "3M"
},
{
  "product_number": "097_anti-Vibration_gloves",
  "product_name": "Anti-Vibration Gloves",
  "product_category": "Safety equipment",
  "product_brand": "DeWalt"
},
{
  "product_number": "098_noise_cancelling_ear_muffs",
  "product_name": "Noise Cancelling Ear Muffs",
  "product_category": "Safety equipment",
  "product_brand": "Milwaukee"
},
{
  "product_number": "099_high-Visibility_safety_vest",
  "product_name": "High-Visibility Safety Vest",
  "product_category": "Safety equipment",
  "product_brand": "Klein Tools"
},
{
  "product_number": "100_chemical_resistant_gloves",
  "product_name": "Chemical Resistant Gloves",
  "product_category": "Safety equipment",
  "product_brand": "Makita"
},
{
  "product_number": "101_respirator_mask",
  "product_name": "Respirator Mask",
  "product_category": "Safety equipment",
  "product_brand": "Bosch"
},
{
  "product_number": "102_heavy-Duty_knee_pads",
  "product_name": "Heavy-Duty Knee Pads",
  "product_category": "Safety equipment",
  "product_brand": "Stanley"
},
{
  "product_number": "103_cut-Resistant_gloves",
  "product_name": "Cut-Resistant Gloves",
  "product_category": "Safety equipment",
  "product_brand": "Hitachi"
},
{
  "product_number": "104_full-Face_shield",
  "product_name": "Full-Face Shield",
  "product_category": "Safety equipment",
  "product_brand": "Ridgid"
},
{
  "product_number": "105_dust-Proof_safety_goggles",
  "product_name": "Dust-Proof Safety Goggles",
  "product_category": "Safety equipment",
  "product_brand": "Black+Decker"
}
  
];
   