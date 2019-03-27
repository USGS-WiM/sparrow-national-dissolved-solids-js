/*
Created By Erik Myers 2/12/18
CONFIG FILE FOR USE WITH SPARROW-Eastern U.S

THIS CONFIG REMOVES CATCHMENT AND AGGREGATE LABELS FROM THE CHARTOUTFIELS OBJECTS TO SHORTEN CHART AND DISPLAYED METRIC LABELS.
Also removes PNAME and replaces it with COMID and ST_COMID
*/

var appTitle = "Dissolved Solids Sources, Loads, and Yields For the Conterminous U.S.";
var appVersion = "v0.9.0";

var serviceBaseURL = "https://sparrowtest.wim.usgs.gov/arcgis/rest/services/SparrowNDS/SparrowNDS/MapServer/"; //important! UPDATE rest service URL
var chartUnits = " (kg/yr.)";
var chartFeatureMax = 2500; //chart will not be available if more than this many polygons are showing on map.

var groupResultsInitIndex = 1; //sets the default layer for the application.  In this case service layer 1 == HUC8.

var splitLayers = [5, 6, 7, 8]; //important! UPDATE layer Ids of all state split layers

var mapCenter = [-102.072432, 38.89886];
//app.defaultMapCenter = [-87, 42];
defaultZoomLevel = 5;

borderThreshold = 10; //dynamic polygon border threshold.  When zoomed beyond this number borders appear
var dynamicBorderLayers = ["Catchment", "HUC4", "HUC8"]; //Aggregate layer choices placed in this array will have dynamic borders.  Each string MUST MATCH the text in the Group Results By Select to work.

var initQueryParams = ["ST", "GP3", "GP2", "GP1"]; //used to query for the AOI dropdown values on app init.

var groupResultsLabels = {
    a: "Catchment ID",
    b: "HUC8",
    c: "HUC4",
    d: "HUC2",
    e: "State"
};

//download locations
var phosphorusShapefileURL =
    "https://sparrow.wim.usgs.gov/national-dissolved-solids/downloads/national-dissolved-solids_shapefile.zip";
//var nitrogenShapefileURL = 'https://sparrow.wim.usgs.gov/east-us/downloads/east_us_shapefiles_nitrogen.zip';
var phosCalibrationURL =
    "https://sparrow.wim.usgs.gov/national-dissolved-solids/downloads/national-dissolved-solids_calibration_sites.zip";
//var nitroCalibrationURL = 'https://sparrow.wim.usgs.gov/east-us/downloads/east_us_nitrogen_calibration_sites.zip';

var tableOutFields = [
    { field: "FID", name: "Unique Feature Id" },
    { field: "GRP1", name: "Main River Basin" },
    { field: "GRP2", name: "Tributary" },
    { field: "GRP_3_NA_1", name: "Join Field" },
    { field: "Area_g3", name: "HUC10 area (mi2)" }
];

var stateTableOutFields = [
    { field: "FID", name: "Unique Feature Id" },
    { field: "ST_GP3_NAM", name: "HUC10/State (combination) ID" },
    { field: "Area_S3", name: "HUC10 area within the state and the  model area (mi2)" },
    { field: "ST", name: "State" },
    { field: "GRP_1_NAM", name: "Independent Watershed name (in which HUC10 is nested)" },
    { field: "GP2", name: "HUC8 (in which HUC10 is nested)" },
    { field: "GRP_3_NAM", name: "HUC10" },
    { field: "ST_GP1_NAM", name: "State and Independent Watershed" },
    { field: "ST_GP2_NAM", name: "State amd HUC8" },
    { field: "ST_gp3_n_1", name: "Join Field" }
];

var aggregateDefinitions = {
    st: "State",
    gp1: "HUC2",
    gp2: "HUC4",
    gp3: "HUC8",
    sg1: "State_HUC2",
    sg2: "State_HUC4",
    sg3: "State_HUC8"
};

// key, value pairs come from PHOSPHORUS attribute definitions Excel file
var catchmentDefinitions = {
    comid: "SPARROW Reach ID", // This will need to be changed here and in the core file
    st_comid: "SPARROW Reach by State", // This will need to be changed here and in the core file?
    pname: "Reach Name",
    accl: "Accumulated load (kg)",
    incl: "Incremental load (kg)",
    accy: "Accumulated yield (kg/km2)",
    incy: "Incremental yield (kg/km2)",
    daccl: "Delivered accumulated load (kg)",
    daccy: "Delivered accumulated yield (kg/km2)",
    dincl: "Delivered incremental load  (kg)",
    dincy: "Delivered incremental yield (kg/km2)"
};

//Nitrogen same as Phosphorus in this model
/* var catchmentDefinitions_tn = {
    comid : "Catchment ID",
    st_comid: "Catchment ID by State",
    pname : "Catchment Name",
    accl : "Accumulated load (kg)",
    incl : "Incremental load (kg)",
    accy : "Accumulated yield (kg/km2)",
    incy : "Incremental yield (kg/km2)",
    daccl : "Delivered accumulated load (kg)",
    daccy : "Delivered accumulated yield (kg/km2)",
    dincl : "Delivered incremental load  (kg)",
    dincy : "Delivered incremental yield (kg/km2)" 
} */

var mappedDefinitions = {
    area: "Aggregated area (km2)", // i think for NDS this is DEMIAREA and DEMTAREA?? according to the spreadsheet
    al: "Aggregated load (kg)",
    ay: "Aggregated yield (kg/km2)",
    dal: "Delivered aggregated load (kg)",
    day: "Delivered aggregated yield (kg/km2)",
    ap: "Percent of aggregated load",
    dap: "Percent of delivered aggregated load"
};

/***UPDATE IMPORTANT! complete with source data Excel key***/
var phosphorusSourceDefinitions = {
    s1: "Surficial Lithology",
    s2: "Water (submerged lithologies)",
    s3: "Cultivated Land",
    s4: "Pasture Land",
    s5: "Urban Land ",
    s6: "Road Salt",
    s7: "Non US inflow"
};

/***UPDATE IMPORTANT! complete with source data Excel key***/
/* var nitrogenSourceDefinitions = {
    s1 : "Wastewater",
    s2 : "Water (submerged lithologies)",
    s3 : "Cultivated Land",
    s4 : "Pasture Land",
    s5 : "Urban Land",
    s6 : "Road Salt",
    s7 : "Deposition from Vehicle Emissions",
    s8 : "Deposition from Background"
} */

/**get the HEX values below from project Google Doc and make sure:  
    1. each color corresponds with the order of SourceDefinitions objects above  
    2. there the number of hex colors matches the number of nutrient sources
**/
var phosColors = ["#BF0000", "#A2EB85", "#663100", "#FFEC99", "#FFCCFF", "#0070C0","#006800"];
var nitroColors = ["#BF0000", "#FFCCFF", "#663100", "#FFEC99", "#A2EB85", "#00a900", "#006800", "#0070C0"];


function getFields(sourceDefObj, mappedDefObj, definitionCode, group) {
    var fieldsArr = [];
    //check to make sure catchment and aggregate layer are handled appropriately by checking if group is in global aggregateDefinitions object.
    if (!aggregateDefinitions.hasOwnProperty(group.toLowerCase())) {
    //if (group.toLowerCase() == 'mrb_id' || group.toLowerCase() == 'st_mrb_id' || group.toLowerCase() == 'comid' || group.toLowerCase() == 'st_comid' || group.toLowerCase() == 'sparrowid' || group.toLowerCase() == 'st_sparrid') {
        fieldsArr.push({ attribute: group.toUpperCase(), label: mappedDefObj.comid });
        for (var key in sourceDefObj) {
            fieldsArr.push({ attribute: definitionCode.toUpperCase() + "_" + key.toUpperCase(), label: mappedDefObj[definitionCode.toLowerCase()] + " " + sourceDefObj[key] });
        } 
        
    } else {
        fieldsArr.push({ attribute: group.toUpperCase(), label: aggregateDefinitions[group] });
        for (var key in sourceDefObj) {
            fieldsArr.push({ attribute: group.toUpperCase() + "_" + definitionCode.toUpperCase() + "_" + key.toUpperCase(), label: mappedDefObj[definitionCode.toLowerCase()] + " " + sourceDefObj[key] });
        }
    }
    
    
    return fieldsArr;

}



/***-----BEGIN PHOSPHORUS LAYER GROUPS --------***/
/* PHOSPHORUS CATCHMENTS */

/*DOCUMENTATION NOTES: each 'field below should correspond to a "Mapped Attribute" in the cats_tp_attribute_Definitions.xlsx file.  These are the attributes that will be displayed on the map. */
var Catchments = [
    {
        field: "ACCL",
        name: catchmentDefinitions.accl,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "accl", "mrb_id")
    },
    {
        field: "INCL",
        name: catchmentDefinitions.incl,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "incl", "mrb_id")
    },
    {
        field: "ACCY",
        name: catchmentDefinitions.accy,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "accy", "mrb_id")
    },
    {
        field: "INCY",
        name: catchmentDefinitions.incy,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "incy", "mrb_id")
    },
    {
        field: "DACCL",
        name: catchmentDefinitions.daccl,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "daccl", "mrb_id")
    },
    {
        field: "DACCY",
        name: catchmentDefinitions.daccy,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "daccy", "mrb_id")
    },
    {
        field: "DINCL",
        name: catchmentDefinitions.dincl,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "dincl", "mrb_id")
    },
    {
        field: "DINCY",
        name: catchmentDefinitions.dincy,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "dincy", "mrb_id")
    }
];

//HUC8 Metric choices, service Id 1
var Group3 = [
    {
        field: "GP3_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "al", "gp3")
    },
    {
        field: "GP3_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "dal", "gp3")
    },
    {
        field: "GP3_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "ay", "gp3")
    },
    {
        field: "GP3_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "day", "gp3")
    }
];

//HUC8 Metric choices, Service Id 1
var Group2 = [
    {
        field: "GP2_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "al", "gp2")
    },
    {
        field: "GP2_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "dal", "gp2")
    },
    {
        field: "GP2_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "ay", "gp2")
    },
    {
        field: "GP2_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "day", "gp2")
    }
];

var Group1 = [
    {
        field: "GP1_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "al", "gp1")
    },
    {
        field: "GP1_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "dal", "gp1")
    },
    {
        field: "GP1_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "day", "gp1")
    },
    {
        field: "GP1_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "day", "gp1")
    }
];

var ST = [
    {
        field: "ST_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "al", "st")
    },
    {
        field: "ST_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "dal", "st")
    },
    {
        field: "ST_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "ay", "st")
    },
    {
        field: "ST_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "day", "st")
    }
];

var Catchments_st = [
    {
        field: "ACCL",
        name: catchmentDefinitions.accl,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "accl", "st_mrb_id")
    },
    {
        field: "INCL",
        name: catchmentDefinitions.incl,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "incl", "st_mrb_id")
    },
    {
        field: "ACCY",
        name: catchmentDefinitions.accy,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "accy", "st_mrb_id")
    },
    {
        field: "INCY",
        name: catchmentDefinitions.incy,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "INCY", "st_mrb_id")
    },
    {
        field: "DACCL",
        name: catchmentDefinitions.daccl,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "daccl", "st_mrb_id")
    },
    {
        field: "DACCY",
        name: catchmentDefinitions.daccy,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "daccy", "st_mrb_id")
    },
    {
        field: "DINCL",
        name: catchmentDefinitions.dincl,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "dincl", "st_mrb_id")
    },
    {
        field: "DINCY",
        name: catchmentDefinitions.dincy,
        chartOutfields: getFields(phosphorusSourceDefinitions, catchmentDefinitions, "dincy", "st_mrb_id")
    }
];

var Group3_st = [
    {
        field: "SG3_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "al", "sg3")
    },
    {
        field: "SG3_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "dal", "sg3")
    },
    {
        field: "SG3_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "ay", "sg3")
    },
    {
        field: "SG3_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "day", "sg3")
    }
];

var Group2_st = [
    {
        field: "SG2_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "al", "sg2")
    },
    {
        field: "SG2_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "dal", "sg2")
    },
    {
        field: "SG2_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "ay", "sg2")
    },
    {
        field: "SG2_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "day", "sg2")
    }
];

var Group1_st = [
    {
        field: "SG1_AL",
        name: mappedDefinitions.al,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "al", "sg1")
    },
    {
        field: "SG1_DAL",
        name: mappedDefinitions.dal,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "dal", "sg1")
    },
    {
        field: "SG1_AY",
        name: mappedDefinitions.ay,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "ay", "sg1")
    },
    {
        field: "SG1_DAY",
        name: mappedDefinitions.day,
        chartOutfields: getFields(phosphorusSourceDefinitions, mappedDefinitions, "day", "sg1")
    }
];
////END PHOSPHORUS LAYER GROUPS______________________________________________________________________________________________________________________________
