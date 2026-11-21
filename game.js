/* RECIPE, PLEASE — Edición 1.9.106. Veintitrés pacientes chilenos más (48 en total); carnets de pelo rubio y rojo válidos, carnet falso de pelo negro, caso sin carnet con quetiapina 50 mg, menor de 17; carnet con pelo azul válido; carnets pendientes sin accesorio; mecanismo de carnet falso. */
'use strict';
const TUGUEL_FIRST_VISIT_INDEX=2;
const SIS_UNLOCK_DAY=2;
const STOLEN_FOLIO_ALERT='Dr. Ernesto Valdés · Folios no válidos 003450–003499.';
const SIS_UNLOCK_NOTICE={
 key:'sis-unlock',day:SIS_UNLOCK_DAY,title:'NUEVA HERRAMIENTA · REGISTRO SIS',
 body:`Desde el día ${SIS_UNLOCK_DAY} puedes consultar el Registro SIS ficticio para verificar si un prescriptor aparece inscrito y revisar su firma de referencia.`,
 type:'sistema',seen:false
};
const VICTOR_DONATION=100;
const SCHOOL_CLOTH_PRICE=10000;
const DIRTY_CLOTH='Tela sucia';
const CLEAN_CLOTH='Tela limpia';
const TACA_PREVIEW=window.location?.search==='?escenas=carlitos';
const SAVE_KEY='bajo_receta_alfa_v1'; // Save format kept for compatibility
function assetUrl(path){return path} // Standalone build embeds assets without changing gameplay
const app=document.getElementById('app');
const toastEl=document.getElementById('toast');
const DRUGS={"quetiapina50":{"name":"Quetiapina","mg":"50 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Salud mental","form":"comprimidos"},"losartan":{"name":"Losartán","mg":"50 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"carvedilol_25_mg_comprimidos":{"name":"Carvedilol","mg":"25 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"metformin":{"name":"Metformina","mg":"850 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos"},"amoxicillin":{"name":"Amoxicilina","mg":"500 mg","pack":"cápsulas/comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"cápsulas/comprimidos"},"clonazepam2":{"name":"Clonazepam","mg":"2 mg","pack":"30 comprimidos","kind":"RETENIDA","stock":8,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos"},"clonazepam05":{"name":"Clonazepam","mg":"0,5 mg","pack":"30 comprimidos","kind":"RETENIDA","stock":10,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos"},"clotiazepam10":{"name":"Clotiazepam","mg":"10 mg","pack":"30 comprimidos","kind":"RETENIDA","stock":12,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos"},"methylphenidate":{"name":"Metilfenidato","mg":"10 mg","pack":"30 comprimidos","kind":"CHEQUE","stock":7,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos"},"carvedilol_3_125_mg_comprimidos":{"name":"Carvedilol","mg":"3,125 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"carvedilol_6_25_mg_comprimidos":{"name":"Carvedilol","mg":"6,25 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"carvedilol_12_5_mg_comprimidos":{"name":"Carvedilol","mg":"12,5 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"bisoprolol_1_25_mg_comprimidos":{"name":"Bisoprolol","mg":"1,25 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"bisoprolol_2_5_mg_comprimidos":{"name":"Bisoprolol","mg":"2,5 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"bisoprolol_5_mg_comprimidos":{"name":"Bisoprolol","mg":"5 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"bisoprolol_10_mg_comprimidos":{"name":"Bisoprolol","mg":"10 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"atenolol_50_mg_comprimidos":{"name":"Atenolol","mg":"50 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"atenolol_100_mg_comprimidos":{"name":"Atenolol","mg":"100 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"propranolol_10_mg_comprimidos":{"name":"Propranolol","mg":"10 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"propranolol_40_mg_comprimidos":{"name":"Propranolol","mg":"40 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"losartan_100_mg_comprimidos":{"name":"Losartán","mg":"100 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"valsartan_80_mg_comprimidos":{"name":"Valsartán","mg":"80 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"valsartan_160_mg_comprimidos":{"name":"Valsartán","mg":"160 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"valsartan_320_mg_comprimidos":{"name":"Valsartán","mg":"320 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"enalapril_5_mg_comprimidos":{"name":"Enalapril","mg":"5 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"enalapril_10_mg_comprimidos":{"name":"Enalapril","mg":"10 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"enalapril_20_mg_comprimidos":{"name":"Enalapril","mg":"20 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"amlodipino_5_mg_comprimidos":{"name":"Amlodipino","mg":"5 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"amlodipino_10_mg_comprimidos":{"name":"Amlodipino","mg":"10 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"hidroclorotiazida_25_mg_comprimidos":{"name":"Hidroclorotiazida","mg":"25 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"hidroclorotiazida_50_mg_comprimidos":{"name":"Hidroclorotiazida","mg":"50 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"furosemida_40_mg_comprimidos":{"name":"Furosemida","mg":"40 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"espironolactona_25_mg_comprimidos":{"name":"Espironolactona","mg":"25 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"espironolactona_100_mg_comprimidos":{"name":"Espironolactona","mg":"100 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"atorvastatina_10_mg_comprimidos":{"name":"Atorvastatina","mg":"10 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"atorvastatina_20_mg_comprimidos":{"name":"Atorvastatina","mg":"20 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"atorvastatina_40_mg_comprimidos":{"name":"Atorvastatina","mg":"40 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"atorvastatina_80_mg_comprimidos":{"name":"Atorvastatina","mg":"80 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"rosuvastatina_5_mg_comprimidos":{"name":"Rosuvastatina","mg":"5 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"rosuvastatina_10_mg_comprimidos":{"name":"Rosuvastatina","mg":"10 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"rosuvastatina_20_mg_comprimidos":{"name":"Rosuvastatina","mg":"20 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"rosuvastatina_40_mg_comprimidos":{"name":"Rosuvastatina","mg":"40 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"clopidogrel_75_mg_comprimidos":{"name":"Clopidogrel","mg":"75 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Cardiovasculares","form":"comprimidos"},"levotiroxina_25_mcg_comprimidos_mcg":{"name":"Levotiroxina","mg":"25 mcg","pack":"comprimidos (mcg)","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos (mcg)"},"levotiroxina_50_mcg_comprimidos_mcg":{"name":"Levotiroxina","mg":"50 mcg","pack":"comprimidos (mcg)","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos (mcg)"},"levotiroxina_75_mcg_comprimidos_mcg":{"name":"Levotiroxina","mg":"75 mcg","pack":"comprimidos (mcg)","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos (mcg)"},"levotiroxina_88_mcg_comprimidos_mcg":{"name":"Levotiroxina","mg":"88 mcg","pack":"comprimidos (mcg)","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos (mcg)"},"levotiroxina_100_mcg_comprimidos_mcg":{"name":"Levotiroxina","mg":"100 mcg","pack":"comprimidos (mcg)","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos (mcg)"},"levotiroxina_112_mcg_comprimidos_mcg":{"name":"Levotiroxina","mg":"112 mcg","pack":"comprimidos (mcg)","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos (mcg)"},"levotiroxina_125_mcg_comprimidos_mcg":{"name":"Levotiroxina","mg":"125 mcg","pack":"comprimidos (mcg)","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos (mcg)"},"levotiroxina_137_mcg_comprimidos_mcg":{"name":"Levotiroxina","mg":"137 mcg","pack":"comprimidos (mcg)","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos (mcg)"},"levotiroxina_150_mcg_comprimidos_mcg":{"name":"Levotiroxina","mg":"150 mcg","pack":"comprimidos (mcg)","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos (mcg)"},"levotiroxina_175_mcg_comprimidos_mcg":{"name":"Levotiroxina","mg":"175 mcg","pack":"comprimidos (mcg)","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos (mcg)"},"levotiroxina_200_mcg_comprimidos_mcg":{"name":"Levotiroxina","mg":"200 mcg","pack":"comprimidos (mcg)","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos (mcg)"},"metformina_500_mg_comprimidos":{"name":"Metformina","mg":"500 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos"},"metformina_1000_mg_comprimidos":{"name":"Metformina","mg":"1000 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos"},"metformina_500_mg_lp_comprimidos_lp":{"name":"Metformina","mg":"500 mg LP","pack":"comprimidos LP","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos LP"},"metformina_750_mg_lp_comprimidos_lp":{"name":"Metformina","mg":"750 mg LP","pack":"comprimidos LP","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos LP"},"metformina_1000_mg_lp_comprimidos_lp":{"name":"Metformina","mg":"1000 mg LP","pack":"comprimidos LP","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos LP"},"glibenclamida_5_mg_comprimidos":{"name":"Glibenclamida","mg":"5 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos"},"sitagliptina_25_mg_comprimidos":{"name":"Sitagliptina","mg":"25 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos"},"sitagliptina_50_mg_comprimidos":{"name":"Sitagliptina","mg":"50 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos"},"sitagliptina_100_mg_comprimidos":{"name":"Sitagliptina","mg":"100 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos"},"empagliflozina_10_mg_comprimidos":{"name":"Empagliflozina","mg":"10 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos"},"empagliflozina_25_mg_comprimidos":{"name":"Empagliflozina","mg":"25 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos"},"drospirenona_etinilestradiol_3_mg_0_02_mg_comprimidos_combinados":{"name":"Drospirenona + etinilestradiol","mg":"3 mg + 0,02 mg","pack":"comprimidos combinados","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos combinados"},"drospirenona_etinilestradiol_3_mg_0_03_mg_comprimidos_combinados":{"name":"Drospirenona + etinilestradiol","mg":"3 mg + 0,03 mg","pack":"comprimidos combinados","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos combinados"},"levonorgestrel_etinilestradiol_0_15_mg_0_03_mg_comprimidos_combinados":{"name":"Levonorgestrel + etinilestradiol","mg":"0,15 mg + 0,03 mg","pack":"comprimidos combinados","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos combinados"},"desogestrel_75_mcg_comprimidos":{"name":"Desogestrel","mg":"75 mcg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Endocrinos y metabólicos","form":"comprimidos"},"amoxicilina_875_mg_capsulas_comprimidos":{"name":"Amoxicilina","mg":"875 mg","pack":"cápsulas/comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"cápsulas/comprimidos"},"amoxicilina_250_mg_5_ml_suspension_oral":{"name":"Amoxicilina","mg":"250 mg/5 mL","pack":"suspensión oral","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"suspensión oral"},"amoxicilina_500_mg_5_ml_suspension_oral":{"name":"Amoxicilina","mg":"500 mg/5 mL","pack":"suspensión oral","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"suspensión oral"},"amoxicilina_acido_clavulanico_500_mg_125_mg_comprimidos":{"name":"Amoxicilina + ácido clavulánico","mg":"500 mg + 125 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"comprimidos"},"amoxicilina_acido_clavulanico_875_mg_125_mg_comprimidos":{"name":"Amoxicilina + ácido clavulánico","mg":"875 mg + 125 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"comprimidos"},"amoxicilina_acido_clavulanico_400_mg_57_mg_5_ml_suspension_oral":{"name":"Amoxicilina + ácido clavulánico","mg":"400 mg + 57 mg/5 mL","pack":"suspensión oral","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"suspensión oral"},"cefadroxilo_500_mg_capsulas":{"name":"Cefadroxilo","mg":"500 mg","pack":"cápsulas","kind":"RETENIDA_COMUN","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"cápsulas"},"cefadroxilo_250_mg_5_ml_suspension_oral":{"name":"Cefadroxilo","mg":"250 mg/5 mL","pack":"suspensión oral","kind":"RETENIDA_COMUN","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"suspensión oral"},"azitromicina_500_mg_comprimidos":{"name":"Azitromicina","mg":"500 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"comprimidos"},"azitromicina_200_mg_5_ml_suspension_oral":{"name":"Azitromicina","mg":"200 mg/5 mL","pack":"suspensión oral","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"suspensión oral"},"claritromicina_250_mg_comprimidos":{"name":"Claritromicina","mg":"250 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"comprimidos"},"claritromicina_500_mg_comprimidos":{"name":"Claritromicina","mg":"500 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"comprimidos"},"claritromicina_125_mg_5_ml_suspension_oral":{"name":"Claritromicina","mg":"125 mg/5 mL","pack":"suspensión oral","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"suspensión oral"},"claritromicina_250_mg_5_ml_suspension_oral":{"name":"Claritromicina","mg":"250 mg/5 mL","pack":"suspensión oral","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"suspensión oral"},"ciprofloxacino_250_mg_comprimidos":{"name":"Ciprofloxacino","mg":"250 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"comprimidos"},"ciprofloxacino_500_mg_comprimidos":{"name":"Ciprofloxacino","mg":"500 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"comprimidos"},"ciprofloxacino_750_mg_comprimidos":{"name":"Ciprofloxacino","mg":"750 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"comprimidos"},"doxiciclina_100_mg_comprimidos":{"name":"Doxiciclina","mg":"100 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"comprimidos"},"nitrofurantoina_50_mg_capsulas":{"name":"Nitrofurantoína","mg":"50 mg","pack":"cápsulas","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"cápsulas"},"nitrofurantoina_100_mg_capsulas":{"name":"Nitrofurantoína","mg":"100 mg","pack":"cápsulas","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"cápsulas"},"metronidazol_500_mg_comprimidos":{"name":"Metronidazol","mg":"500 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"comprimidos"},"aciclovir_200_mg_comprimidos":{"name":"Aciclovir","mg":"200 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"comprimidos"},"aciclovir_400_mg_comprimidos":{"name":"Aciclovir","mg":"400 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"comprimidos"},"aciclovir_800_mg_comprimidos":{"name":"Aciclovir","mg":"800 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinfecciosos","form":"comprimidos"},"omeprazol_20_mg_capsulas":{"name":"Omeprazol","mg":"20 mg","pack":"cápsulas","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Gastrointestinales y respiratorios","form":"cápsulas"},"omeprazol_40_mg_capsulas":{"name":"Omeprazol","mg":"40 mg","pack":"cápsulas","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Gastrointestinales y respiratorios","form":"cápsulas"},"esomeprazol_20_mg_comprimidos":{"name":"Esomeprazol","mg":"20 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Gastrointestinales y respiratorios","form":"comprimidos"},"esomeprazol_40_mg_comprimidos":{"name":"Esomeprazol","mg":"40 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Gastrointestinales y respiratorios","form":"comprimidos"},"trimebutina_200_mg_comprimidos":{"name":"Trimebutina","mg":"200 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Gastrointestinales y respiratorios","form":"comprimidos"},"trimebutina_300_mg_lp_comprimidos_lp":{"name":"Trimebutina","mg":"300 mg LP","pack":"comprimidos LP","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Gastrointestinales y respiratorios","form":"comprimidos LP"},"salbutamol_100_mcg_dosis_inhalador_200_dosis":{"name":"Salbutamol","mg":"100 mcg/dosis","pack":"inhalador 200 dosis","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Gastrointestinales y respiratorios","form":"inhalador 200 dosis"},"budesonida_200_mcg_dosis_inhalador":{"name":"Budesonida","mg":"200 mcg/dosis","pack":"inhalador","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Gastrointestinales y respiratorios","form":"inhalador"},"budesonida_400_mcg_dosis_inhalador":{"name":"Budesonida","mg":"400 mcg/dosis","pack":"inhalador","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Gastrointestinales y respiratorios","form":"inhalador"},"fexofenadina_120_mg_comprimidos":{"name":"Fexofenadina","mg":"120 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Gastrointestinales y respiratorios","form":"comprimidos"},"fexofenadina_180_mg_comprimidos":{"name":"Fexofenadina","mg":"180 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Gastrointestinales y respiratorios","form":"comprimidos"},"bilastina_20_mg_comprimidos":{"name":"Bilastina","mg":"20 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Gastrointestinales y respiratorios","form":"comprimidos"},"celecoxib_100_mg_capsulas":{"name":"Celecoxib","mg":"100 mg","pack":"cápsulas","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinflamatorios y relajantes","form":"cápsulas"},"celecoxib_200_mg_capsulas":{"name":"Celecoxib","mg":"200 mg","pack":"cápsulas","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinflamatorios y relajantes","form":"cápsulas"},"etoricoxib_60_mg_comprimidos":{"name":"Etoricoxib","mg":"60 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinflamatorios y relajantes","form":"comprimidos"},"etoricoxib_90_mg_comprimidos":{"name":"Etoricoxib","mg":"90 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinflamatorios y relajantes","form":"comprimidos"},"etoricoxib_120_mg_comprimidos":{"name":"Etoricoxib","mg":"120 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinflamatorios y relajantes","form":"comprimidos"},"meloxicam_7_5_mg_comprimidos":{"name":"Meloxicam","mg":"7,5 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinflamatorios y relajantes","form":"comprimidos"},"meloxicam_15_mg_comprimidos":{"name":"Meloxicam","mg":"15 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinflamatorios y relajantes","form":"comprimidos"},"diclofenaco_sodico_50_mg_comprimidos":{"name":"Diclofenaco sódico","mg":"50 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinflamatorios y relajantes","form":"comprimidos"},"diclofenaco_sodico_100_mg_lp_comprimidos_lp":{"name":"Diclofenaco sódico","mg":"100 mg LP","pack":"comprimidos LP","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinflamatorios y relajantes","form":"comprimidos LP"},"ciclobenzaprina_5_mg_comprimidos":{"name":"Ciclobenzaprina","mg":"5 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinflamatorios y relajantes","form":"comprimidos"},"ciclobenzaprina_10_mg_comprimidos":{"name":"Ciclobenzaprina","mg":"10 mg","pack":"comprimidos","kind":"SIMPLE","stock":0,"book":false,"stockControl":false,"group":"Antiinflamatorios y relajantes","form":"comprimidos"},"clonazepam1":{"name":"Clonazepam","mg":"1 mg","pack":"30 comprimidos","kind":"RETENIDA","stock":10,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos"},"clotiazepam5":{"name":"Clotiazepam","mg":"5 mg","pack":"30 comprimidos","kind":"RETENIDA","stock":12,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos"},"diazepam10":{"name":"Diazepam","mg":"10 mg","pack":"30 comprimidos","kind":"RETENIDA","stock":9,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos"},"alprazolam05":{"name":"Alprazolam","mg":"0,5 mg","pack":"30 comprimidos","kind":"RETENIDA","stock":12,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos"},"alprazolam1":{"name":"Alprazolam","mg":"1 mg","pack":"30 comprimidos","kind":"RETENIDA","stock":8,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos"},"zolpidem5":{"name":"Zolpidem","mg":"5 mg","pack":"30 comprimidos","kind":"RETENIDA","stock":8,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos"},"zolpidem10":{"name":"Zolpidem","mg":"10 mg","pack":"30 comprimidos","kind":"RETENIDA","stock":12,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos"},"zolpidem625":{"name":"Zolpidem","mg":"6,25 mg LP","pack":"30 comprimidos de liberación prolongada","kind":"RETENIDA","stock":10,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos LP"},"zolpidem125":{"name":"Zolpidem","mg":"12,5 mg LP","pack":"30 comprimidos de liberación prolongada","kind":"RETENIDA","stock":7,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos LP"},"lorazepam2":{"name":"Lorazepam","mg":"2 mg","pack":"30 comprimidos","kind":"RETENIDA","stock":9,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos"},"ketazolam30":{"name":"Ketazolam","mg":"30 mg","pack":"20 cápsulas","kind":"RETENIDA","stock":8,"book":true,"stockControl":true,"group":"Control legal","form":"cápsulas"},"buprenorfina5":{"name":"Buprenorfina","mg":"5 mcg/h","pack":"4 parches transdérmicos","kind":"RETENIDA","stock":6,"book":true,"stockControl":true,"group":"Control legal","form":"parches transdérmicos"},"buprenorfina10":{"name":"Buprenorfina","mg":"10 mcg/h","pack":"4 parches transdérmicos","kind":"RETENIDA","stock":7,"book":true,"stockControl":true,"group":"Control legal","form":"parches transdérmicos"},"buprenorfina35":{"name":"Buprenorfina","mg":"35 mcg/h","pack":"4 parches transdérmicos","kind":"RETENIDA","stock":5,"book":true,"stockControl":true,"group":"Control legal","form":"parches transdérmicos"},"fentermina1875":{"name":"Fentermina","mg":"18,75 mg","pack":"30 cápsulas","kind":"CHEQUE","stock":11,"book":true,"stockControl":true,"group":"Control legal","form":"cápsulas"},"fentermina375":{"name":"Fentermina","mg":"37,5 mg","pack":"30 cápsulas","kind":"CHEQUE","stock":9,"book":true,"stockControl":true,"group":"Control legal","form":"cápsulas"},"metilfenidato20":{"name":"Metilfenidato","mg":"20 mg","pack":"30 comprimidos","kind":"CHEQUE","stock":10,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos"},"metilfenidato36":{"name":"Metilfenidato","mg":"36 mg LP","pack":"30 comprimidos de liberación prolongada","kind":"CHEQUE","stock":10,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos LP"},"metilfenidato54":{"name":"Metilfenidato","mg":"54 mg LP","pack":"30 comprimidos de liberación prolongada","kind":"CHEQUE","stock":9,"book":true,"stockControl":true,"group":"Control legal","form":"comprimidos LP"},"lisdexanfetamina20":{"name":"Lisdexanfetamina","mg":"20 mg","pack":"30 cápsulas","kind":"CHEQUE","stock":9,"book":true,"stockControl":true,"group":"Control legal","form":"cápsulas"},"lisdexanfetamina30":{"name":"Lisdexanfetamina","mg":"30 mg","pack":"30 cápsulas","kind":"CHEQUE","stock":9,"book":true,"stockControl":true,"group":"Control legal","form":"cápsulas"},"lisdexanfetamina50":{"name":"Lisdexanfetamina","mg":"50 mg","pack":"30 cápsulas","kind":"CHEQUE","stock":9,"book":true,"stockControl":true,"group":"Control legal","form":"cápsulas"},"lisdexanfetamina70":{"name":"Lisdexanfetamina","mg":"70 mg","pack":"30 cápsulas","kind":"CHEQUE","stock":6,"book":true,"stockControl":true,"group":"Control legal","form":"cápsulas"}};
// Número de Registro (ficticio) de cada presentación de receta cheque, con el formato F-NNNNN/AA.
const CHEQUE_REGISTRY={methylphenidate:'F-37591/23',metilfenidato20:'F-37592/23',metilfenidato36:'F-41208/21',metilfenidato54:'F-41209/21',fentermina1875:'F-29814/19',fentermina375:'F-29815/19',lisdexanfetamina20:'F-52346/24',lisdexanfetamina30:'F-52347/24',lisdexanfetamina50:'F-52348/24',lisdexanfetamina70:'F-52349/24'};
for(const [id,reg] of Object.entries(CHEQUE_REGISTRY))if(DRUGS[id])DRUGS[id].reg=reg;
const rxRegistryShown=p=>p?.rxReg||DRUGS[p?.drug]?.reg||'';
const drugRegLine=p=>rxRegistryShown(p)?`Nº de Registro: ${rxRegistryShown(p)}`:'';
// Número de registro errado en la receta: se compara con el del catálogo del manual.
function registryMismatch(p){const r=DRUGS[p?.drug]?.reg;return Boolean(r&&p.rxReg&&p.rxReg!==r)}
function wrongRegistry(id){const r=DRUGS[id].reg,others=Object.values(CHEQUE_REGISTRY).filter(x=>x!==r);if(Math.random()<0.5)return others[Math.floor(Math.random()*others.length)];const m=/^F-(\d{5})\/(\d{2})$/.exec(r);const i=Math.floor(Math.random()*5);const d=String(m[1]);const nd=String((Number(d[i])+1+Math.floor(Math.random()*8))%10);return 'F-'+d.slice(0,i)+nd+d.slice(i+1)+'/'+m[2]}
// Condición documental por presentación para los casos de esta ficción.
// RETENIDA_COMUN se archiva tras dispensar, pero NO crea folios de libros especiales.
const RETAINED_COMMON_NAMES=new Set(['Amoxicilina','Amoxicilina + ácido clavulánico','Cefadroxilo','Azitromicina','Claritromicina','Ciprofloxacino','Doxiciclina','Nitrofurantoína','Metronidazol']);
for(const [key, d] of Object.entries(DRUGS)){
 if(RETAINED_COMMON_NAMES.has(d.name)) {d.kind='RETENIDA_COMUN';d.book=false;d.stockControl=false;}
}
const ADDITIONAL_RETAINED={
 'prednisona_5': ['Prednisona','5 mg','comprimidos','Corticoides'],
 'prednisona_20': ['Prednisona','20 mg','comprimidos','Corticoides'],
 'dexametasona_4': ['Dexametasona','4 mg','comprimidos','Corticoides'],
 'fluconazol_150': ['Fluconazol','150 mg','cápsulas','Antifúngicos'],
 'itraconazol_100': ['Itraconazol','100 mg','cápsulas','Antifúngicos'],
 'terbinafina_250': ['Terbinafina','250 mg','comprimidos','Antifúngicos'],
 'albendazol_400': ['Albendazol','400 mg','comprimidos','Antiparasitarios'],
 'mebendazol_100': ['Mebendazol','100 mg','comprimidos','Antiparasitarios']
};
for(const [key,[name,mg,pack,group]] of Object.entries(ADDITIONAL_RETAINED)){
 DRUGS[key]={name,mg,pack,kind:'RETENIDA_COMUN',stock:0,book:false,stockControl:false,group,form:pack};
}
// Fenbendazol 25 %: receta blanca (simple), exclusivo de Chemy. Stock 1, nunca se pide ni sale en sorteos de otros pacientes.
DRUGS.fenbendazol25={name:'Fenbendazol',mg:'25 %',pack:'sobres',kind:'SIMPLE',stock:1,book:false,stockControl:false,group:'Antiparasitarios',form:'sobres',exclusive:true};
const CONTROLLED_IDS=Object.keys(DRUGS).filter(id=>DRUGS[id].book);
const CHEQUE_IDS=CONTROLLED_IDS.filter(id=>DRUGS[id].kind==='CHEQUE');
const RETENIDA_IDS=CONTROLLED_IDS.filter(id=>DRUGS[id].kind==='RETENIDA');
const SIMPLE_IDS=Object.keys(DRUGS).filter(id=>!DRUGS[id].book&&!DRUGS[id].exclusive);
const GROUP_NAMES=["Cardiovasculares","Endocrinos y metabólicos","Antiinfecciosos","Corticoides","Antifúngicos","Antiparasitarios","Gastrointestinales y respiratorios","Antiinflamatorios y relajantes","Salud mental"];

const drugName=id=>DRUGS[id]?`${DRUGS[id].name} ${DRUGS[id].mg}`:id;
const ILLEGAL_PRACTICE_REASON='Ejercicio ilegal de la profesión médica';
const DOCTOR_REGISTRY={
 'Dra. Francisca Lagos':{rut:'30.123.456-7',signature:'F. Lagos',title:'Médica Cirujana'},
 'Dr. Héctor Silva':{rut:'31.234.567-8',signature:'H. Silva',title:'Médico Cirujano'},
 'Dra. Verónica Cruz':{rut:'32.345.678-9',signature:'V. Cruz',title:'Médica Cirujana'},
 'Dr. Nicolás Paredes':{rut:'33.456.789-5',signature:'N. Paredes',title:'Médico Cirujano'},
 'Dra. Elisa Molina':{rut:'34.567.890-1',signature:'E. Molina',title:'Médica Cirujana'},
 'Dr. Ernesto Valdés':{rut:'35.678.901-2',signature:'E. Valdes',title:'Médico Cirujano'},
 'Dr. Ysela Creyó':{rut:'36.789.012-3',signature:'Y. Creyo',title:'Médico Cirujano',canPrescribe:true},
 'TM. Mauricio Fuentes':{rut:'37.321.778-4',signature:'M. Fuentes',title:'Tecnólogo Médico',canPrescribe:false},
 'Pod. Camila Navarro':{rut:'38.610.216-5',signature:'C. Navarro',title:'Podóloga',canPrescribe:false},
 'Dra. Fixa Pilar':{rut:'39.481.206-4',signature:'F. Pilar',title:'Médica Veterinaria',canPrescribe:true}
};
function normalizePrescriberRut(rut){
 return String(rut||'').trim().toUpperCase().replace(/[.\s-]/g,'');
}
function substituteTechnologist(day){
 const first=['Álvaro','Gabriel','Javier','Rodrigo','Víctor','Matías'];
 const surnames=['Rojas','Leiva','Reyes','Soto','Bravo','Silva','Muñoz','Lara'];
 const firstName=first[day%first.length];
 const surname=surnames[Math.floor(day/first.length)%surnames.length];
 const secondSurname=surnames[1+Math.floor(day/(first.length*surnames.length))% (surnames.length-1)];
 return {
  name:`TM. ${firstName} ${surname} ${secondSurname}`,
  rut:rutFmt(39000000+day),signature:`${firstName[0]}. ${surname}`,title:'Tecnólogo Médico',canPrescribe:false
 };
}
function findPrescriberRecord(p){
 if(Object.prototype.hasOwnProperty.call(DOCTOR_REGISTRY,p.prescriber))return DOCTOR_REGISTRY[p.prescriber];
 if(p.kind!=='tmFraud'||!Number.isInteger(p.tmIssuerDay))return null;
 const entry=substituteTechnologist(p.tmIssuerDay);
 return p.prescriber===entry.name?entry:null;
}
function unauthorizedPrescriberCase(p){return p.kind==='tmFraud'||p.kind==='podiatristRx'}
function lookupPrescriber(p){
 const name=p.prescriber;
 const hasName=Boolean(name&&name!=='—');
 const registered=hasName?findPrescriberRecord(p):null;
 const declared=normalizePrescriberRut(p.prescriberRut);
 const hasRut=Boolean(declared&&declared!=='NOINFORMADO'&&declared!=='PENDIENTE');
 if(!hasName)return {status:'incomplete',registered};
 if(!registered)return {status:'unknown',registered};
 if(!hasRut)return {status:'incomplete',registered};
 const expected=normalizePrescriberRut(registered.rut);
 if(declared===expected)return {status:'match',registered};
 const belongsToOther=Object.values(DOCTOR_REGISTRY).some(doctor=>normalizePrescriberRut(doctor.rut)===declared);
 const oneWrongCharacter=declared.length===expected.length&&/^\d+[\dK]$/.test(declared)
  && [...declared].filter((char,index)=>char!==expected[index]).length===1;
 return {status:!belongsToOther&&oneWrongCharacter?'typo':'mismatch',registered};
}
function prescriberIdentityIsFalse(status){
 return status==='unknown'||status==='mismatch';
}
function doctorInfo(name){return DOCTOR_REGISTRY[name]||{rut:'No informado',signature:'M. Salinas',title:'Médico Cirujano'}}
function fictionalSignature(p){return doctorInfo(p?.prescriber).signature}
const SIGNATURE_IDS={
 'Dra. Francisca Lagos':0,'Dr. Héctor Silva':1,'Dra. Verónica Cruz':2,
 'Dr. Nicolás Paredes':3,'Dra. Elisa Molina':4,'Dr. Ernesto Valdés':5,
 'Dr. Ysela Creyó':6,'TM. Mauricio Fuentes':7,'Dr. Simón Araya':8,'Dra. Fixa Pilar':9
};
function signatureArtwork(name,altered=false){
 const id=SIGNATURE_IDS[name];
 const nameToShow=escapeText(name?.replace(/^(?:TM|Pod)\.\s*/,'')||'Firma no encontrada');
 if(id===undefined)return '<span class="signature-notfound">No existe muestra de firma del prescriptor</span>';
 const src='assets/signatures/sig_'+String(id).padStart(2,'0')+(altered?'_forged':'')+'.png';
 return `<img class="signature-png" src="${assetUrl(src)}" alt="Muestra de firma ficticia de ${nameToShow}" draggable="false">`;
}
function prescriptionSignatureArtwork(p){
 if(unauthorizedPrescriberCase(p)&&SIGNATURE_IDS[p.prescriber]===undefined){
  return `<span class="ink-sign">${escapeText(p.signature)}</span>`;
 }
 if(p.kind!=='sicolasMuros')return signatureArtwork(p.prescriber,!validPrescriptionSignature(p));
 return `<svg class="signature-png" viewBox="0 0 192 72" role="img" aria-label="Firma ficticia de René Puente" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#273760" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
 <path d="M14 49Q31 40 41 12C43 6 29 14 20 22Q43 9 51 18C59 26 42 36 30 33Q35 40 51 46M59 48l1 1"/>
 <path d="M63 49Q79 37 86 15C89 6 71 15 65 22Q93 8 103 18C108 25 95 35 82 32M98 43q13-18 11-10t-1 10q4 5 11-7l-2 7q2 5 11-4q6-10 9-6q3 4-11 6q-1 10 11 4l10-11-1 10 10-8q5-2 1 7q3 5 12-5q7-8 8-18m-17 14 23-6"/>
 <path d="M31 55Q114 45 180 54Q138 55 125 63" stroke-width="1.4"/>
 </g></svg>`;
}
function validPrescriptionSignature(p){
 if(p.kind==='stolen')return (p.stolenFolioDefect??'signature')!=='signature';
 return p.kind!=='signatureFraud';
}
function isStolenPrescription(p){
 const folio=Number(p.folio);
 return Number.isInteger(folio)&&folio>=3450&&folio<=3499;
}
function sisPrescriptionStatus(p){
 const result=lookupPrescriber(p);
 if(result.registered&&!prescriberIdentityIsFalse(result.status)&&!validPrescriptionSignature(p)){
  return {...result,status:'signature-mismatch',identityMatches:result.status==='match'};
 }
 return result;
}
function isPaperEvent(p){return p&&['chinese','giftPaper','clubNocturno','tarotera','abuelo'].includes(p.kind)}
function ageFromBirth(date){
 const birth=parseCalendarDate(date);
 if(!birth)return null;
 const today=new Date(Date.UTC(2026,10,15+(game?.day||1)));
 if(!Number.isFinite(birth.getTime())||birth>today)return null;
 let years=today.getUTCFullYear()-birth.getUTCFullYear();
 if(today.getUTCMonth()<birth.getUTCMonth() || (today.getUTCMonth()===birth.getUTCMonth() && today.getUTCDate()<birth.getUTCDate()))years--;
 return years;
}

const pesos=n=>`${n<0?'−':''}$${Math.abs(Math.round(n)).toLocaleString('es-CL')}`;
const z=n=>String(n).padStart(2,'0');
const dateOf=day=>{let d=new Date(Date.UTC(2026,10,15+day));return `${z(d.getUTCDate())}/${z(d.getUTCMonth()+1)}/${d.getUTCFullYear()}`};
const escapeText=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function rutDv(n){let sum=0,k=2;for(const char of String(n).split('').reverse()){sum+=Number(char)*k;k=k===7?2:k+1}let r=11-(sum%11);return r===11?'0':r===10?'K':String(r)}
function rutFmt(n,dv=null){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,'.')+'-'+(dv===null?rutDv(n):dv)}
function randomRut(){return 30000000+Math.floor(Math.random()*8000000)}
function typoRut(n){let a=String(n).split('');let i=Math.min(5,a.length-2);a[i]=String((Number(a[i])+1)%10);return a.join('').replace(/\B(?=(\d{3})+(?!\d))/g,'.')+'-'+rutDv(n)}
// Retratos pixelados procedurales, generados por semilla y persistentes en los documentos.
const FIRST_NAMES_F=['Camila','Valentina','Marcela','Florencia','Daniela','Constanza','Carolina','Paula','Andrea','Fernanda','Isabel','María José','Francisca','Laura','Renata','Javiera','Paz','Macarena','Elena','Patricia','Carmen','Mónica','Tamara','Verónica'];
const FIRST_NAMES_M=['Diego','Felipe','Matías','Sebastián','Andrés','Rodrigo','Gabriel','Ignacio','Esteban','Joaquín','Ricardo','Francisco','Martín','Alonso','Nicolás','Pedro','Roberto','Héctor','Luis','Vicente','Cristóbal','Manuel','Benjamín','Patricio'];
const LAST_NAMES=['Rojas','Muñoz','Pérez','Soto','Contreras','Silva','Martínez','Sepúlveda','Morales','Rodríguez','Lagos','Vera','Fuentes','Aravena','Alarcón','González','Castillo','Méndez','Paredes','Véliz','Sandoval','Díaz','Salinas','Jara','Valdés','Navarro','Reyes','Leiva','Carrasco','Torres','Peña','Gutiérrez','Cárdenas','Araya','Molina','Pino'];
// Distribución de aparición de identidades por nacionalidad. No determina el aspecto físico.
const FOREIGN_PATIENT_CHANCE=0.20;
const FOREIGN_NATIONALITY_WEIGHTS=[['VE',10],['HT',10],['AR',10],['PE',10],['CN',5],['IT',1],['DE',0.5],['BO',1]];
const NATIONALITY_LABELS={
 CL:['CHILENO','CHILENA'],VE:['VENEZOLANO','VENEZOLANA'],HT:['HAITIANO','HAITIANA'],
 AR:['ARGENTINO','ARGENTINA'],PE:['PERUANO','PERUANA'],CN:['CHINO','CHINA'],
 IT:['ITALIANO','ITALIANA'],DE:['ALEMÁN','ALEMANA'],BO:['BOLIVIANO','BOLIVIANA']
};
const INTERNATIONAL_NAMES={
 VE:{m:['José','Alejandro','Andrés','Gabriel','Daniel','Miguel','Ángel','Leonardo','Carlos','Rafael'],f:['Génesis','Yulimar','Mariana','Daniela','Valeria','Camila','Andrea','Alejandra','Gabriela','Isabella'],last:['Hernández','Rodríguez','Márquez','Mendoza','Suárez','Rangel','Torrealba','Bolívar','González','Guevara']},
 HT:{m:['Jean','Emmanuel','Frantz','Michel','Wilner','Samuel','André','Patrick','Stevenson','Pierre'],f:['Marie','Nadège','Mireille','Carline','Stéphanie','Nathalie','Rose','Anaïse','Claudine','Esther'],last:['Joseph','Baptiste','Augustin','Jean','Louis','François','Pierre','Etienne','Charles','Desir']},
 AR:{m:['Lautaro','Tomás','Facundo','Santiago','Nicolás','Bruno','Joaquín','Martín','Agustín','Franco'],f:['Milagros','Agustina','Lucía','Florencia','Micaela','Julieta','Martina','Valentina','Pilar','Catalina'],last:['Fernández','Pereyra','Gómez','Sosa','Russo','Varela','Domínguez','López','Suárez','Álvarez']},
 PE:{m:['César','José','Luis','Ricardo','Jorge','Alonso','Kevin','Renato','Erick','Jean'],f:['Milagros','Fátima','Rosa','Marisol','Karla','Diana','Valeria','Rocío','Jimena','Lucía'],last:['Quispe','Huamán','Condori','Salazar','Mamani','Flores','Paredes','Chávez','Ramos','Valdivia']},
 CN:{m:['Wei','Ming','Jun','Tao','Jian','Hao','Cheng','Bo','Lei','Sheng'],f:['Mei','Yan','Jing','Li','Yue','Xia','Lin','Hui','Fang','Lan'],last:['Li','Wang','Zhang','Chen','Liu','Zhou','Lin','Huang','Xu','Wu']},
 IT:{m:['Marco','Luca','Matteo','Andrea','Giuseppe','Lorenzo','Davide','Francesco','Alessandro','Pietro'],f:['Giulia','Sofia','Chiara','Francesca','Alessia','Martina','Elena','Giorgia','Sara','Beatrice'],last:['Rossi','Bianchi','Ferrari','Romano','Ricci','Moretti','Greco','Colombo','Rinaldi','Costa']},
 BO:{m:['Wálter','Edwin','Freddy','Limbert','Marcelo','Remberto','Cristian','Gróver','Rolando','Ayrton'],f:['Roxana','Nilda','Maribel','Jhenny','Karina','Delia','Rosmery','Ximena','Lourdes','Brenda'],last:['Mamani','Choque','Quispe','Condori','Flores','Rojas','Vargas','Gutiérrez','Apaza','Colque']},
 DE:{m:['Lukas','Jonas','Felix','Leon','Maximilian','Paul','Johannes','Moritz','Lennart','Florian'],f:['Anna','Lena','Julia','Clara','Mia','Lea','Sophia','Hanna','Johanna','Emilia'],last:['Müller','Schneider','Fischer','Weber','Becker','Hoffmann','Schäfer','Koch','Bauer','Wagner']}
};
const INTERNATIONAL_SPRITES={female:[0,3,6,9],male:[1,2,5]};
function chooseNationality(weights=FOREIGN_NATIONALITY_WEIGHTS){
 const draw=Math.random();
 if(draw>=FOREIGN_PATIENT_CHANCE)return 'CL';
 const total=weights.reduce((sum,[,weight])=>sum+weight,0);
 let roll=draw/FOREIGN_PATIENT_CHANCE*total;
 for(const [code,weight] of weights){
  if(roll<weight)return code;
  roll-=weight;
 }
 return weights[weights.length-1][0];
}
function countryLabel(p){const pair=NATIONALITY_LABELS[p?.nationalityCode||'CL']||NATIONALITY_LABELS.CL;return pair[p?.face==='female'?1:0]}
function internationalName(code,face,usedNames){
 const pool=INTERNATIONAL_NAMES[code];if(!pool)return null;
 const first=face==='female'?pool.f:pool.m;
 for(let k=0;k<180;k++){
  const f=first[Math.floor(Math.random()*first.length)],last=pool.last[Math.floor(Math.random()*pool.last.length)];
  const display=code==='CN'?`${last} ${f}`:`${f} ${last}`;
  if(!usedNames.includes(display))return {display,first:f,last};
 }
 const serial=game?.day||1;let f=first[serial%first.length],last=pool.last[(serial+3)%pool.last.length];
 return {display:`${code==='CN'?last+' '+f:f+' '+last} ${serial}`,first:f,last};
}
const CHINESE_PATIENT_NAMES=['Li Wei','Wang Ming','Zhang Lei','Chen Hui','Liu Yan','Zhou Jun','Lin Mei','Huang Tao','Xu Jian','Wu Wen'];
const VISUAL_POOL_SIZE=160; // gender-separated slots among 320 sprite resources
function variedPatientName(gender,defaultName,kind){
 if(kind==='specialCarlos')return 'Carlos Neira Ibacache';
 const used=game.usedIdentityNames||[];
 if(kind==='chinese'){
  const available=CHINESE_PATIENT_NAMES.filter(x=>!used.includes(x));
  if(available.length)return available[Math.floor(Math.random()*available.length)];
 }
 const first=gender==='male'?FIRST_NAMES_M:FIRST_NAMES_F;
 const names=[];
 for(let a=0;a<first.length;a++)for(let b=0;b<LAST_NAMES.length;b++)names.push(first[a]+' '+LAST_NAMES[b]);
 const candidates=names.filter(x=>!used.includes(x));
 if(!candidates.length)return `${defaultName} #${game.day}-${game.patients?.length||0}`;
 return candidates[Math.floor(Math.random()*candidates.length)];
}
const CAST600=((list)=>{const out=[];for(const r of list)out[r.id]=r;return out})([{"id":600,"country":"CL","sex":"M","name":"Joaquín Mella Saavedra","first":"Joaquín","surname":"Mella","age":27,"birthDate":"12/03/1999","noVariants":true},{"id":601,"country":"CL","sex":"F","name":"Francisca Millaqueo Vargas","first":"Francisca","surname":"Millaqueo","age":38,"birthDate":"22/07/1988","noVariants":true},{"id":602,"country":"CL","sex":"M","name":"Solomeo Paredes Altas","first":"Solomeo","surname":"Paredes","age":79,"birthDate":"05/05/1947","noVariants":true},{"id":603,"country":"CL","sex":"F","name":"Hortensia Barrientos Lagos","first":"Hortensia","surname":"Barrientos","age":73,"birthDate":"18/09/1953","noVariants":true},{"id":604,"country":"CL","sex":"M","name":"Rodrigo Zúñiga Cárcamo","first":"Rodrigo","surname":"Zúñiga","age":47,"birthDate":"03/02/1979","noVariants":true},{"id":605,"country":"CL","sex":"F","name":"Catalina Antilef Pizarro","first":"Catalina","surname":"Antilef","age":23,"birthDate":"27/08/2003","noVariants":true},{"id":606,"country":"CL","sex":"F","name":"Marcela Huenchumilla Reyes","first":"Marcela","surname":"Huenchumilla","age":44,"birthDate":"14/06/1982","noVariants":true},{"id":607,"country":"CL","sex":"M","name":"Eliseo Cárdenas Maldonado","first":"Eliseo","surname":"Cárdenas","age":63,"birthDate":"09/01/1963","noVariants":true},{"id":608,"country":"CL","sex":"M","name":"Segundo Aravena Navarrete","first":"Segundo","surname":"Aravena","age":55,"birthDate":"30/10/1971","noVariants":true},{"id":609,"country":"CL","sex":"F","name":"Gladys Carrasco Venegas","first":"Gladys","surname":"Carrasco","age":58,"birthDate":"11/04/1968","noVariants":true},{"id":610,"country":"CL","sex":"M","name":"Aurelio Bahamondes Rojas","first":"Aurelio","surname":"Bahamondes","age":72,"birthDate":"06/08/1954","noVariants":true},{"id":611,"country":"CL","sex":"M","name":"Vicente Araya Lillo","first":"Vicente","surname":"Araya","age":24,"birthDate":"14/05/2002","noVariants":true},{"id":612,"country":"CL","sex":"F","name":"Berta Alvarado Quinteros","first":"Berta","surname":"Alvarado","age":66,"birthDate":"23/02/1960","noVariants":true},{"id":613,"country":"CL","sex":"F","name":"Constanza Painemil Ibarra","first":"Constanza","surname":"Painemil","age":26,"birthDate":"08/10/2000","noVariants":true},{"id":614,"country":"CL","sex":"F","name":"Verónica Sepúlveda Lira","first":"Verónica","surname":"Sepúlveda","age":48,"birthDate":"19/06/1978","noVariants":true},{"id":615,"country":"CL","sex":"M","name":"Hernán Valdebenito Cortés","first":"Hernán","surname":"Valdebenito","age":64,"birthDate":"17/03/1962","noVariants":true},{"id":616,"country":"CL","sex":"F","name":"Fernanda Lincoleo Bravo","first":"Fernanda","surname":"Lincoleo","age":29,"birthDate":"25/09/1997","noVariants":true},{"id":617,"country":"CL","sex":"F","name":"Paola Retamal Escobar","first":"Paola","surname":"Retamal","age":41,"birthDate":"12/01/1985","noVariants":true},{"id":618,"country":"CL","sex":"M","name":"Cristóbal Urrutia Mansilla","first":"Cristóbal","surname":"Urrutia","age":33,"birthDate":"07/07/1993","noVariants":true},{"id":619,"country":"CL","sex":"M","name":"Mauricio Catrileo Fuentealba","first":"Mauricio","surname":"Catrileo","age":41,"birthDate":"30/03/1985","noVariants":true},{"id":620,"country":"CL","sex":"M","name":"Brayan Salazar Muñoz","first":"Brayan","surname":"Salazar","age":26,"birthDate":"21/04/2000","noVariants":true},{"id":621,"country":"CL","sex":"M","name":"Anselmo Quilodrán Pinto","first":"Anselmo","surname":"Quilodrán","age":76,"birthDate":"15/10/1950","noVariants":true},{"id":622,"country":"CL","sex":"F","name":"Mirta Cabrera Tobar","first":"Mirta","surname":"Cabrera","age":46,"birthDate":"04/11/1980","noVariants":true},{"id":623,"country":"CL","sex":"F","name":"Ximena Larraín Vergara","first":"Ximena","surname":"Larraín","age":67,"birthDate":"28/08/1959","noVariants":true},{"id":624,"country":"CL","sex":"F","name":"Javiera Millanao Soto","first":"Javiera","surname":"Millanao","age":28,"birthDate":"09/02/1998","noVariants":true},{"id":625,"country":"CL","sex":"F","name":"Soledad Navarro Paillalef","first":"Soledad","surname":"Navarro","age":54,"birthDate":"03/09/1972","noVariants":true},{"id":626,"country":"CL","sex":"M","name":"Óscar Hidalgo Campos","first":"Óscar","surname":"Hidalgo","age":46,"birthDate":"18/05/1980","noVariants":true,"special":true},{"id":627,"country":"CL","sex":"M","name":"Rafael Quintul Núñez","first":"Rafael","surname":"Quintul","age":31,"birthDate":"11/06/1995","noVariants":true},{"id":628,"country":"CL","sex":"F","name":"Elba Rivas Gallardo","first":"Elba","surname":"Rivas","age":58,"birthDate":"29/01/1968","noVariants":true},{"id":629,"country":"CL","sex":"M","name":"Ricardo Ossandón Beltrán","first":"Ricardo","surname":"Ossandón","age":57,"birthDate":"22/04/1969","noVariants":true},{"id":630,"country":"CL","sex":"F","name":"Eulalia Cifuentes Marín","first":"Eulalia","surname":"Cifuentes","age":84,"birthDate":"09/03/1942","noVariants":true},{"id":631,"country":"CL","sex":"F","name":"Rosario Calfunao Torres","first":"Rosario","surname":"Calfunao","age":52,"birthDate":"16/07/1974","noVariants":true},{"id":632,"country":"CL","sex":"M","name":"Sebastián Fuenzalida Pavez","first":"Sebastián","surname":"Fuenzalida","age":38,"birthDate":"27/02/1988","noVariants":true},{"id":633,"country":"CL","sex":"M","name":"Diego Tapia Sandoval","first":"Diego","surname":"Tapia","age":23,"birthDate":"05/09/2003","noVariants":true},{"id":634,"country":"CL","sex":"M","name":"Nicolás Valenzuela Brito","first":"Nicolás","surname":"Valenzuela","age":34,"birthDate":"30/10/1992","noVariants":true},{"id":635,"country":"CL","sex":"F","name":"Antonia Quezada Lefián","first":"Antonia","surname":"Quezada","age":23,"birthDate":"12/04/2003","noVariants":true},{"id":636,"country":"CL","sex":"F","name":"Ruth Mondaca Saldívar","first":"Ruth","surname":"Mondaca","age":49,"birthDate":"08/02/1977","noVariants":true},{"id":637,"country":"CL","sex":"M","name":"Armando Opazo Sepúlveda","first":"Armando","surname":"Opazo","age":79,"birthDate":"21/06/1947","noVariants":true},{"id":638,"country":"CL","sex":"F","name":"Lorena Escalona Pardo","first":"Lorena","surname":"Escalona","age":53,"birthDate":"17/05/1973","noVariants":true},{"id":639,"country":"CL","sex":"M","name":"Heriberto Lagos Vidal","first":"Heriberto","surname":"Lagos","age":58,"birthDate":"14/08/1968","noVariants":true},{"id":640,"country":"CL","sex":"F","name":"Yasna Carrasco Opazo","first":"Yasna","surname":"Carrasco","age":44,"birthDate":"03/12/1982","noVariants":true},{"id":641,"country":"CL","sex":"M","name":"Hernán Zúñiga Pizarro","first":"Hernán","surname":"Zúñiga","age":65,"birthDate":"09/03/1961","noVariants":true,"special":true},{"id":642,"country":"CL","sex":"M","name":"Gustavo Barría Millar","first":"Gustavo","surname":"Barría","age":52,"birthDate":"23/11/1974","noVariants":true},{"id":643,"country":"CL","sex":"F","name":"Camila Araneda Ibarra","first":"Camila","surname":"Araneda","age":42,"birthDate":"07/10/1984","noVariants":true},{"id":644,"country":"CL","sex":"M","name":"Segundo Villablanca Toro","first":"Segundo","surname":"Villablanca","age":62,"birthDate":"12/01/1964","noVariants":true},{"id":645,"country":"CL","sex":"F","name":"Gladys Montecinos Rojas","first":"Gladys","surname":"Montecinos","age":66,"birthDate":"25/05/1960","noVariants":true},{"id":646,"country":"CL","sex":"F","name":"Javiera Soto Millaray","first":"Javiera","surname":"Soto","age":30,"birthDate":"19/08/1996","noVariants":true},{"id":647,"country":"CL","sex":"M","name":"Benjamín Hidalgo Carrasco","first":"Benjamín","surname":"Hidalgo","age":17,"birthDate":"09/09/2009","noVariants":true,"minorOnly":true},{"id":648,"country":"CL","sex":"F","name":"Clarisa Antilef Rojas","first":"Clarisa","surname":"Antilef","age":62,"birthDate":"14/04/1964","noVariants":true,"special":true},{"id":649,"country":"CL","sex":"M","name":"Eliseo Quintrel Sandoval","first":"Eliseo","surname":"Quintrel","age":82,"birthDate":"03/10/1944","noVariants":true,"special":true},{"id":650,"country":"CL","sex":"M","name":"Aurelio Zúñiga Painemal","first":"Aurelio","surname":"Zúñiga","age":65,"birthDate":"01/01/1961","noVariants":true},{"id":651,"country":"CL","sex":"F","name":"Marcela Villalobos Ortúzar","first":"Marcela","surname":"Villalobos","age":47,"birthDate":"08/06/1979","noVariants":true},{"id":652,"country":"CL","sex":"M","name":"Cristóbal Henríquez Lira","first":"Cristóbal","surname":"Henríquez","age":23,"birthDate":"15/02/2003","noVariants":true},{"id":653,"country":"CL","sex":"F","name":"Gladys Aguilera Montecinos","first":"Gladys","surname":"Aguilera","age":68,"birthDate":"22/07/1958","noVariants":true},{"id":654,"country":"CL","sex":"M","name":"Rigoberto Cabrera Troncoso","first":"Rigoberto","surname":"Cabrera","age":38,"birthDate":"02/03/1988","noVariants":true},{"id":655,"country":"CL","sex":"F","name":"Antonella Figueroa Bravo","first":"Antonella","surname":"Figueroa","age":20,"birthDate":"09/08/2006","noVariants":true},{"id":656,"country":"CL","sex":"M","name":"Eugenio Barrientos Tolosa","first":"Eugenio","surname":"Barrientos","age":83,"birthDate":"16/04/1943","noVariants":true},{"id":657,"country":"CL","sex":"F","name":"Katherine Lobos Pizarro","first":"Katherine","surname":"Lobos","age":35,"birthDate":"23/09/1991","noVariants":true},{"id":658,"country":"CL","sex":"M","name":"Ernesto Vásquez Hidalgo","first":"Ernesto","surname":"Vásquez","age":56,"birthDate":"03/05/1970","noVariants":true},{"id":659,"country":"CL","sex":"F","name":"Nancy Maldonado Reveco","first":"Nancy","surname":"Maldonado","age":59,"birthDate":"10/01/1967","noVariants":true},{"id":660,"country":"CL","sex":"M","name":"Maximiliano Olivares Zamora","first":"Maximiliano","surname":"Olivares","age":25,"birthDate":"17/06/2001","noVariants":true},{"id":661,"country":"CL","sex":"F","name":"Constanza Elgueta Bustos","first":"Constanza","surname":"Elgueta","age":28,"birthDate":"24/02/1998","noVariants":true},{"id":662,"country":"CL","sex":"M","name":"Juan Carlos Contreras Pino","first":"Juan Carlos","surname":"Contreras","age":44,"birthDate":"04/07/1982","noVariants":true},{"id":663,"country":"CL","sex":"F","name":"Berta Riveros Cáceres","first":"Berta","surname":"Riveros","age":76,"birthDate":"11/03/1950","noVariants":true},{"id":664,"country":"CL","sex":"M","name":"Bastián Orellana Muñoz","first":"Bastián","surname":"Orellana","age":19,"birthDate":"18/08/2007","noVariants":true},{"id":665,"country":"CL","sex":"F","name":"Paola Escobar Fuentealba","first":"Paola","surname":"Escobar","age":42,"birthDate":"25/04/1984","noVariants":true},{"id":666,"country":"CL","sex":"M","name":"Hugo Valenzuela Cifuentes","first":"Hugo","surname":"Valenzuela","age":63,"birthDate":"05/09/1963","noVariants":true},{"id":667,"country":"CL","sex":"F","name":"Fernanda Jiménez Parra","first":"Fernanda","surname":"Jiménez","age":22,"birthDate":"12/05/2004","noVariants":true},{"id":668,"country":"CL","sex":"M","name":"Rodolfo Aedo Casanova","first":"Rodolfo","surname":"Aedo","age":49,"birthDate":"19/01/1977","noVariants":true},{"id":669,"country":"CL","sex":"F","name":"Valeska Naranjo Sáez","first":"Valeska","surname":"Naranjo","age":32,"birthDate":"26/06/1994","noVariants":true},{"id":670,"country":"CL","sex":"M","name":"Ismael Toledo Carvajal","first":"Ismael","surname":"Toledo","age":72,"birthDate":"06/02/1954","noVariants":true},{"id":671,"country":"CL","sex":"F","name":"Javiera Loyola Mansilla","first":"Javiera","surname":"Loyola","age":27,"birthDate":"13/07/1999","noVariants":true},{"id":672,"country":"CL","sex":"M","name":"Álvaro Bascuñán Ríos","first":"Álvaro","surname":"Bascuñán","age":34,"birthDate":"20/03/1992","noVariants":true},{"id":673,"country":"CL","sex":"F","name":"Ruth Mondaca Vidal","first":"Ruth","surname":"Mondaca","age":66,"birthDate":"27/08/1960","noVariants":true},{"id":674,"country":"CL","sex":"M","name":"Armando Tapia Ugarte","first":"Armando","surname":"Tapia","age":58,"birthDate":"07/04/1968","noVariants":true},{"id":675,"country":"CL","sex":"F","name":"Daniela Cárcamo Poblete","first":"Daniela","surname":"Cárcamo","age":39,"birthDate":"14/09/1987","noVariants":true},{"id":676,"country":"CL","sex":"M","name":"Pablo Millar Sanhueza","first":"Pablo","surname":"Millar","age":30,"birthDate":"21/05/1996","noVariants":true},{"id":677,"country":"CL","sex":"F","name":"Soledad Echeverría Lazo","first":"Soledad","surname":"Echeverría","age":54,"birthDate":"01/01/1972","noVariants":true},{"id":678,"country":"CL","sex":"M","name":"Oswaldo Cortés Zambrano","first":"Oswaldo","surname":"Cortés","age":45,"birthDate":"08/06/1981","noVariants":true},{"id":679,"country":"CL","sex":"F","name":"Eliana Gallardo Cornejo","first":"Eliana","surname":"Gallardo","age":81,"birthDate":"15/02/1945","noVariants":true},{"id":680,"country":"PE","sex":"M","name":"César Mendoza Quispe","first":"César","surname":"Mendoza","age":37,"birthDate":"22/07/1989","noVariants":true},{"id":681,"country":"BO","sex":"M","name":"Wálter Mamani Choque","first":"Wálter","surname":"Mamani","age":46,"birthDate":"02/03/1980","noVariants":true},{"id":682,"country":"IT","sex":"M","name":"Stefano Conti Ferretti","first":"Stefano","surname":"Conti","age":55,"birthDate":"09/08/1971","noVariants":true},{"id":683,"country":"AR","sex":"M","name":"Gonzalo Benítez Ocampo","first":"Gonzalo","surname":"Benítez","age":29,"birthDate":"16/04/1997","noVariants":true},{"id":684,"country":"CL","sex":"F","name":"Camila Zapata Rebolledo","first":"Camila","surname":"Zapata","age":24,"birthDate":"23/09/2002","noVariants":true},{"id":685,"country":"CL","sex":"M","name":"Osvaldo Pérez Guzmán","first":"Osvaldo","surname":"Pérez","age":69,"birthDate":"03/05/1957","noVariants":true},{"id":686,"country":"CL","sex":"F","name":"Mirta Cabezas Lagos","first":"Mirta","surname":"Cabezas","age":61,"birthDate":"10/01/1965","noVariants":true},{"id":687,"country":"CL","sex":"M","name":"Ignacio Bahamondes Arce","first":"Ignacio","surname":"Bahamondes","age":21,"birthDate":"17/06/2005","noVariants":true},{"id":688,"country":"CL","sex":"F","name":"Karen Yáñez Mardones","first":"Karen","surname":"Yáñez","age":33,"birthDate":"24/02/1993","noVariants":true},{"id":689,"country":"CL","sex":"F","name":"Lorena Sepúlveda Gatica","first":"Lorena","surname":"Sepúlveda","age":50,"birthDate":"04/07/1976","noVariants":true},{"id":690,"country":"BO","sex":"M","name":"Wálter Mamani Choque","first":"Wálter","surname":"Mamani","age":46,"birthDate":"02/03/1980","noVariants":true,"lookalikeOf":681},{"id":691,"country":"IT","sex":"M","name":"Stefano Conti Ferretti","first":"Stefano","surname":"Conti","age":55,"birthDate":"09/08/1971","noVariants":true,"lookalikeOf":682},{"id":692,"country":"CL","sex":"F","name":"Karen Yáñez Mardones","first":"Karen","surname":"Yáñez","age":33,"birthDate":"24/02/1993","noVariants":true,"lookalikeOf":688},{"id":693,"country":"CL","sex":"M","name":"Armando Tapia Ugarte","first":"Armando","surname":"Tapia","age":58,"birthDate":"07/04/1968","noVariants":true,"lookalikeOf":674},{"id":694,"country":"CL","sex":"M","name":"Oswaldo Cortés Zambrano","first":"Oswaldo","surname":"Cortés","age":45,"birthDate":"08/06/1981","noVariants":true,"lookalikeOf":678},{"id":695,"country":"CL","sex":"F","name":"Antonella Figueroa Bravo","first":"Antonella","surname":"Figueroa","age":20,"birthDate":"09/08/2006","noVariants":true,"lookalikeOf":655},{"id":696,"country":"CL","sex":"M","name":"Ernesto Vásquez Hidalgo","first":"Ernesto","surname":"Vásquez","age":56,"birthDate":"03/05/1970","noVariants":true,"lookalikeOf":658},{"id":697,"country":"AR","sex":"M","name":"Gonzalo Benítez Ocampo","first":"Gonzalo","surname":"Benítez","age":29,"birthDate":"16/04/1997","noVariants":true,"lookalikeOf":683},{"id":698,"country":"CL","sex":"F","name":"Eliana Gallardo Cornejo","first":"Eliana","surname":"Gallardo","age":81,"birthDate":"15/02/1945","noVariants":true,"lookalikeOf":679},{"id":699,"country":"CL","sex":"F","name":"Camila Zapata Rebolledo","first":"Camila","surname":"Zapata","age":24,"birthDate":"23/09/2002","noVariants":true,"lookalikeOf":684},{"id":700,"country":"CL","sex":"M","name":"Severino Catrileo Huenchuñir","first":"Severino","surname":"Catrileo","age":70,"birthDate":"01/01/1956","noVariants":true},{"id":701,"country":"CL","sex":"F","name":"Amalia Donoso Ibarra","first":"Amalia","surname":"Donoso","age":38,"birthDate":"08/06/1988","noVariants":true},{"id":702,"country":"CL","sex":"M","name":"Eduardo Bahamondes Salas","first":"Eduardo","surname":"Bahamondes","age":24,"birthDate":"15/02/2002","noVariants":true},{"id":703,"country":"CL","sex":"F","name":"Berta Quispe Araya","first":"Berta","surname":"Quispe","age":52,"birthDate":"22/07/1974","noVariants":true},{"id":704,"country":"CL","sex":"M","name":"Basilio Mena Cortés","first":"Basilio","surname":"Mena","age":62,"birthDate":"02/03/1964","noVariants":true},{"id":705,"country":"CL","sex":"F","name":"Lidia Aravena Soto","first":"Lidia","surname":"Aravena","age":26,"birthDate":"09/08/2000","noVariants":true},{"id":706,"country":"CL","sex":"M","name":"Nicanor Leiva Fierro","first":"Nicanor","surname":"Leiva","age":32,"birthDate":"16/04/1994","noVariants":true},{"id":707,"country":"CL","sex":"F","name":"Rosalía Bustos Mella","first":"Rosalía","surname":"Bustos","age":85,"birthDate":"23/09/1941","noVariants":true},{"id":708,"country":"CL","sex":"M","name":"Teodoro Pinto Vergara","first":"Teodoro","surname":"Pinto","age":60,"birthDate":"03/05/1966","noVariants":true},{"id":709,"country":"CL","sex":"F","name":"Silvana Retamal Duarte","first":"Silvana","surname":"Retamal","age":26,"birthDate":"10/01/2000","noVariants":true},{"id":710,"country":"CL","sex":"M","name":"Adolfo Sepúlveda Opazo","first":"Adolfo","surname":"Sepúlveda","age":82,"birthDate":"17/06/1944","noVariants":true},{"id":711,"country":"CL","sex":"F","name":"Fresia Nahuel Colipí","first":"Fresia","surname":"Nahuel","age":30,"birthDate":"24/02/1996","noVariants":true},{"id":712,"country":"CL","sex":"M","name":"Heliodoro Sáez Burgos","first":"Heliodoro","surname":"Sáez","age":47,"birthDate":"04/07/1979","noVariants":true},{"id":713,"country":"CL","sex":"F","name":"Azul Pezoa Navarrete","first":"Azul","surname":"Pezoa","age":40,"birthDate":"11/03/1986","noVariants":true},{"id":714,"country":"CL","sex":"M","name":"Raimundo Colipán Llanquileo","first":"Raimundo","surname":"Colipán","age":22,"birthDate":"18/08/2004","noVariants":true},{"id":715,"country":"CL","sex":"F","name":"Edelmira Fuentes Rojas","first":"Edelmira","surname":"Fuentes","age":70,"birthDate":"25/04/1956","noVariants":true},{"id":716,"country":"CL","sex":"M","name":"Dionisio Correa Almonacid","first":"Dionisio","surname":"Correa","age":45,"birthDate":"05/09/1981","noVariants":true},{"id":717,"country":"CL","sex":"F","name":"Maira Antileo Paillalef","first":"Maira","surname":"Antileo","age":33,"birthDate":"12/05/1993","noVariants":true},{"id":718,"country":"CL","sex":"M","name":"Flavio Zúñiga Becerra","first":"Flavio","surname":"Zúñiga","age":19,"birthDate":"19/01/2007","noVariants":true},{"id":719,"country":"CL","sex":"F","name":"Candelaria Poblete Gómez","first":"Candelaria","surname":"Poblete","age":64,"birthDate":"26/06/1962","noVariants":true},{"id":720,"country":"CL","sex":"M","name":"Nelson Calquín Maldonado","first":"Nelson","surname":"Calquín","age":37,"birthDate":"06/02/1989","noVariants":true},{"id":721,"country":"CL","sex":"F","name":"Emiliana Vera Quintana","first":"Emiliana","surname":"Vera","age":80,"birthDate":"13/07/1946","noVariants":true},{"id":722,"country":"CL","sex":"M","name":"Salvador Barros Lizama","first":"Salvador","surname":"Barros","age":36,"birthDate":"20/03/1990","noVariants":true},{"id":723,"country":"CL","sex":"F","name":"Eluney Huenchul Marín","first":"Eluney","surname":"Huenchul","age":24,"birthDate":"27/08/2002","noVariants":true},{"id":724,"country":"CL","sex":"M","name":"Ruperto Silva Meza","first":"Ruperto","surname":"Silva","age":74,"birthDate":"07/04/1952","noVariants":true},{"id":725,"country":"CL","sex":"F","name":"Dafne Marchant Ojeda","first":"Dafne","surname":"Marchant","age":27,"birthDate":"14/09/1999","noVariants":true},{"id":726,"country":"CL","sex":"M","name":"Braulio Moraga Pavez","first":"Braulio","surname":"Moraga","age":63,"birthDate":"21/05/1963","noVariants":true},{"id":727,"country":"CL","sex":"F","name":"Deyanira Lagos Castañeda","first":"Deyanira","surname":"Lagos","age":55,"birthDate":"01/01/1971","noVariants":true},{"id":728,"country":"CL","sex":"M","name":"Gualberto Tapia Rivera","first":"Gualberto","surname":"Tapia","age":46,"birthDate":"08/06/1980","noVariants":true},{"id":729,"country":"CL","sex":"F","name":"Luzmila Choque Flores","first":"Luzmila","surname":"Choque","age":58,"birthDate":"15/02/1968","noVariants":true},{"id":730,"country":"CL","sex":"M","name":"Yerko Palma Urrutia","first":"Yerko","surname":"Palma","age":24,"birthDate":"22/07/2002","noVariants":true},{"id":731,"country":"CL","sex":"F","name":"Teresa Cifuentes Aguirre","first":"Teresa","surname":"Cifuentes","age":72,"birthDate":"02/03/1954","noVariants":true},{"id":732,"country":"BO","sex":"M","name":"Néstor Condori Mamani","first":"Néstor","surname":"Condori","age":41,"birthDate":"09/08/1985","noVariants":true},{"id":733,"country":"AR","sex":"M","name":"Matías Ferreyra Domínguez","first":"Matías","surname":"Ferreyra","age":33,"birthDate":"16/04/1993","noVariants":true},{"id":734,"country":"PE","sex":"F","name":"Rosa Huamán Chávez","first":"Rosa","surname":"Huamán","age":60,"birthDate":"23/09/1966","noVariants":true},{"id":735,"country":"DE","sex":"F","name":"Anke Keller Schneider","first":"Anke","surname":"Keller","age":48,"birthDate":"03/05/1978","noVariants":true},{"id":736,"country":"IT","sex":"M","name":"Gianni Ferraro Colombo","first":"Gianni","surname":"Ferraro","age":68,"birthDate":"10/01/1958","noVariants":true},{"id":737,"country":"HT","sex":"F","name":"Mireille Desrosiers Jean-Baptiste","first":"Mireille","surname":"Desrosiers","age":31,"birthDate":"17/06/1995","noVariants":true},{"id":738,"country":"VE","sex":"M","name":"Edwin Colmenares Rondón","first":"Edwin","surname":"Colmenares","age":23,"birthDate":"24/02/2003","noVariants":true},{"id":739,"country":"CN","sex":"F","name":"Zhang Lan","first":"Lan","surname":"Zhang","age":70,"birthDate":"04/07/1956","noVariants":true},{"id":740,"country":"CL","sex":"M","name":"Severino Catrileo Huenchuñir","first":"Severino","surname":"Catrileo","age":70,"birthDate":"01/01/1956","noVariants":true,"lookalikeOf":700},{"id":741,"country":"CL","sex":"F","name":"Amalia Donoso Ibarra","first":"Amalia","surname":"Donoso","age":38,"birthDate":"08/06/1988","noVariants":true,"lookalikeOf":701},{"id":742,"country":"CL","sex":"M","name":"Eduardo Bahamondes Salas","first":"Eduardo","surname":"Bahamondes","age":24,"birthDate":"15/02/2002","noVariants":true,"lookalikeOf":702},{"id":743,"country":"CL","sex":"F","name":"Berta Quispe Araya","first":"Berta","surname":"Quispe","age":52,"birthDate":"22/07/1974","noVariants":true,"lookalikeOf":703},{"id":744,"country":"CL","sex":"M","name":"Basilio Mena Cortés","first":"Basilio","surname":"Mena","age":62,"birthDate":"02/03/1964","noVariants":true,"lookalikeOf":704},{"id":745,"country":"CL","sex":"F","name":"Lidia Aravena Soto","first":"Lidia","surname":"Aravena","age":26,"birthDate":"09/08/2000","noVariants":true,"lookalikeOf":705},{"id":746,"country":"CL","sex":"M","name":"Nicanor Leiva Fierro","first":"Nicanor","surname":"Leiva","age":32,"birthDate":"16/04/1994","noVariants":true,"lookalikeOf":706},{"id":747,"country":"CL","sex":"F","name":"Rosalía Bustos Mella","first":"Rosalía","surname":"Bustos","age":85,"birthDate":"23/09/1941","noVariants":true,"lookalikeOf":707},{"id":748,"country":"CL","sex":"M","name":"Teodoro Pinto Vergara","first":"Teodoro","surname":"Pinto","age":60,"birthDate":"03/05/1966","noVariants":true,"lookalikeOf":708},{"id":749,"country":"CL","sex":"F","name":"Silvana Retamal Duarte","first":"Silvana","surname":"Retamal","age":26,"birthDate":"10/01/2000","noVariants":true,"lookalikeOf":709},{"id":750,"country":"CL","sex":"M","name":"Anselmo Valenzuela Pizarro","first":"Anselmo","surname":"Valenzuela","age":62,"birthDate":"01/01/1964","noVariants":true},{"id":751,"country":"CL","sex":"F","name":"Ofelia Vidal Carrillo","first":"Ofelia","surname":"Vidal","age":55,"birthDate":"08/06/1971","noVariants":true},{"id":752,"country":"CL","sex":"M","name":"Isidro Oyarzún Barría","first":"Isidro","surname":"Oyarzún","age":52,"birthDate":"15/02/1974","noVariants":true},{"id":753,"country":"CL","sex":"F","name":"Jimena Carvajal Tobar","first":"Jimena","surname":"Carvajal","age":70,"birthDate":"22/07/1956","noVariants":true},{"id":754,"country":"CL","sex":"M","name":"Waldo Contreras Lara","first":"Waldo","surname":"Contreras","age":20,"birthDate":"02/03/2006","noVariants":true},{"id":755,"country":"CL","sex":"F","name":"Tamara Arriagada Muñoz","first":"Tamara","surname":"Arriagada","age":50,"birthDate":"09/08/1976","noVariants":true},{"id":756,"country":"CL","sex":"M","name":"Efraín Troncoso Silva","first":"Efraín","surname":"Troncoso","age":48,"birthDate":"16/04/1978","noVariants":true},{"id":757,"country":"CL","sex":"F","name":"Margarita Melillán Peña","first":"Margarita","surname":"Melillán","age":40,"birthDate":"23/09/1986","noVariants":true},{"id":758,"country":"CL","sex":"M","name":"Ulises Sanhueza Ríos","first":"Ulises","surname":"Sanhueza","age":45,"birthDate":"03/05/1981","noVariants":true},{"id":759,"country":"CL","sex":"F","name":"Isabel Godoy Cáceres","first":"Isabel","surname":"Godoy","age":35,"birthDate":"10/01/1991","noVariants":true},{"id":760,"country":"CL","sex":"M","name":"Ariel Loncopán Trecaman","first":"Ariel","surname":"Loncopán","age":22,"birthDate":"17/06/2004","noVariants":true},{"id":761,"country":"CL","sex":"F","name":"Ximena Monsalve Toro","first":"Ximena","surname":"Monsalve","age":50,"birthDate":"24/02/1976","noVariants":true},{"id":762,"country":"CL","sex":"M","name":"Gaspar Venegas Henríquez","first":"Gaspar","surname":"Venegas","age":50,"birthDate":"04/07/1976","noVariants":true},{"id":763,"country":"CL","sex":"F","name":"Clara Huenchumán Ayala","first":"Clara","surname":"Huenchumán","age":55,"birthDate":"11/03/1971","noVariants":true},{"id":764,"country":"CL","sex":"M","name":"Rodrigo Quezada Bravo","first":"Rodrigo","surname":"Quezada","age":21,"birthDate":"18/08/2005","noVariants":true},{"id":765,"country":"CL","sex":"F","name":"Fernanda Espinoza Lobos","first":"Fernanda","surname":"Espinoza","age":50,"birthDate":"25/04/1976","noVariants":true},{"id":766,"country":"CL","sex":"M","name":"Demetrio Varela Ponce","first":"Demetrio","surname":"Varela","age":62,"birthDate":"05/09/1964","noVariants":true},{"id":767,"country":"CL","sex":"F","name":"Olivia Inostroza Neira","first":"Olivia","surname":"Inostroza","age":30,"birthDate":"12/05/1996","noVariants":true},{"id":768,"country":"CL","sex":"M","name":"Óscar Aillapán Reyes","first":"Óscar","surname":"Aillapán","age":48,"birthDate":"19/01/1978","noVariants":true},{"id":769,"country":"CL","sex":"F","name":"Lorena Escobar Valdés","first":"Lorena","surname":"Escobar","age":52,"birthDate":"26/06/1974","noVariants":true},{"id":770,"country":"CL","sex":"M","name":"Claudio Riquelme Toledo","first":"Claudio","surname":"Riquelme","age":52,"birthDate":"06/02/1974","noVariants":true},{"id":771,"country":"CL","sex":"F","name":"Amanda Quilaqueo Salazar","first":"Amanda","surname":"Quilaqueo","age":35,"birthDate":"13/07/1991","noVariants":true},{"id":772,"country":"CL","sex":"M","name":"Alonso Queupul Gallardo","first":"Alonso","surname":"Queupul","age":28,"birthDate":"20/03/1998","noVariants":true},{"id":773,"country":"CL","sex":"F","name":"Elvira Maturana Pinochet","first":"Elvira","surname":"Maturana","age":68,"birthDate":"27/08/1958","noVariants":true},{"id":774,"country":"CL","sex":"M","name":"Pedro Villagrán Lagos","first":"Pedro","surname":"Villagrán","age":72,"birthDate":"07/04/1954","noVariants":true},{"id":775,"country":"CL","sex":"F","name":"Josefina Cabezas Mora","first":"Josefina","surname":"Cabezas","age":50,"birthDate":"14/09/1976","noVariants":true},{"id":776,"country":"CL","sex":"M","name":"Ignacio Cárdenas Figueroa","first":"Ignacio","surname":"Cárdenas","age":45,"birthDate":"21/05/1981","noVariants":true},{"id":777,"country":"CL","sex":"F","name":"Beatriz Curihuentro Soto","first":"Beatriz","surname":"Curihuentro","age":25,"birthDate":"01/01/2001","noVariants":true},{"id":778,"country":"CL","sex":"M","name":"Víctor Manquilef Cares","first":"Víctor","surname":"Manquilef","age":42,"birthDate":"08/06/1984","noVariants":true},{"id":779,"country":"CL","sex":"F","name":"Raquel Palacios Díaz","first":"Raquel","surname":"Palacios","age":45,"birthDate":"15/02/1981","noVariants":true},{"id":780,"country":"CL","sex":"M","name":"Moisés Salinas Cornejo","first":"Moisés","surname":"Salinas","age":50,"birthDate":"22/07/1976","noVariants":true},{"id":781,"country":"CL","sex":"F","name":"Dalia Arancibia Bustamante","first":"Dalia","surname":"Arancibia","age":55,"birthDate":"02/03/1971","noVariants":true},{"id":782,"country":"CL","sex":"M","name":"Sergio Zambrano Orellana","first":"Sergio","surname":"Zambrano","age":40,"birthDate":"09/08/1986","noVariants":true},{"id":783,"country":"CL","sex":"F","name":"Verónica Garrido Salgado","first":"Verónica","surname":"Garrido","age":33,"birthDate":"16/04/1993","noVariants":true},{"id":784,"country":"CL","sex":"M","name":"Arturo Alvear Montecinos","first":"Arturo","surname":"Alvear","age":30,"birthDate":"23/09/1996","noVariants":true},{"id":785,"country":"CL","sex":"F","name":"Natalia Millapán Gutiérrez","first":"Natalia","surname":"Millapán","age":58,"birthDate":"03/05/1968","noVariants":true},{"id":786,"country":"CL","sex":"M","name":"Ciro Carrasco Ibáñez","first":"Ciro","surname":"Carrasco","age":66,"birthDate":"10/01/1960","noVariants":true},{"id":787,"country":"CL","sex":"F","name":"Consuelo Echeverría Cruz","first":"Consuelo","surname":"Echeverría","age":42,"birthDate":"17/06/1984","noVariants":true},{"id":788,"country":"CL","sex":"M","name":"Leonardo Jara Escalona","first":"Leonardo","surname":"Jara","age":45,"birthDate":"24/02/1981","noVariants":true},{"id":789,"country":"CL","sex":"F","name":"Jacinta Loyola Henríquez","first":"Jacinta","surname":"Loyola","age":28,"birthDate":"04/07/1998","noVariants":true},{"id":790,"country":"CL","sex":"M","name":"Leandro Painefil Guzmán","first":"Leandro","surname":"Painefil","age":55,"birthDate":"11/03/1971","noVariants":true},{"id":791,"country":"CL","sex":"F","name":"Adriana Llancamán Vega","first":"Adriana","surname":"Llancamán","age":65,"birthDate":"18/08/1961","noVariants":true},{"id":792,"country":"CL","sex":"M","name":"Félix Rojas Maureira","first":"Félix","surname":"Rojas","age":62,"birthDate":"25/04/1964","noVariants":true},{"id":793,"country":"CL","sex":"F","name":"Cecilia Canales Fuenzalida","first":"Cecilia","surname":"Canales","age":55,"birthDate":"05/09/1971","noVariants":true},{"id":794,"country":"CL","sex":"M","name":"Esteban Becerra Núñez","first":"Esteban","surname":"Becerra","age":42,"birthDate":"12/05/1984","noVariants":true},{"id":795,"country":"CL","sex":"F","name":"Laura Valenzuela Acuña","first":"Laura","surname":"Valenzuela","age":24,"birthDate":"19/01/2002","noVariants":true},{"id":796,"country":"CL","sex":"M","name":"Renato Ulloa Sandoval","first":"Renato","surname":"Ulloa","age":38,"birthDate":"26/06/1988","noVariants":true},{"id":797,"country":"CL","sex":"F","name":"Marisol Hidalgo Campos","first":"Marisol","surname":"Hidalgo","age":60,"birthDate":"06/02/1966","noVariants":true},{"id":798,"country":"CL","sex":"M","name":"Camilo Parra Vásquez","first":"Camilo","surname":"Parra","age":60,"birthDate":"13/07/1966","noVariants":true},{"id":799,"country":"CL","sex":"F","name":"Inés Cisternas Leiva","first":"Inés","surname":"Cisternas","age":50,"birthDate":"20/03/1976","noVariants":true},{"id":800,"country":"CL","sex":"M","name":"Benicio Mardones Tapia","first":"Benicio","surname":"Mardones","age":20,"birthDate":"27/08/2006","noVariants":true},{"id":801,"country":"CL","sex":"F","name":"Mariana Alarcón Pozo","first":"Mariana","surname":"Alarcón","age":45,"birthDate":"07/04/1981","noVariants":true},{"id":802,"country":"CL","sex":"F","name":"Celeste Orellana Jara","first":"Celeste","surname":"Orellana","age":55,"birthDate":"14/09/1971","noVariants":true},{"id":803,"country":"CL","sex":"M","name":"Mauricio Hueche Cuevas","first":"Mauricio","surname":"Hueche","age":40,"birthDate":"21/05/1986","noVariants":true},{"id":804,"country":"CL","sex":"F","name":"Rocío Yáñez Miranda","first":"Rocío","surname":"Yáñez","age":45,"birthDate":"01/01/1981","noVariants":true},{"id":805,"country":"CL","sex":"M","name":"Pablo San Martín Rebolledo","first":"Pablo","surname":"San Martín","age":38,"birthDate":"08/06/1988","noVariants":true},{"id":806,"country":"CL","sex":"F","name":"Alicia Lienlaf Nahuelpán","first":"Alicia","surname":"Lienlaf","age":30,"birthDate":"15/02/1996","noVariants":true},{"id":807,"country":"CL","sex":"F","name":"Noelia Aguilera Araya","first":"Noelia","surname":"Aguilera","age":38,"birthDate":"01/01/1988","noVariants":true},{"id":808,"country":"DE","sex":"M","name":"Leonel Benavides Muñoz","first":"Leonel","surname":"Benavides","age":38,"birthDate":"08/06/1988","noVariants":true},{"id":809,"country":"IT","sex":"F","name":"Graciela Figueroa Ruiz","first":"Graciela","surname":"Figueroa","age":55,"birthDate":"15/02/1971","noVariants":true},{"id":810,"country":"PE","sex":"M","name":"Humberto Maldonado Opazo","first":"Humberto","surname":"Maldonado","age":72,"birthDate":"22/07/1954","noVariants":true},{"id":811,"country":"VE","sex":"F","name":"Elsa Quintana Vidal","first":"Elsa","surname":"Quintana","age":29,"birthDate":"02/03/1997","noVariants":true},{"id":812,"country":"CN","sex":"M","name":"Gerardo Trujillo","first":"Gerardo","surname":"Trujillo","age":46,"birthDate":"09/08/1980","noVariants":true},{"id":813,"country":"DE","sex":"F","name":"Viviana Caniupan Henríquez","first":"Viviana","surname":"Caniupan","age":63,"birthDate":"16/04/1963","noVariants":true},{"id":814,"country":"IT","sex":"M","name":"Tomás Cayún Molina","first":"Tomás","surname":"Cayún","age":80,"birthDate":"23/09/1946","noVariants":true},{"id":815,"country":"PE","sex":"F","name":"Leonor Beltrán Valenzuela","first":"Leonor","surname":"Beltrán","age":37,"birthDate":"03/05/1989","noVariants":true},{"id":816,"country":"VE","sex":"M","name":"Dimas Farías Torres","first":"Dimas","surname":"Farías","age":54,"birthDate":"10/01/1972","noVariants":true},{"id":817,"country":"CN","sex":"F","name":"Melisa Lobos","first":"Melisa","surname":"Lobos","age":71,"birthDate":"17/06/1955","noVariants":true},{"id":818,"country":"DE","sex":"M","name":"Abel Pizarro Ahumada","first":"Abel","surname":"Pizarro","age":28,"birthDate":"24/02/1998","noVariants":true},{"id":819,"country":"IT","sex":"F","name":"Gloria Toledo Fierro","first":"Gloria","surname":"Toledo","age":45,"birthDate":"04/07/1981","noVariants":true},{"id":820,"country":"PE","sex":"M","name":"Fabián Zelada Nahuelquín","first":"Fabián","surname":"Zelada","age":62,"birthDate":"11/03/1964","noVariants":true},{"id":821,"country":"VE","sex":"F","name":"Irma Rainao Sepúlveda","first":"Irma","surname":"Rainao","age":79,"birthDate":"18/08/1947","noVariants":true},{"id":822,"country":"CN","sex":"M","name":"Maximiliano Barrera","first":"Maximiliano","surname":"Barrera","age":36,"birthDate":"25/04/1990","noVariants":true},{"id":823,"country":"CL","sex":"F","name":"Celina Durán Mella","first":"Celina","surname":"Durán","age":53,"birthDate":"05/09/1973","noVariants":true},{"id":824,"country":"CL","sex":"M","name":"Ramiro Iturra Escobar","first":"Ramiro","surname":"Iturra","age":70,"birthDate":"12/05/1956","noVariants":true},{"id":825,"country":"CL","sex":"F","name":"Pamela Pérez Mansilla","first":"Pamela","surname":"Pérez","age":27,"birthDate":"19/01/1999","noVariants":true},{"id":826,"country":"CL","sex":"M","name":"Gonzalo Suárez Maturana","first":"Gonzalo","surname":"Suárez","age":44,"birthDate":"26/06/1982","noVariants":true},{"id":827,"country":"CL","sex":"F","name":"Eugenia Zamora Ibáñez","first":"Eugenia","surname":"Zamora","age":61,"birthDate":"06/02/1965","noVariants":true},{"id":828,"country":"CL","sex":"M","name":"Lautaro Quintriqueo Gallardo","first":"Lautaro","surname":"Quintriqueo","age":78,"birthDate":"13/07/1948","noVariants":true},{"id":829,"country":"CL","sex":"F","name":"Sandra Baeza Lara","first":"Sandra","surname":"Baeza","age":35,"birthDate":"20/03/1991","noVariants":true},{"id":830,"country":"CL","sex":"M","name":"Baltazar Cuevas Aguirre","first":"Baltazar","surname":"Cuevas","age":52,"birthDate":"27/08/1974","noVariants":true},{"id":831,"country":"CL","sex":"F","name":"Manuela Henríquez Soza","first":"Manuela","surname":"Henríquez","age":69,"birthDate":"07/04/1957","noVariants":true},{"id":832,"country":"CL","sex":"M","name":"Hugo Ortega Tello","first":"Hugo","surname":"Ortega","age":26,"birthDate":"14/09/2000","noVariants":true},{"id":833,"country":"CL","sex":"F","name":"Mirta Soto Jorquera","first":"Mirta","surname":"Soto","age":43,"birthDate":"21/05/1983","noVariants":true},{"id":834,"country":"CL","sex":"M","name":"Lautaro Villalobos Painemal","first":"Lautaro","surname":"Villalobos","age":60,"birthDate":"01/01/1966","noVariants":true},{"id":835,"country":"CL","sex":"F","name":"Griselda Panichini Tapia","first":"Griselda","surname":"Panichini","age":77,"birthDate":"08/06/1949","noVariants":true},{"id":836,"country":"CL","sex":"M","name":"Francisco Albornoz Salinas","first":"Francisco","surname":"Albornoz","age":34,"birthDate":"15/02/1992","noVariants":true},{"id":837,"country":"CL","sex":"F","name":"Elisa Chacón Cornejo","first":"Elisa","surname":"Chacón","age":51,"birthDate":"22/07/1975","noVariants":true},{"id":838,"country":"CL","sex":"M","name":"Axel Guerra Riquelme","first":"Axel","surname":"Guerra","age":68,"birthDate":"02/03/1958","noVariants":true},{"id":839,"country":"CL","sex":"F","name":"Cristina Núñez Alvarado","first":"Cristina","surname":"Núñez","age":25,"birthDate":"09/08/2001","noVariants":true},{"id":840,"country":"CL","sex":"M","name":"Rubén Saavedra Poblete","first":"Rubén","surname":"Saavedra","age":42,"birthDate":"16/04/1984","noVariants":true},{"id":841,"country":"CL","sex":"F","name":"Valeria Velásquez Concha","first":"Valeria","surname":"Velásquez","age":59,"birthDate":"23/09/1967","noVariants":true},{"id":842,"country":"CL","sex":"M","name":"Boris Neculman Carmona","first":"Boris","surname":"Neculman","age":76,"birthDate":"03/05/1950","noVariants":true},{"id":843,"country":"CL","sex":"F","name":"Dora Acuña Meza","first":"Dora","surname":"Acuña","age":33,"birthDate":"10/01/1993","noVariants":true},{"id":844,"country":"CL","sex":"M","name":"Samuel Cerda Rebolledo","first":"Samuel","surname":"Cerda","age":50,"birthDate":"17/06/1976","noVariants":true},{"id":845,"country":"CL","sex":"F","name":"Gabriela González Urrutia","first":"Gabriela","surname":"González","age":67,"birthDate":"24/02/1959","noVariants":true},{"id":846,"country":"CL","sex":"M","name":"Ricardo Muñoz Navarrete","first":"Ricardo","surname":"Muñoz","age":24,"birthDate":"04/07/2002","noVariants":true},{"id":847,"country":"CL","sex":"F","name":"Esperanza Romo Merino","first":"Esperanza","surname":"Romo","age":41,"birthDate":"11/03/1985","noVariants":true},{"id":848,"country":"CL","sex":"M","name":"Tobías Vásquez Alarcón","first":"Tobías","surname":"Vásquez","age":58,"birthDate":"18/08/1968","noVariants":true},{"id":849,"country":"CL","sex":"F","name":"Noemí Marileo Vergara","first":"Noemí","surname":"Marileo","age":75,"birthDate":"25/04/1951","noVariants":true},{"id":850,"country":"CL","sex":"M","name":"Manuel Acevedo Orrego","first":"Manuel","surname":"Acevedo","age":32,"birthDate":"05/09/1994","noVariants":true},{"id":851,"country":"CL","sex":"F","name":"Victoria Caro Naranjo","first":"Victoria","surname":"Caro","age":49,"birthDate":"12/05/1977","noVariants":true},{"id":852,"country":"CL","sex":"M","name":"Joel Gatica Carvajal","first":"Joel","surname":"Gatica","age":66,"birthDate":"19/01/1960","noVariants":true},{"id":853,"country":"CL","sex":"F","name":"Alejandra Márquez Pavez","first":"Alejandra","surname":"Márquez","age":23,"birthDate":"26/06/2003","noVariants":true},{"id":854,"country":"CL","sex":"M","name":"César Riveros Cárcamo","first":"César","surname":"Riveros","age":40,"birthDate":"06/02/1986","noVariants":true},{"id":855,"country":"CL","sex":"F","name":"Yolanda Uribe Burgos","first":"Yolanda","surname":"Uribe","age":57,"birthDate":"13/07/1969","noVariants":true},{"id":856,"country":"CL","sex":"M","name":"Emiliano Huaiquimil Oyarzo","first":"Emiliano","surname":"Huaiquimil","age":74,"birthDate":"20/03/1952","noVariants":true},{"id":857,"country":"CL","sex":"F","name":"Noelia Acevedo Pinto","first":"Noelia","surname":"Acevedo","age":31,"birthDate":"27/08/1995","noVariants":true},{"id":858,"country":"CL","sex":"M","name":"Leonel Caro Barrientos","first":"Leonel","surname":"Caro","age":48,"birthDate":"07/04/1978","noVariants":true},{"id":859,"country":"CL","sex":"F","name":"Graciela Gatica Cofré","first":"Graciela","surname":"Gatica","age":65,"birthDate":"14/09/1961","noVariants":true},{"id":860,"country":"CL","sex":"M","name":"Humberto Márquez Paredes","first":"Humberto","surname":"Márquez","age":22,"birthDate":"21/05/2004","noVariants":true},{"id":861,"country":"CL","sex":"F","name":"Elsa Riveros Villar","first":"Elsa","surname":"Riveros","age":39,"birthDate":"01/01/1987","noVariants":true},{"id":862,"country":"CL","sex":"M","name":"Gerardo Uribe Rojas","first":"Gerardo","surname":"Uribe","age":56,"birthDate":"08/06/1970","noVariants":true},{"id":863,"country":"CL","sex":"F","name":"Viviana Huaiquimil Bustos","first":"Viviana","surname":"Huaiquimil","age":73,"birthDate":"15/02/1953","noVariants":true},{"id":864,"country":"CL","sex":"M","name":"Tomás Aguilera Bravo","first":"Tomás","surname":"Aguilera","age":30,"birthDate":"22/07/1996","noVariants":true},{"id":865,"country":"CL","sex":"F","name":"Leonor Benavides Yáñez","first":"Leonor","surname":"Benavides","age":47,"birthDate":"02/03/1979","noVariants":true},{"id":866,"country":"CL","sex":"M","name":"Dimas Figueroa Valdivia","first":"Dimas","surname":"Figueroa","age":64,"birthDate":"09/08/1962","noVariants":true},{"id":867,"country":"CL","sex":"F","name":"Melisa Maldonado Medina","first":"Melisa","surname":"Maldonado","age":21,"birthDate":"16/04/2005","noVariants":true},{"id":868,"country":"CL","sex":"M","name":"Abel Quintana Campos","first":"Abel","surname":"Quintana","age":38,"birthDate":"23/09/1988","noVariants":true},{"id":869,"country":"CL","sex":"F","name":"Gloria Trujillo Hormazábal","first":"Gloria","surname":"Trujillo","age":55,"birthDate":"03/05/1971","noVariants":true},{"id":870,"country":"CL","sex":"M","name":"Fabián Caniupan Silva","first":"Fabián","surname":"Caniupan","age":72,"birthDate":"10/01/1954","noVariants":true},{"id":871,"country":"CL","sex":"F","name":"Irma Cayún Rivas","first":"Irma","surname":"Cayún","age":29,"birthDate":"17/06/1997","noVariants":true},{"id":872,"country":"CL","sex":"M","name":"Maximiliano Beltrán Cares","first":"Maximiliano","surname":"Beltrán","age":46,"birthDate":"24/02/1980","noVariants":true},{"id":873,"country":"CL","sex":"F","name":"Celina Farías Veloso","first":"Celina","surname":"Farías","age":63,"birthDate":"04/07/1963","noVariants":true},{"id":874,"country":"CL","sex":"M","name":"Ramiro Lobos Arce","first":"Ramiro","surname":"Lobos","age":80,"birthDate":"11/03/1946","noVariants":true},{"id":875,"country":"CL","sex":"F","name":"Pamela Pizarro Albarrán","first":"Pamela","surname":"Pizarro","age":37,"birthDate":"18/08/1989","noVariants":true},{"id":876,"country":"CL","sex":"M","name":"Gonzalo Toledo Fuentes","first":"Gonzalo","surname":"Toledo","age":54,"birthDate":"25/04/1972","noVariants":true},{"id":877,"country":"CL","sex":"F","name":"Eugenia Zelada Pino","first":"Eugenia","surname":"Zelada","age":71,"birthDate":"05/09/1955","noVariants":true},{"id":878,"country":"CL","sex":"M","name":"Lautaro Rainao Lagos","first":"Lautaro","surname":"Rainao","age":28,"birthDate":"12/05/1998","noVariants":true},{"id":879,"country":"CL","sex":"F","name":"Sandra Barrera Aravena","first":"Sandra","surname":"Barrera","age":45,"birthDate":"19/01/1981","noVariants":true},{"id":880,"country":"CL","sex":"M","name":"Baltazar Durán Olivares","first":"Baltazar","surname":"Durán","age":62,"birthDate":"26/06/1964","noVariants":true},{"id":881,"country":"CL","sex":"F","name":"Manuela Iturra Garrido","first":"Manuela","surname":"Iturra","age":79,"birthDate":"06/02/1947","noVariants":true},{"id":882,"country":"CL","sex":"M","name":"Hugo Pérez Zúñiga","first":"Hugo","surname":"Pérez","age":36,"birthDate":"13/07/1990","noVariants":true},{"id":883,"country":"CL","sex":"F","name":"Mirta Suárez Lizama","first":"Mirta","surname":"Suárez","age":53,"birthDate":"20/03/1973","noVariants":true},{"id":884,"country":"CL","sex":"M","name":"Lautaro Zamora Soto","first":"Lautaro","surname":"Zamora","age":70,"birthDate":"27/08/1956","noVariants":true},{"id":885,"country":"CL","sex":"F","name":"Griselda Quintriqueo Moya","first":"Griselda","surname":"Quintriqueo","age":27,"birthDate":"07/04/1999","noVariants":true},{"id":886,"country":"CL","sex":"M","name":"Francisco Baeza Millar","first":"Francisco","surname":"Baeza","age":44,"birthDate":"14/09/1982","noVariants":true},{"id":887,"country":"CL","sex":"F","name":"Elisa Cuevas Quiroz","first":"Elisa","surname":"Cuevas","age":61,"birthDate":"21/05/1965","noVariants":true},{"id":888,"country":"CL","sex":"M","name":"Axel Henríquez Muga","first":"Axel","surname":"Henríquez","age":78,"birthDate":"01/01/1948","noVariants":true},{"id":889,"country":"CL","sex":"F","name":"Cristina Ortega Cordero","first":"Cristina","surname":"Ortega","age":35,"birthDate":"08/06/1991","noVariants":true},{"id":890,"country":"CL","sex":"M","name":"Rubén Soto Contreras","first":"Rubén","surname":"Soto","age":52,"birthDate":"15/02/1974","noVariants":true},{"id":891,"country":"CL","sex":"F","name":"Valeria Villalobos Carrasco","first":"Valeria","surname":"Villalobos","age":69,"birthDate":"22/07/1957","noVariants":true},{"id":892,"country":"CL","sex":"M","name":"Boris Panichini Reyes","first":"Boris","surname":"Panichini","age":26,"birthDate":"02/03/2000","noVariants":true},{"id":893,"country":"CL","sex":"F","name":"Dora Albornoz Leiva","first":"Dora","surname":"Albornoz","age":43,"birthDate":"09/08/1983","noVariants":true},{"id":894,"country":"CL","sex":"M","name":"Samuel Chacón Cisternas","first":"Samuel","surname":"Chacón","age":60,"birthDate":"16/04/1966","noVariants":true},{"id":895,"country":"CL","sex":"F","name":"Gabriela Guerra Sandoval","first":"Gabriela","surname":"Guerra","age":77,"birthDate":"23/09/1949","noVariants":true},{"id":896,"country":"CL","sex":"M","name":"Ricardo Núñez Barra","first":"Ricardo","surname":"Núñez","age":34,"birthDate":"03/05/1992","noVariants":true},{"id":897,"country":"CL","sex":"F","name":"Esperanza Saavedra Peña","first":"Esperanza","surname":"Saavedra","age":51,"birthDate":"10/01/1975","noVariants":true},{"id":898,"country":"CL","sex":"M","name":"Tobías Velásquez Cabrera","first":"Tobías","surname":"Velásquez","age":68,"birthDate":"17/06/1958","noVariants":true},{"id":899,"country":"CL","sex":"F","name":"Noemí Neculman Sanhueza","first":"Noemí","surname":"Neculman","age":25,"birthDate":"24/02/2001","noVariants":true},{"id":900,"country":"CL","sex":"M","name":"Manuel Acuña Godoy","first":"Manuel","surname":"Acuña","age":42,"birthDate":"04/07/1984","noVariants":true},{"id":901,"country":"CL","sex":"F","name":"Victoria Cerda Elgueta","first":"Victoria","surname":"Cerda","age":59,"birthDate":"11/03/1967","noVariants":true},{"id":902,"country":"CL","sex":"M","name":"Joel González Villegas","first":"Joel","surname":"González","age":76,"birthDate":"18/08/1950","noVariants":true},{"id":903,"country":"CL","sex":"F","name":"Alejandra Muñoz Leal","first":"Alejandra","surname":"Muñoz","age":33,"birthDate":"25/04/1993","noVariants":true},{"id":904,"country":"CL","sex":"M","name":"César Romo Araya","first":"César","surname":"Romo","age":50,"birthDate":"05/09/1976","noVariants":true},{"id":905,"country":"CL","sex":"F","name":"Yolanda Vásquez Muñoz","first":"Yolanda","surname":"Vásquez","age":67,"birthDate":"12/05/1959","noVariants":true},{"id":906,"country":"CL","sex":"M","name":"Emiliano Marileo Ruiz","first":"Emiliano","surname":"Marileo","age":24,"birthDate":"19/01/2002","noVariants":true},{"id":907,"country":"VE","sex":"F","name":"Elsa Quintana Vidal","first":"Elsa","surname":"Quintana","age":29,"birthDate":"02/03/1997","noVariants":true,"lookalikeOf":811},{"id":908,"country":"VE","sex":"M","name":"Dimas Farías Torres","first":"Dimas","surname":"Farías","age":54,"birthDate":"10/01/1972","noVariants":true,"lookalikeOf":816},{"id":909,"country":"VE","sex":"F","name":"Irma Rainao Sepúlveda","first":"Irma","surname":"Rainao","age":79,"birthDate":"18/08/1947","noVariants":true,"lookalikeOf":821},{"id":910,"country":"CL","sex":"M","name":"Gonzalo Suárez Maturana","first":"Gonzalo","surname":"Suárez","age":44,"birthDate":"26/06/1982","noVariants":true,"lookalikeOf":826},{"id":911,"country":"CL","sex":"F","name":"Manuela Henríquez Soza","first":"Manuela","surname":"Henríquez","age":69,"birthDate":"07/04/1957","noVariants":true,"lookalikeOf":831},{"id":912,"country":"CL","sex":"M","name":"Francisco Albornoz Salinas","first":"Francisco","surname":"Albornoz","age":34,"birthDate":"15/02/1992","noVariants":true,"lookalikeOf":836},{"id":913,"country":"CL","sex":"F","name":"Valeria Velásquez Concha","first":"Valeria","surname":"Velásquez","age":59,"birthDate":"23/09/1967","noVariants":true,"lookalikeOf":841},{"id":914,"country":"CL","sex":"M","name":"Ricardo Muñoz Navarrete","first":"Ricardo","surname":"Muñoz","age":24,"birthDate":"04/07/2002","noVariants":true,"lookalikeOf":846},{"id":915,"country":"CL","sex":"F","name":"Victoria Caro Naranjo","first":"Victoria","surname":"Caro","age":49,"birthDate":"12/05/1977","noVariants":true,"lookalikeOf":851},{"id":916,"country":"CL","sex":"M","name":"Emiliano Huaiquimil Oyarzo","first":"Emiliano","surname":"Huaiquimil","age":74,"birthDate":"20/03/1952","noVariants":true,"lookalikeOf":856},{"id":917,"country":"CL","sex":"F","name":"Elsa Riveros Villar","first":"Elsa","surname":"Riveros","age":39,"birthDate":"01/01/1987","noVariants":true,"lookalikeOf":861},{"id":918,"country":"CL","sex":"M","name":"Dimas Figueroa Valdivia","first":"Dimas","surname":"Figueroa","age":64,"birthDate":"09/08/1962","noVariants":true,"lookalikeOf":866},{"id":919,"country":"CL","sex":"F","name":"Irma Cayún Rivas","first":"Irma","surname":"Cayún","age":29,"birthDate":"17/06/1997","noVariants":true,"lookalikeOf":871},{"id":920,"country":"CL","sex":"M","name":"Gonzalo Toledo Fuentes","first":"Gonzalo","surname":"Toledo","age":54,"birthDate":"25/04/1972","noVariants":true,"lookalikeOf":876},{"id":921,"country":"CL","sex":"F","name":"Manuela Iturra Garrido","first":"Manuela","surname":"Iturra","age":79,"birthDate":"06/02/1947","noVariants":true,"lookalikeOf":881},{"id":922,"country":"CL","sex":"M","name":"Francisco Baeza Millar","first":"Francisco","surname":"Baeza","age":44,"birthDate":"14/09/1982","noVariants":true,"lookalikeOf":886},{"id":923,"country":"CL","sex":"F","name":"Valeria Villalobos Carrasco","first":"Valeria","surname":"Villalobos","age":69,"birthDate":"22/07/1957","noVariants":true,"lookalikeOf":891},{"id":924,"country":"CL","sex":"M","name":"Ricardo Núñez Barra","first":"Ricardo","surname":"Núñez","age":34,"birthDate":"03/05/1992","noVariants":true,"lookalikeOf":896},{"id":925,"country":"CL","sex":"F","name":"Victoria Cerda Elgueta","first":"Victoria","surname":"Cerda","age":59,"birthDate":"11/03/1967","noVariants":true,"lookalikeOf":901},{"id":926,"country":"CL","sex":"M","name":"Emiliano Marileo Ruiz","first":"Emiliano","surname":"Marileo","age":24,"birthDate":"19/01/2002","noVariants":true,"lookalikeOf":906},{"id":927,"country":"CN","sex":"F","name":"Patricia Astudillo","first":"Patricia","surname":"Astudillo","age":46,"birthDate":"01/01/1980","noVariants":true},{"id":928,"country":"DE","sex":"M","name":"Roberto Astudillo Muñoz","first":"Roberto","surname":"Astudillo","age":69,"birthDate":"08/06/1957","noVariants":true},{"id":929,"country":"IT","sex":"F","name":"Marcela González Ruiz","first":"Marcela","surname":"González","age":30,"birthDate":"15/02/1996","noVariants":true},{"id":930,"country":"PE","sex":"M","name":"Marcelo González Opazo","first":"Marcelo","surname":"González","age":53,"birthDate":"22/07/1973","noVariants":true},{"id":931,"country":"VE","sex":"F","name":"Sara Marin Vidal","first":"Sara","surname":"Marin","age":76,"birthDate":"02/03/1950","noVariants":true},{"id":932,"country":"CN","sex":"M","name":"Enrique Marin","first":"Enrique","surname":"Marin","age":37,"birthDate":"09/08/1989","noVariants":true},{"id":933,"country":"DE","sex":"F","name":"Nancy Pinilla Henríquez","first":"Nancy","surname":"Pinilla","age":60,"birthDate":"16/04/1966","noVariants":true},{"id":934,"country":"IT","sex":"M","name":"Felipe Pinilla Molina","first":"Felipe","surname":"Pinilla","age":21,"birthDate":"23/09/2005","noVariants":true},{"id":935,"country":"PE","sex":"F","name":"Ruth Campos Valenzuela","first":"Ruth","surname":"Campos","age":44,"birthDate":"03/05/1982","noVariants":true},{"id":936,"country":"VE","sex":"M","name":"Daniel Campos Torres","first":"Daniel","surname":"Campos","age":67,"birthDate":"10/01/1959","noVariants":true},{"id":937,"country":"CN","sex":"F","name":"Francisca Hormazábal","first":"Francisca","surname":"Hormazábal","age":28,"birthDate":"17/06/1998","noVariants":true},{"id":938,"country":"DE","sex":"M","name":"Diego Hormazábal Ahumada","first":"Diego","surname":"Hormazábal","age":51,"birthDate":"24/02/1975","noVariants":true},{"id":939,"country":"IT","sex":"F","name":"Florencia Molina Fierro","first":"Florencia","surname":"Molina","age":74,"birthDate":"04/07/1952","noVariants":true},{"id":940,"country":"PE","sex":"M","name":"Walter Molina Nahuelquín","first":"Walter","surname":"Molina","age":35,"birthDate":"11/03/1991","noVariants":true},{"id":941,"country":"VE","sex":"F","name":"Lissette Sanhueza Sepúlveda","first":"Lissette","surname":"Sanhueza","age":58,"birthDate":"18/08/1968","noVariants":true},{"id":942,"country":"CL","sex":"M","name":"Emilio Sanhueza Parra","first":"Emilio","surname":"Sanhueza","age":81,"birthDate":"25/04/1945","noVariants":true},{"id":943,"country":"CL","sex":"F","name":"Mariela Duarte Mella","first":"Mariela","surname":"Duarte","age":42,"birthDate":"05/09/1984","noVariants":true},{"id":944,"country":"CL","sex":"M","name":"Iván Duarte Escobar","first":"Iván","surname":"Duarte","age":65,"birthDate":"12/05/1961","noVariants":true},{"id":945,"country":"CL","sex":"F","name":"Solange Lizama Mansilla","first":"Solange","surname":"Lizama","age":26,"birthDate":"19/01/2000","noVariants":true},{"id":946,"country":"CL","sex":"M","name":"Vicente Lizama Maturana","first":"Vicente","surname":"Lizama","age":49,"birthDate":"26/06/1977","noVariants":true},{"id":947,"country":"CL","sex":"F","name":"Ingrid Olivares Ibáñez","first":"Ingrid","surname":"Olivares","age":72,"birthDate":"06/02/1954","noVariants":true},{"id":948,"country":"CL","sex":"M","name":"Rolando Olivares Gallardo","first":"Rolando","surname":"Olivares","age":33,"birthDate":"13/07/1993","noVariants":true},{"id":949,"country":"CL","sex":"F","name":"Carolina Ávalos Lara","first":"Carolina","surname":"Ávalos","age":56,"birthDate":"20/03/1970","noVariants":true},{"id":950,"country":"CL","sex":"M","name":"Omar Ávalos Aguirre","first":"Omar","surname":"Ávalos","age":79,"birthDate":"27/08/1947","noVariants":true},{"id":951,"country":"CL","sex":"F","name":"Esther Gormaz Soza","first":"Esther","surname":"Gormaz","age":40,"birthDate":"07/04/1986","noVariants":true},{"id":952,"country":"CL","sex":"M","name":"Alex Gormaz Tello","first":"Alex","surname":"Gormaz","age":63,"birthDate":"14/09/1963","noVariants":true},{"id":953,"country":"CL","sex":"F","name":"Gladys Meza Jorquera","first":"Gladys","surname":"Meza","age":24,"birthDate":"21/05/2002","noVariants":true},{"id":954,"country":"CL","sex":"M","name":"Antonio Meza Painemal","first":"Antonio","surname":"Meza","age":47,"birthDate":"01/01/1979","noVariants":true},{"id":955,"country":"CL","sex":"F","name":"Norma Robles Tapia","first":"Norma","surname":"Robles","age":70,"birthDate":"08/06/1956","noVariants":true},{"id":956,"country":"CL","sex":"M","name":"Benjamín Robles Salinas","first":"Benjamín","surname":"Robles","age":31,"birthDate":"15/02/1995","noVariants":true},{"id":957,"country":"CL","sex":"F","name":"Aida Cid Cornejo","first":"Aida","surname":"Cid","age":54,"birthDate":"22/07/1972","noVariants":true},{"id":958,"country":"CL","sex":"M","name":"David Cid Riquelme","first":"David","surname":"Cid","age":77,"birthDate":"02/03/1949","noVariants":true},{"id":959,"country":"CL","sex":"F","name":"Carmen Illanes Alvarado","first":"Carmen","surname":"Illanes","age":38,"birthDate":"09/08/1988","noVariants":true},{"id":960,"country":"CL","sex":"M","name":"Héctor Illanes Poblete","first":"Héctor","surname":"Illanes","age":61,"birthDate":"16/04/1965","noVariants":true},{"id":961,"country":"CL","sex":"F","name":"Pilar Montecinos Concha","first":"Pilar","surname":"Montecinos","age":22,"birthDate":"23/09/2004","noVariants":true},{"id":962,"country":"CL","sex":"M","name":"Guillermo Montecinos Carmona","first":"Guillermo","surname":"Montecinos","age":45,"birthDate":"03/05/1981","noVariants":true},{"id":963,"country":"CL","sex":"F","name":"Sonia Vallejos Meza","first":"Sonia","surname":"Vallejos","age":68,"birthDate":"10/01/1958","noVariants":true},{"id":964,"country":"CL","sex":"M","name":"Cristián Vallejos Rebolledo","first":"Cristián","surname":"Vallejos","age":29,"birthDate":"17/06/1997","noVariants":true},{"id":965,"country":"CL","sex":"F","name":"Susana Farfán Urrutia","first":"Susana","surname":"Farfán","age":52,"birthDate":"24/02/1974","noVariants":true},{"id":966,"country":"CL","sex":"M","name":"Rafael Farfán Navarrete","first":"Rafael","surname":"Farfán","age":75,"birthDate":"04/07/1951","noVariants":true},{"id":967,"country":"CL","sex":"F","name":"Patricia Mancilla Merino","first":"Patricia","surname":"Mancilla","age":36,"birthDate":"11/03/1990","noVariants":true},{"id":968,"country":"CL","sex":"M","name":"Roberto Mancilla Alarcón","first":"Roberto","surname":"Mancilla","age":59,"birthDate":"18/08/1967","noVariants":true},{"id":969,"country":"CL","sex":"F","name":"Marcela Ovalle Vergara","first":"Marcela","surname":"Ovalle","age":20,"birthDate":"25/04/2006","noVariants":true},{"id":970,"country":"CL","sex":"M","name":"Marcelo Ovalle Orrego","first":"Marcelo","surname":"Ovalle","age":43,"birthDate":"05/09/1983","noVariants":true},{"id":971,"country":"CL","sex":"F","name":"Sara Cáceres Naranjo","first":"Sara","surname":"Cáceres","age":66,"birthDate":"12/05/1960","noVariants":true},{"id":972,"country":"CL","sex":"M","name":"Enrique Cáceres Carvajal","first":"Enrique","surname":"Cáceres","age":27,"birthDate":"19/01/1999","noVariants":true},{"id":973,"country":"CL","sex":"F","name":"Nancy Hermosilla Pavez","first":"Nancy","surname":"Hermosilla","age":50,"birthDate":"26/06/1976","noVariants":true},{"id":974,"country":"CL","sex":"M","name":"Felipe Hermosilla Cárcamo","first":"Felipe","surname":"Hermosilla","age":73,"birthDate":"06/02/1953","noVariants":true},{"id":975,"country":"CL","sex":"F","name":"Ruth Miranda Burgos","first":"Ruth","surname":"Miranda","age":34,"birthDate":"13/07/1992","noVariants":true},{"id":976,"country":"CL","sex":"M","name":"Daniel Miranda Oyarzo","first":"Daniel","surname":"Miranda","age":57,"birthDate":"20/03/1969","noVariants":true},{"id":977,"country":"CL","sex":"F","name":"Francisca Salgado Pinto","first":"Francisca","surname":"Salgado","age":80,"birthDate":"27/08/1946","noVariants":true},{"id":978,"country":"CL","sex":"M","name":"Diego Salgado Barrientos","first":"Diego","surname":"Salgado","age":41,"birthDate":"07/04/1985","noVariants":true},{"id":979,"country":"CL","sex":"F","name":"Florencia Cuadra Cofré","first":"Florencia","surname":"Cuadra","age":64,"birthDate":"14/09/1962","noVariants":true},{"id":980,"country":"CL","sex":"M","name":"Walter Cuadra Paredes","first":"Walter","surname":"Cuadra","age":25,"birthDate":"21/05/2001","noVariants":true},{"id":981,"country":"CL","sex":"F","name":"Lissette León Villar","first":"Lissette","surname":"León","age":48,"birthDate":"01/01/1978","noVariants":true},{"id":982,"country":"CL","sex":"M","name":"Emilio León Rojas","first":"Emilio","surname":"León","age":71,"birthDate":"08/06/1955","noVariants":true},{"id":983,"country":"CL","sex":"F","name":"Mariela Ojeda Bustos","first":"Mariela","surname":"Ojeda","age":32,"birthDate":"15/02/1994","noVariants":true},{"id":984,"country":"CL","sex":"M","name":"Iván Ojeda Bravo","first":"Iván","surname":"Ojeda","age":55,"birthDate":"22/07/1971","noVariants":true},{"id":985,"country":"CL","sex":"F","name":"Solange Astudillo Yáñez","first":"Solange","surname":"Astudillo","age":78,"birthDate":"02/03/1948","noVariants":true},{"id":986,"country":"CL","sex":"M","name":"Vicente Astudillo Valdivia","first":"Vicente","surname":"Astudillo","age":39,"birthDate":"09/08/1987","noVariants":true},{"id":987,"country":"CL","sex":"F","name":"Ingrid González Medina","first":"Ingrid","surname":"González","age":62,"birthDate":"16/04/1964","noVariants":true},{"id":988,"country":"CL","sex":"M","name":"Rolando González Campos","first":"Rolando","surname":"González","age":23,"birthDate":"23/09/2003","noVariants":true},{"id":989,"country":"CL","sex":"F","name":"Carolina Marin Hormazábal","first":"Carolina","surname":"Marin","age":46,"birthDate":"03/05/1980","noVariants":true},{"id":990,"country":"CL","sex":"M","name":"Omar Marin Silva","first":"Omar","surname":"Marin","age":69,"birthDate":"10/01/1957","noVariants":true},{"id":991,"country":"CL","sex":"F","name":"Esther Pinilla Rivas","first":"Esther","surname":"Pinilla","age":30,"birthDate":"17/06/1996","noVariants":true},{"id":992,"country":"CL","sex":"M","name":"Alex Pinilla Cares","first":"Alex","surname":"Pinilla","age":53,"birthDate":"24/02/1973","noVariants":true},{"id":993,"country":"CL","sex":"F","name":"Gladys Campos Veloso","first":"Gladys","surname":"Campos","age":76,"birthDate":"04/07/1950","noVariants":true},{"id":994,"country":"CL","sex":"M","name":"Antonio Campos Arce","first":"Antonio","surname":"Campos","age":37,"birthDate":"11/03/1989","noVariants":true},{"id":995,"country":"CL","sex":"F","name":"Norma Hormazábal Albarrán","first":"Norma","surname":"Hormazábal","age":60,"birthDate":"18/08/1966","noVariants":true},{"id":996,"country":"CL","sex":"M","name":"Benjamín Hormazábal Fuentes","first":"Benjamín","surname":"Hormazábal","age":21,"birthDate":"25/04/2005","noVariants":true},{"id":997,"country":"CL","sex":"F","name":"Aida Molina Pino","first":"Aida","surname":"Molina","age":44,"birthDate":"05/09/1982","noVariants":true},{"id":998,"country":"CL","sex":"M","name":"David Molina Lagos","first":"David","surname":"Molina","age":67,"birthDate":"12/05/1959","noVariants":true},{"id":999,"country":"CL","sex":"F","name":"Carmen Sanhueza Aravena","first":"Carmen","surname":"Sanhueza","age":28,"birthDate":"19/01/1998","noVariants":true},{"id":1000,"country":"CL","sex":"M","name":"Héctor Sanhueza Olivares","first":"Héctor","surname":"Sanhueza","age":51,"birthDate":"26/06/1975","noVariants":true},{"id":1001,"country":"CL","sex":"F","name":"Pilar Duarte Garrido","first":"Pilar","surname":"Duarte","age":74,"birthDate":"06/02/1952","noVariants":true},{"id":1002,"country":"CL","sex":"M","name":"Guillermo Duarte Zúñiga","first":"Guillermo","surname":"Duarte","age":35,"birthDate":"13/07/1991","noVariants":true},{"id":1003,"country":"CL","sex":"F","name":"Sonia Lizama Soto","first":"Sonia","surname":"Lizama","age":58,"birthDate":"20/03/1968","noVariants":true},{"id":1004,"country":"CL","sex":"M","name":"Cristián Lizama Soto","first":"Cristián","surname":"Lizama","age":81,"birthDate":"27/08/1945","noVariants":true},{"id":1005,"country":"CL","sex":"F","name":"Susana Olivares Moya","first":"Susana","surname":"Olivares","age":42,"birthDate":"07/04/1984","noVariants":true},{"id":1006,"country":"CL","sex":"M","name":"Rafael Olivares Millar","first":"Rafael","surname":"Olivares","age":65,"birthDate":"14/09/1961","noVariants":true},{"id":1007,"country":"PE","sex":"M","name":"Marcelo González Opazo","first":"Marcelo","surname":"González","age":53,"birthDate":"22/07/1973","noVariants":true,"lookalikeOf":930},{"id":1008,"country":"IT","sex":"M","name":"Felipe Pinilla Molina","first":"Felipe","surname":"Pinilla","age":21,"birthDate":"23/09/2005","noVariants":true,"lookalikeOf":934},{"id":1009,"country":"DE","sex":"M","name":"Diego Hormazábal Ahumada","first":"Diego","surname":"Hormazábal","age":51,"birthDate":"24/02/1975","noVariants":true,"lookalikeOf":938},{"id":1010,"country":"CL","sex":"M","name":"Emilio Sanhueza Parra","first":"Emilio","surname":"Sanhueza","age":81,"birthDate":"25/04/1945","noVariants":true,"lookalikeOf":942},{"id":1011,"country":"CL","sex":"M","name":"Vicente Lizama Maturana","first":"Vicente","surname":"Lizama","age":49,"birthDate":"26/06/1977","noVariants":true,"lookalikeOf":946},{"id":1012,"country":"CL","sex":"M","name":"Omar Ávalos Aguirre","first":"Omar","surname":"Ávalos","age":79,"birthDate":"27/08/1947","noVariants":true,"lookalikeOf":950},{"id":1013,"country":"CL","sex":"M","name":"Antonio Meza Painemal","first":"Antonio","surname":"Meza","age":47,"birthDate":"01/01/1979","noVariants":true,"lookalikeOf":954},{"id":1014,"country":"CL","sex":"M","name":"David Cid Riquelme","first":"David","surname":"Cid","age":77,"birthDate":"02/03/1949","noVariants":true,"lookalikeOf":958},{"id":1015,"country":"CL","sex":"M","name":"Guillermo Montecinos Carmona","first":"Guillermo","surname":"Montecinos","age":45,"birthDate":"03/05/1981","noVariants":true,"lookalikeOf":962},{"id":1016,"country":"CL","sex":"M","name":"Rafael Farfán Navarrete","first":"Rafael","surname":"Farfán","age":75,"birthDate":"04/07/1951","noVariants":true,"lookalikeOf":966},{"id":1017,"country":"CL","sex":"M","name":"Marcelo Ovalle Orrego","first":"Marcelo","surname":"Ovalle","age":43,"birthDate":"05/09/1983","noVariants":true,"lookalikeOf":970},{"id":1018,"country":"CL","sex":"M","name":"Felipe Hermosilla Cárcamo","first":"Felipe","surname":"Hermosilla","age":73,"birthDate":"06/02/1953","noVariants":true,"lookalikeOf":974},{"id":1019,"country":"CL","sex":"M","name":"Diego Salgado Barrientos","first":"Diego","surname":"Salgado","age":41,"birthDate":"07/04/1985","noVariants":true,"lookalikeOf":978},{"id":1020,"country":"CL","sex":"M","name":"Emilio León Rojas","first":"Emilio","surname":"León","age":71,"birthDate":"08/06/1955","noVariants":true,"lookalikeOf":982},{"id":1021,"country":"CL","sex":"M","name":"Vicente Astudillo Valdivia","first":"Vicente","surname":"Astudillo","age":39,"birthDate":"09/08/1987","noVariants":true,"lookalikeOf":986},{"id":1022,"country":"CL","sex":"M","name":"Omar Marin Silva","first":"Omar","surname":"Marin","age":69,"birthDate":"10/01/1957","noVariants":true,"lookalikeOf":990},{"id":1023,"country":"CL","sex":"M","name":"Antonio Campos Arce","first":"Antonio","surname":"Campos","age":37,"birthDate":"11/03/1989","noVariants":true,"lookalikeOf":994},{"id":1024,"country":"CL","sex":"M","name":"David Molina Lagos","first":"David","surname":"Molina","age":67,"birthDate":"12/05/1959","noVariants":true,"lookalikeOf":998},{"id":1025,"country":"CL","sex":"M","name":"Guillermo Duarte Zúñiga","first":"Guillermo","surname":"Duarte","age":35,"birthDate":"13/07/1991","noVariants":true,"lookalikeOf":1002},{"id":1026,"country":"CL","sex":"M","name":"Rafael Olivares Millar","first":"Rafael","surname":"Olivares","age":65,"birthDate":"14/09/1961","noVariants":true,"lookalikeOf":1006}]);
const NEW_CAST_START=600;
const NEW_CAST_RATE=0.3;
// Carnet alternativo (otra apariencia, huella NO coincidente) para casos de identidad falsa: id de ficha -> sufijo del archivo cast_NNN_<sufijo>.webp
const FAKE_CARNETS={618:'idfalso',630:'idfalso'};
// Variantes (ids 690–699 y 740–749): la persona del carnet es la base, pero se presenta con otro look. 20 % de las veces la huella NO coincide.
const VARIANT_IMPOSTOR_CHANCE=0.2;
const VARIANT_IMPOSTOR_KINDS=['correct','carvedilol','controlled','check','electronic','retainedCommon'];

// Prefer unseen portraits and keep the selected nationality when its catalog is exhausted.
function pickCatalogEntry(p,seen=[]){
 if(p.kind==='underage')return pickYoungPortrait(p,seen);
 if(p.kind==='fakeid'){
  const fsex=p.face==='male'?'M':'F';
  const fk=CAST600.filter(r=>FAKE_CARNETS[r.id]&&r.sex===fsex&&!seen.includes(r.id));
  if(fk.length&&Math.random()<(fsex==='M'?1:0.5))return fk[Math.floor(Math.random()*fk.length)];
 }
 const code=p.nationalityCode||'CL';
 const sex=p.face==='male'?'M':'F';
 let country=CAST600.filter(r=>r.country===code&&!r.pending&&!r.special&&!r.minorOnly&&(!p.appearanceStyle||r.lookalikeOf!=null)&&!(p.kind==='fakeid'&&r.lookalikeOf!=null));
 if(p.appearanceStyle&&!country.filter(r=>r.sex===sex).length)country=CAST600.filter(r=>r.country==='CL'&&r.lookalikeOf!=null&&!r.pending&&!r.special&&!r.minorOnly);
 const seenKeys=new Set(seen.map(id=>{const r=CAST600[id];return r?(r.lookalikeOf??r.id):id}));
 const available=country.filter(r=>!seenKeys.has(r.lookalikeOf??r.id));
 const candidates=available.length?available:country;
 const sameSex=candidates.filter(r=>r.sex===sex);
 const pool=sameSex.length?sameSex:candidates;

 const fresh=pool.filter(r=>r.id>=NEW_CAST_START&&!seenKeys.has(r.lookalikeOf??r.id));
 if(fresh.length&&Math.random()<NEW_CAST_RATE)return fresh[Math.floor(Math.random()*fresh.length)];
 return pool[Math.floor(Math.random()*pool.length)]||null;
}
const MINOR_BIRTH_DATE='09/09/2009';
const YOUNG_PORTRAIT_MAX_AGE=22;
const YOUNG_PORTRAITS=CAST600.filter(rec=>rec.age<=YOUNG_PORTRAIT_MAX_AGE&&!rec.pending&&!rec.special&&rec.lookalikeOf==null);
const YOUNG_FOREIGN_NATIONALITY_WEIGHTS=FOREIGN_NATIONALITY_WEIGHTS.filter(
 ([code])=>YOUNG_PORTRAITS.some(rec=>rec.country===code)
);
function pickYoungPortrait(p,seen){
 const sex=p.face==='male'?'M':'F';
 const country=YOUNG_PORTRAITS.filter(rec=>rec.country===p.nationalityCode);
 const candidates=country.length?country:YOUNG_PORTRAITS;
 const sameSex=candidates.filter(rec=>rec.sex===sex);
 const matching=sameSex.length?sameSex:candidates;
 const unused=matching.filter(rec=>!seen.includes(rec.id));
 const pool=unused.length?unused:matching;
 // Personaje fijo: el menor de edad es siempre Benjamín Hidalgo Carrasco (hijo de Óscar Hidalgo Campos).
 const benjamin=CAST600.find(rec=>rec&&rec.minorOnly);
 if(benjamin)return benjamin;
 return pool[(p.portraitSeed>>>0)%pool.length];
}
function catalogBirthDate(p,rec){
 return p.kind==='underage'?MINOR_BIRTH_DATE:rec.birthDate;
}
// El catálogo guarda solo el primer apellido; el carnet muestra los dos, como en la receta.
function catalogSurnames(rec){
 const name=String(rec.name||'').trim(),first=String(rec.first||'').trim();
 if(first&&name.startsWith(first+' ')){const rest=name.slice(first.length).trim();if(rest)return rest}
 return rec.surname;
}
function applyCatalogIdentity(p,rec,{preserveName=false}={}){
 if(!p||!rec)return;
 p.catalogId=rec.id;
 if(!preserveName){p.name=rec.name;p.firstNames=rec.first;p.surnames=catalogSurnames(rec);}
 p.nationalityCode=rec.country;
 p.face=rec.sex==='M'?'male':'female';
 p.birthDate=catalogBirthDate(p,rec);
 p.portraitModel=1000+rec.id;
 p.idPortraitModel=p.portraitModel;
 if(rec.lookalikeOf!=null&&p.kind!=='fakeid'){
  p.idCatalogId=rec.lookalikeOf;
  if(typeof p.variantImpostor!=='boolean')p.variantImpostor=VARIANT_IMPOSTOR_KINDS.includes(p.kind)&&Math.random()<VARIANT_IMPOSTOR_CHANCE;

 }else if(rec.lookalikeOf==null){delete p.idCatalogId;delete p.variantImpostor}
 if(p.kind==='fakeid'){
  delete p.fakeIdCarnetFile;if(FAKE_CARNETS[rec.id])p.fakeIdCarnetFile=`cast_${String(rec.id).padStart(3,'0')}_${FAKE_CARNETS[rec.id]}`;
  const alternatives=CAST600.filter(candidate=>candidate.id!==rec.id&&!candidate.pending&&!candidate.special&&!candidate.minorOnly&&candidate.lookalikeOf==null);
  const sameCountryAndSex=alternatives.filter(candidate=>candidate.country===rec.country&&candidate.sex===rec.sex);
  const sameSex=alternatives.filter(candidate=>candidate.sex===rec.sex);
  const pool=sameCountryAndSex.length?sameCountryAndSex:sameSex.length?sameSex:alternatives;
  const closest=pool.reduce((best,candidate)=>!best||Math.abs(candidate.age-rec.age)<Math.abs(best.age-rec.age)?candidate:best,null);
  if(closest){
   p.fakeIdCatalogId=closest.id;
   p.idPortraitModel=1000+closest.id;
  }else{
   delete p.fakeIdCatalogId;
   p.idPortraitModel=(rec.sex==='M'?MALE_BASES[0]:FEMALE_BASES[0])*20;
  }
 }
}
const STAGE_PORTRAIT_ALTERNATES=new Set([18,30,42,126,138,198,210,222,282,294,306,318,342,354,366,378,462,474,486,498,522,534,546,558,570,582,594]);
const PATIENT_ASSET_COUNT=320;
const FEMALE_BASES=[2,4,11,7,6,14,10,0];
const MALE_BASES=[3,5,9,15,12,13,1,8];
const PATIENT_AGES=[79,74,29,37,36,25,47,57,76,42,75,31,23,69,28,30];
function avatarSrc(model){
  const id=((Number(model)||0)%PATIENT_ASSET_COUNT+PATIENT_ASSET_COUNT)%PATIENT_ASSET_COUNT;
  return assetUrl(`assets/patients/patient_${String(id).padStart(3,'0')}.webp`);
}
function portraitImg(model,alt='Retrato ficticio del paciente',mode='stage'){
  const normalizedModel=mode==='id'?Math.floor(Number(model||0)/20)*20:model;
  const id=((Number(normalizedModel)||0)%PATIENT_ASSET_COUNT+PATIENT_ASSET_COUNT)%PATIENT_ASSET_COUNT;
  const key='patient_'+String(id).padStart(3,'0');
  const src=avatarSrc(normalizedModel);
  return `<img class="patient-portrait ${mode==='id'?'id-photo-pixel':''}" data-portrait="${key}" src="${src}" alt="${escapeText(alt)}" draggable="false" loading="eager">`;
}
function subjectPortrait(p,mode='stage'){
  if(p?.kind==='rufus')return `<img class="patient-portrait rufus-portrait" src="${assetUrl('assets/patients/rufus.webp')}" alt="Rufus" draggable="false">`;
  if(p?.kind==='sicolasMuros'){
   const file=mode==='id'?'sicolas-muros-id.webp':'sicolas-muros.webp';
   return `<img class="patient-portrait ${mode==='id'?'id-photo-pixel':''}" src="${assetUrl('assets/patients/'+file)}" alt="Sicolás Muros" draggable="false">`;
  }
  if(p?.kind==='donVictor')return `<img class="patient-portrait don-victor-portrait" src="${assetUrl('assets/patients/don-victor.webp')}" alt="Don Victor" draggable="false">`;
  if(p?.kind==='tuguelExpired'||p?.kind==='tuguelFake'){const asset=mode==='id'?'assets/patients/tuguel_id.webp':'assets/patients/tuguel_lacras.webp';return `<img class="patient-portrait tuguel-portrait ${mode==='id'?'id-photo-pixel':''}" src="${assetUrl(asset)}" alt="Retrato de Tuguel Pagaba" draggable="false">`;}
  if(p?.kind==='chemy'){const asset=mode==='id'?'assets/patients/chemy_id.webp':'assets/patients/chemy.webp';return `<img class="patient-portrait chemy-portrait ${mode==='id'?'id-photo-pixel':''}" src="${assetUrl(asset)}" alt="Chemy Araucanía" draggable="false">`;}
  if(p?.kind==='clubNocturno'){return `<img class="patient-portrait special-club-portrait" src="${assetUrl('assets/patients/visitante_club_busto.webp')}" alt="Visitante del club nocturno sin gafas" draggable="false">`;}
  if(p?.kind==='chinese'){return `<img class="patient-portrait special-nomeh-portrait" src="${assetUrl('assets/patients/nomeh_busto.webp')}" alt="No-Meh Wei, anciano de barba blanca" draggable="false">`;}
  if(p?.kind==='specialCarlos'){
    const src=assetUrl(mode==='id'?'assets/patients/carlos_id.webp':'assets/patients/carlos_sin_lentes_busto.png');
    return `<img class="patient-portrait ${mode==='id'?'id-photo-pixel':''}" src="${src}" alt="${escapeText(mode==='id'?'Fotografía de Carlos, frontal y sin accesorios':'Carlos Neira Ibacache, polerón negro')}" draggable="false">`;
  }
  if(mode==='id'&&p?.kind==='fakeid'&&p.fakeIdCarnetFile){const key=p.fakeIdCarnetFile;return `<img class="patient-portrait cast600-portrait id-photo-pixel" data-portrait="${key}" src="${assetUrl(`assets/cast600/${key}.webp`)}" alt="Foto frontal de documento" draggable="false" loading="eager">`;}
  const useId=mode==='id'&&p?.kind==='fakeid'?p.fakeIdCatalogId:mode==='id'&&Number.isInteger(p?.idCatalogId)?p.idCatalogId:p?.catalogId;
  if(Number.isInteger(useId)&&useId>=0&&CAST600[useId]){
    const sprite=mode==='id'?'id':useId>=NEW_CAST_START?'stage':p.appearanceStyle==='cabello'?'cabello':p.appearanceStyle==='tiempo'?'tiempo':'stage';
    const variant=sprite==='stage'&&STAGE_PORTRAIT_ALTERNATES.has(useId)?'id':sprite;
    const key=`cast_${String(useId).padStart(3,'0')}_${variant}`;
    const src=assetUrl(`assets/cast600/${key}.webp`);
    return `<img class="patient-portrait cast600-portrait ${mode==='id'?'id-photo-pixel':''}" data-portrait="${key}" src="${src}" alt="${escapeText(mode==='id'?'Foto frontal de documento':`Paciente ${p.name}`)}" draggable="false" loading="eager">`;
  }
  if(Number.isInteger(p?.extraPortraitId) && !(p.kind==='fakeid' && mode==='id')){
    const src=assetUrl(`assets/patients/international_${String(p.extraPortraitId).padStart(2,'0')}.png`);
    return `<img class="patient-portrait international-portrait ${mode==='id'?'id-photo-pixel':''}" src="${src}" alt="${escapeText(mode==='id'?'Fotografía frontal':'Paciente '+p.name)}" draggable="false">`;
  }
 const model=mode==='id'?p.idPortraitModel:p.portraitModel;
 // The same face can have a different haircut, clothing or apparent age years later.
 if(mode==='stage' && p.appearanceStyle && Number.isInteger(model)){
  const base=Math.floor(model/20);
  const key=`look_${String(base).padStart(2,'0')}_${p.appearanceStyle}`;
  const src=assetUrl(`assets/patients/${key}.webp`);
  return `<img class="patient-portrait appearance-variant" data-portrait="${key}" src="${src}" alt="${escapeText('Paciente '+p.name)}" draggable="false" loading="eager">`;
 }
 return portraitImg(model,mode==='id'?'Fotografía frontal del paciente':`Paciente ${p.name}`,mode);
}

function assignPatientModel(p){
 if(!p)return;
 game.characterRegistry=game.characterRegistry||{};
 game.characterCounter=game.characterCounter||{female:0,male:0};
 game.usedVisualModels=game.usedVisualModels||[];
 game.usedIdentityNames=game.usedIdentityNames||[];
 game.usedExtraPortraits=game.usedExtraPortraits||[];
 game.usedCatalogIds=game.usedCatalogIds||[];
 if(!['specialCarlos','chinese','clubNocturno','tuguelExpired','tuguelFake','sicolasMuros','rufus','aluminio','tarotera','abuelo','chemy'].includes(p.kind)){
  if(!Number.isInteger(p.catalogId)){
   const rec=pickCatalogEntry(p,game.usedCatalogIds);
   if(rec)applyCatalogIdentity(p,rec);
  }
  if(Number.isInteger(p.catalogId)&&!game.usedCatalogIds.includes(p.catalogId))game.usedCatalogIds.push(p.catalogId);
  if(p.name&&!game.usedIdentityNames.includes(p.name))game.usedIdentityNames.push(p.name);
  if(p.name)game.characterRegistry[p.name]=p.portraitModel;
  return;
 }
 if(p.nationalityCode && p.nationalityCode!=='CL' && p.kind!=='specialCarlos' && !p.appearanceStyle && p.kind!=='fakeid' && p.extraPortraitId===undefined){
  const available=(INTERNATIONAL_SPRITES[p.face]||[]).filter(n=>!game.usedExtraPortraits.includes(n));
  if(available.length && Math.random()<0.30){p.extraPortraitId=available[Math.floor(Math.random()*available.length)];game.usedExtraPortraits.push(p.extraPortraitId)}
 }
 if(Number.isInteger(p.extraPortraitId)&&!game.usedExtraPortraits.includes(p.extraPortraitId))game.usedExtraPortraits.push(p.extraPortraitId);
 if(Number.isInteger(p.extraPortraitId)&&!p.birthDate){
  const spriteAges={0:32,1:29,2:34,3:54,4:30,5:39,6:32,7:68,8:29,9:30,10:32,11:62};
  const years=spriteAges[p.extraPortraitId]||34;
  const month=String((p.portraitSeed%12)+1).padStart(2,'0');
  const day=String((p.portraitSeed%27)+1).padStart(2,'0');
  p.birthDate=`${day}/${month}/${2026-years}`;
 }
 if(p.portraitModel===undefined||p.portraitModel===null){
  if(p.kind==='specialCarlos')p.portraitModel=0;
  else if(Object.prototype.hasOwnProperty.call(game.characterRegistry,p.name))p.portraitModel=game.characterRegistry[p.name];
  else{
   const gender=p.face==='male'?'male':'female';
   const bases=gender==='male'?MALE_BASES:FEMALE_BASES;
   const options=[];
   for(const base of bases)for(let v=0;v<20;v++){
    const model=base*20+v;
    if(!game.usedVisualModels.includes(model))options.push(model);
   }
   if(options.length){p.portraitModel=options[Math.floor(Math.random()*options.length)];}
   else {const count=game.characterCounter[gender]++;p.portraitModel=bases[Math.floor(count/20)%bases.length]*20+(count%20);}
  }
 }
 if(p.kind!=='specialCarlos'&&!game.usedVisualModels.includes(p.portraitModel))game.usedVisualModels.push(p.portraitModel);
 if(p.name && !game.usedIdentityNames.includes(p.name))game.usedIdentityNames.push(p.name);
 if(p.name)game.characterRegistry[p.name]=p.portraitModel;
 if(p.idPortraitModel===undefined||p.idPortraitModel===null){
  const same=!(p.kind==='fakeid'||p.idPortraitSeed!==p.portraitSeed);
  const bases=p.face==='male'?MALE_BASES:FEMALE_BASES;
  const base=Math.floor(p.portraitModel/20), i=bases.indexOf(base);
  const otherBase=bases[((i<0?0:i)+3)%bases.length];
  p.idPortraitModel=same?p.portraitModel:otherBase*20+(p.portraitModel%20);
 }
}
// Calendario simulado. Regla de esta campaña: 7 u 8 años de vigencia por cédula.
function parseCalendarDate(value){
 const match=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec(String(value||''));
 if(!match)return null;
 const d=new Date(Date.UTC(Number(match[3]),Number(match[2])-1,Number(match[1])));
 return d.getUTCFullYear()===Number(match[3])&&d.getUTCMonth()===Number(match[2])-1&&d.getUTCDate()===Number(match[1])?d:null;
}
function printableDate(d){return z(d.getUTCDate())+'/'+z(d.getUTCMonth()+1)+'/'+d.getUTCFullYear()}
function shiftYears(d,years){const target=new Date(d.getTime()); const day=target.getUTCDate();target.setUTCDate(1);target.setUTCFullYear(target.getUTCFullYear()+years);const month=target.getUTCMonth();target.setUTCDate(Math.min(day,new Date(Date.UTC(target.getUTCFullYear(),month+1,0)).getUTCDate()));return target}
// Vigencia de la receta (regla del juego): controlados, cheque y retenidos sin libro (antibióticos, corticoides, antifúngicos, antiparasitarios), un mes calendario; el resto, seis meses.
function rxValidityMonths(p){const d=DRUGS[p?.drug];if(!d)return 6;if(d.kind==='CHEQUE'||d.kind==='RETENIDA'||d.book)return 1;if(d.kind==='RETENIDA_COMUN')return 1;return 6}
function addCalendarMonths(date,m){const day=date.getUTCDate();const t=new Date(Date.UTC(date.getUTCFullYear(),date.getUTCMonth()+m,1));const last=new Date(Date.UTC(t.getUTCFullYear(),t.getUTCMonth()+1,0)).getUTCDate();t.setUTCDate(Math.min(day,last));return t}
function rxExpiryDate(p){const i=parseCalendarDate(p?.rxDate);return i?addCalendarMonths(i,rxValidityMonths(p)):null}
function rxIsExpired(p,day=game.day){const e=rxExpiryDate(p),t=parseCalendarDate(dateOf(day));return Boolean(e&&t&&e<t)}
function rxValidityLabel(p){return rxValidityMonths(p)===1?'1 mes':'6 meses'}
function rxExpiredDate(months,extra){const t=parseCalendarDate(dateOf(game.day));return printableDate(advanceDays(addCalendarMonths(t,-months),-extra))}
function advanceDays(d,n){const target=new Date(d.getTime());target.setUTCDate(target.getUTCDate()+n);return target}
// Personajes nuevos: cuanto mayor se ve la persona, más antiguo es su carnet (siempre vigente).
function visualAgeIssueRange(rec){
 if(!rec||rec.id<NEW_CAST_START)return null;
 return rec.age>=65?[1570,2400]:rec.age>=45?[800,1640]:rec.age>=30?[400,1000]:[110,800];
}
function initializeIdentityDocument(p,day=game?.day||1){
 if(!p||['chinese','giftPaper','clubNocturno','tarotera','abuelo','bribe','donVictor'].includes(p.kind))return;
 if(!p.documentNumber){
  const seed=(Number(p.portraitSeed)||412501)>>>0;
  const salted=(Math.imul(seed,1664525)+1013904223)>>>0;
  p.documentNumber=String(1000000000+salted);
 }
 if(!p.nationalityCode)p.nationalityCode='CL';
 if(p.registeredBirthDate==null)p.registeredBirthDate=p.birthDate;
 if(p.idDateSystem===2 && p.idIssued && p.idExpires && p.birthDate && p.idSex && p.confirmedIdSex)return;
 const dayNumber=Math.max(1,Number(day)||1);
 const now=parseCalendarDate(dateOf(dayNumber));
 const seed=(Number(p.portraitSeed)||314159)>>>0;
 const validityYears=7+(seed%2);
 let issued=advanceDays(now,-(150+((Math.floor(seed/11)+dayNumber*17)%1950)));
 const visualRange=visualAgeIssueRange(CAST600[p.catalogId]);
 if(visualRange&&!['idFuture','idExpired','idLastDay'].includes(p.kind))issued=advanceDays(now,-(visualRange[0]+((Math.floor(seed/11)+dayNumber*17)%(visualRange[1]-visualRange[0]))));
 if(p.kind==='idFuture')issued=advanceDays(now,1+(seed%240));
 if(p.kind==='idExpired')issued=advanceDays(shiftYears(now,-validityYears),-(1+(seed%120)));
 if(p.kind==='idLastDay')issued=shiftYears(now,-validityYears);
 p.idIssued=printableDate(issued);
 p.idExpires=printableDate(shiftYears(issued,validityYears));
 p.idValidityYears=validityYears;
 if(!p.birthDate){const base=Math.floor((p.portraitModel||0)/20);const age=PATIENT_AGES[base]||30;const bDay=String(seed%28+1).padStart(2,'0');const bMonth=String((Math.floor(seed/31)%12)+1).padStart(2,'0');p.birthDate=`${bDay}/${bMonth}/${2026-age}`;}
 // La discrepancia se genera entre dos CAMPOS registrales del caso. Nunca inferirla por la cara/ropa.
 p.confirmedIdSex=p.confirmedIdSex|| (p.face==='male'?'M':'F');
 p.idSex=p.kind==='idSexMismatch'?(p.confirmedIdSex==='F'?'M':'F'):p.confirmedIdSex;
 if(p.registeredBirthDate==null)p.registeredBirthDate=p.birthDate;
 p.idDateSystem=2;
}
function repairLegacyBirthDate(p,usedCatalogIds){
 if(!p||p.registeredBirthDate)return;
 const rec=CAST600[p.catalogId];
 if(!rec)return;
 if(p.kind==='underage'&&rec.age>YOUNG_PORTRAIT_MAX_AGE){
  const young=pickYoungPortrait(p,usedCatalogIds);
  applyCatalogIdentity(p,young,{preserveName:true});
 }else{
  p.birthDate=catalogBirthDate(p,rec);
 }
}
function invalidBirthDate(p){
 const registered=p.registeredBirthDate;
 return !parseCalendarDate(p.birthDate)||(registered&&p.birthDate!==registered);
}
function isForgedIdentityCase(p){return ['fakeid','tuguelFake','idBirthDateFraud','rufus'].includes(p.kind)||(p.variantImpostor===true&&!p.noDocument)}
function identityFingerprintMatches(p){
 return p.kind!=='fakeid'&&p.kind!=='tuguelFake'&&!(p.variantImpostor===true&&!p.noDocument)&&!String(p.docAuthenticity||'').startsWith('forged')&&!invalidBirthDate(p);
}
function usesForeignPrescriptionId(p){
 return Boolean(p?.nationalityCode&&p.nationalityCode!=='CL'&&p.rxType&&p.rxType!=='NINGUNA');
}
function initializeForeignPrescriptionId(p){
 if(!usesForeignPrescriptionId(p)||typeof p.rxForeignLabel==='boolean'||!p.documentNumber)return;
 const dni=String(p.documentNumber);
 const missingLabel=p.kind==='typo'&&p.portraitSeed%2===0;
 const wrongNumber=p.kind==='different'||(p.kind==='typo'&&!missingLabel);
 p.rxRut=wrongNumber?dni.slice(0,-1)+(dni.endsWith('0')?'1':'0'):dni;
 p.rxForeignLabel=!missingLabel;
 const issue=foreignPrescriptionIssue(p);
 if(issue)p.issue=issue;
}
function foreignPrescriptionIssue(p){
 if(!usesForeignPrescriptionId(p))return '';
 if(p.rxForeignLabel!==true)return 'La receta debe incluir la glosa (EXTRANJERO).';
 if(!p.documentNumber||String(p.rxRut)!==String(p.documentNumber))return 'El número en la receta no coincide con el DNI.';
 return '';
}
function rxPatientName(p){return p.rxPatientName||p.name}
function prescriptionPatientId(p){
 return escapeText(p.rxRut)+(usesForeignPrescriptionId(p)&&p.rxForeignLabel===true?' (EXTRANJERO)':'');
}
function fictionalIdDates(p){
 initializeIdentityDocument(p);
 return {birth:p.birthDate,issued:p.idIssued,expires:p.idExpires};
}
function idDocumentCheck(p,{day=game?.day||1,checkRegistry=true}={}){
 if(p?.kind==='rufus')return {status:'counterfeit',reason:'El carnet de fantasía no corresponde a un documento oficial.'};
 if(p?.kind==='tuguelFake'||p?.docAuthenticity==='forged-license')return {status:'counterfeit',reason:'El formato y el emisor de esta identificación son incompatibles con los documentos auténticos'};
 const dates=fictionalIdDates(p);const issue=parseCalendarDate(dates.issued),expiry=parseCalendarDate(dates.expires),today=parseCalendarDate(dateOf(day));
 const birth=parseCalendarDate(dates.birth);
 if(!birth||birth>today||(checkRegistry&&invalidBirthDate(p)))return {status:'invalid',reason:'Fecha de nacimiento incoherente con el registro de identidad'};
 if(!issue||!expiry||birth>issue)return {status:'invalid',reason:'Fechas imposibles en el documento'};
 if(issue>today)return {status:'future',reason:`Emisión futura: ${dates.issued} es posterior al ${dateOf(day)}`};
 if(expiry<today)return {status:'expired',reason:`Documento vencido el ${dates.expires}`};
 if(expiry<=issue)return {status:'invalid',reason:'Vigencia incoherente'};
 return {status:'valid',reason:expiry.getTime()===today.getTime()?'Vence hoy: documento todavía vigente':'Documento vigente'};
}
function sexFieldMismatch(p){return Boolean(p && p.confirmedIdSex && p.idSex && p.confirmedIdSex!==p.idSex)}

// Efectos sonoros sintéticos muy breves, activados voluntariamente.
let audioContext=null;
function ensureAudio(){
 if(typeof window==='undefined')return null;
 const AC=window.AudioContext||window.webkitAudioContext;
 if(!AC)return null;
 try{if(!audioContext)audioContext=new AC();if(audioContext.state==='suspended')audioContext.resume();return audioContext}
 catch(_){return null}
}
// Música de fondo: pista propia del juego (assets/audio/musica.mp3), en bucle.
let musicEl=null;
const MUSIC_VOLUME=.4;
function musicElement(){
 if(typeof Audio==='undefined')return null;
 if(!musicEl){musicEl=new Audio(assetUrl('assets/audio/musica.mp3'));musicEl.loop=true;musicEl.preload='auto';musicEl.volume=MUSIC_VOLUME}
 return musicEl;
}
function synthTone(midi,at,duration=.18,level=.018,type='triangle'){
 const ctx=audioContext;if(!ctx)return;
 const hz=440*Math.pow(2,(midi-69)/12);
 const osc=ctx.createOscillator(),amp=ctx.createGain(),lp=ctx.createBiquadFilter();
 osc.type=type;osc.frequency.setValueAtTime(hz,at);
 lp.type='lowpass';lp.frequency.setValueAtTime(type==='sawtooth'?1100:2700,at);
 amp.gain.setValueAtTime(.0001,at);
 amp.gain.exponentialRampToValueAtTime(Math.max(.0002,level),at+.015);
 amp.gain.exponentialRampToValueAtTime(.0001,at+duration);
 osc.connect(lp);lp.connect(amp);amp.connect(ctx.destination);
 osc.start(at);osc.stop(at+duration+.035);
}
function stopMusic(){const m=musicEl;if(m&&!m.paused)m.pause()}
function playMusic(){
 const m=musicElement();if(!m)return false;
 try{const r=m.play();if(r&&r.catch)r.catch(()=>{})}catch(_){return false}
 return true;
}
function setMusicEnabled(on){
 ui.musicEnabled=Boolean(on);stopMusic();
 if(ui.musicEnabled){if(!playMusic()){ui.musicEnabled=false}}
}
function soundEffect(kind='tap'){
 if(!ui?.soundEnabled)return;
 const ctx=ensureAudio();if(!ctx)return;
 try{
  const tones={
   tap:[[72,.045,.013,'square']],paper:[[58,.085,.027,'triangle']],box:[[43,.16,.045,'triangle'],[31,.20,.015,'sawtooth']],
   cash:[[77,.09,.022,'sine'],[81,.12,.022,'sine']],alert:[[47,.18,.038,'sawtooth'],[42,.22,.018,'triangle']],
   good:[[76,.075,.020,'triangle'],[83,.14,.022,'triangle']],page:[[60,.07,.022,'triangle']],
   bell:[[84,.12,.019,'sine'],[91,.19,.016,'sine']], stamp:[[50,.09,.037,'triangle']],
   footsteps:[[48,.05,.009,'triangle'],[43,.08,.013,'triangle']],finger:[[85,.05,.012,'sine'],[88,.10,.012,'sine']],
   hospital:[[59,.24,.011,'sine'],[62,.20,.011,'sine']],reject:[[53,.13,.02,'sawtooth']],
  };
  for(const [index,[midi,duration,vol,type]] of (tones[kind]||tones.tap).entries())
   synthTone(midi,ctx.currentTime+index*.055,duration,vol,type);
 }catch(_){/* El audio nunca debe interrumpir la partida */}
}
function addNotice(key,title,body,type='alerta'){
 if(!game)return;
 game.notifications=game.notifications||[];
 if(game.notifications.some(n=>n.key===key))return;
 game.notifications.unshift({key,day:game.day,title,body,type,seen:false});
 if(game.notifications.length>90)game.notifications.length=90;
}
let game=null;let ui={inspectionConsent:null,fingerprintPhase:'ready',fingerprintSubject:null,notifyOutcome:null,modal:null,help:false,manual:'INICIO',selectedDrug:'clonazepam2',inspectZoom:100,modalValue:'',reportType:'',reportCount:0,notificationFilter:'Todos',sisQuery:'',arrivalKey:null,openingBox:false,soundEnabled:false,musicEnabled:false};
function newState(){let stock={},bookStock={},folios={};for(const [key,d] of Object.entries(DRUGS)){stock[key]=d.stock;bookStock[key]=d.stock;folios[key]=0}return {version:53,sisIntroSeen:false,carlitosArc:{},bookReturnScene:null,correctedPrescriptionQueue:[],donVictorVisitDay:null,schoolClothChoice:null,returnedElectronicPrescriptions:[],destroyedElectronicFolios:[],specialEvents:{nomehWeiSeen:false,clubNocturnoSeen:false,tuguelDay1Seen:false,tuguelReturnPending:false,tuguelReturnSeen:false,tuguelArrested:false,tuguelPatient:null},successfulAttentions:0,priorRxUses:[],usedExtraPortraits:[],crisesSinceAdmission:0,hospital:{active:false,starts:0,days:0},dayHospitalCost:0,dayStory:"",dayStoryKind:"",moodQf:75,moodCarlitos:82,carlitosHealth:'estable',dayTreatmentCost:3000,currentHealthEvent:'estable',moodNotes:[],reviewedMoves:{},notifications:[],pendingGift:null,usedIdentityNames:[],usedVisualModels:[],usedCatalogIds:[],chequeWarnings:{},pendingChequeRevisit:null,gameOverReason:null,sisChecks:{},fakeDoctorFindings:0,idWarnings:0,retainedArchive:[],policeReports:[],authorityReports:[],gifts:[],couponPct:0,couponUsedOnDay:null,day:1,scene:'briefing',patients:[],patientIndex:0,patientResult:null,patientVerified:false,idRequested:false,qrChecked:false,stock,bookStock,folios,ledger:[],dispatches:[],simpleDispenses:[],receipts:[],receiptsNormal:[],hidden:{},quarantine:{},inventoryGap:{},delivery:null,deliveryDone:false,boxOpened:false,inspectedPacks:[],pendingCorrections:[],inspectionDone:false,inspectionIssue:null,inspectionResolutionLocked:false,inspections:[],infractions:0,finesToday:0,errors:[],cash:25000,debt:0,earnedIllegal:0,illegalToday:0,illegalCount:0,undercover:false,dayIncome:0,dayBonus:0,dayExpenses:0,dayPay:false,daySummary:null,healthCrises:0,familyTrust:75,characterRegistry:{},characterCounter:{female:0,male:0},history:[],gameOver:false}};
let memorySave=null;function save(){if(!game||TACA_PREVIEW)return;const snapshot=JSON.stringify(game);memorySave=snapshot;try{localStorage.setItem(SAVE_KEY,snapshot)}catch(e){/* session in-memory fallback */}}
function load(){if(TACA_PREVIEW)return null;try{let raw=null;try{raw=localStorage.getItem(SAVE_KEY)}catch(e){}const d=JSON.parse(raw||memorySave||'null');
 if(d&&[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53].includes(d.version)&&d.stock&&d.ledger){
  for(const [k,drug] of Object.entries(DRUGS)){if(!(k in d.stock))d.stock[k]=drug.stock;if(!(k in d.bookStock))d.bookStock[k]=drug.stock;if(!(k in d.folios))d.folios[k]=0}
  // Una partida anterior puede actualizar la fila si la atención de Tuguel sigue pendiente.
  if(d.version<23&&d.day===1&&d.patientIndex===0&&d.patients?.[0]?.kind==='tuguelExpired'&&
     d.patients.length>TUGUEL_FIRST_VISIT_INDEX&&!d.patients[0].done&&!d.patientResult){
   const tuguel=d.patients.shift();
   d.patients.splice(TUGUEL_FIRST_VISIT_INDEX,0,tuguel);
   d.patientVerified=false;d.idRequested=false;d.qrChecked=false;
   if(d.scene==='inspect')d.scene='counter';
  }
  if(d.donVictorVisitDay==null)d.donVictorVisitDay=null;
  if(d.schoolClothChoice==null)d.schoolClothChoice=null;
  if(d.version<27&&d.day>=SIS_UNLOCK_DAY){
   if(d.notifications==null)d.notifications=[];
   const notice=d.notifications.find(n=>n.key===SIS_UNLOCK_NOTICE.key);
   if(notice)Object.assign(notice,{day:SIS_UNLOCK_DAY,body:SIS_UNLOCK_NOTICE.body});
   else d.notifications.unshift({...SIS_UNLOCK_NOTICE});
   if(d.day===SIS_UNLOCK_DAY&&d.scene==='briefing'&&d.patientIndex===0&&!d.patientResult){
    const index=d.patients?.findIndex(p=>p.kind==='sicolasMuros');
    if(index>0)d.patients.unshift(d.patients.splice(index,1)[0]);
   }
  }
  if(d.correctedPrescriptionQueue==null)d.correctedPrescriptionQueue=[];
  if(!Array.isArray(d.minorGuardianQueue))d.minorGuardianQueue=[];
  if(typeof d.sisIntroSeen!=='boolean')d.sisIntroSeen=d.day>=3;
  const legacyVersion=d.version;
  d.version=53;d.carlitosArc=d.carlitosArc||{};
  d.errors=d.errors||[];
  assignLegacyErrorIds(d);
  if(d.inspectionIssue&&!d.inspectionDone&&legacyVersion<44){
   d.inspectionIssue=getInspectionIssue(d);
   d.inspectionResolutionLocked=false;
  }
  if(d.scene==='book')d.bookReturnScene=bookDestination(d);
  else if(legacyVersion<44&&d.scene==='close'&&!d.deliveryDone&&d.patientIndex>=d.patients.length)d.scene='receive';
  d.crisesSinceAdmission=d.crisesSinceAdmission||0;
d.returnedElectronicPrescriptions=d.returnedElectronicPrescriptions||[];d.destroyedElectronicFolios=d.destroyedElectronicFolios||[];d.specialEvents=d.specialEvents||{nomehWeiSeen:false,clubNocturnoSeen:false};d.specialEvents.tuguelDay1Seen=Boolean(d.specialEvents.tuguelDay1Seen||(d.patients||[]).some(x=>x.kind==='tuguelExpired'));d.specialEvents.tuguelReturnPending=Boolean(d.specialEvents.tuguelReturnPending);d.specialEvents.tuguelReturnSeen=Boolean(d.specialEvents.tuguelReturnSeen||(d.patients||[]).some(x=>x.kind==='tuguelFake'));d.specialEvents.tuguelArrested=Boolean(d.specialEvents.tuguelArrested);d.specialEvents.nomehWeiSeen=Boolean(d.specialEvents.nomehWeiSeen || (d.patients||[]).some(x=>x.kind==='chinese'||x.name==='No-Meh Wei'));d.specialEvents.clubNocturnoSeen=Boolean(d.specialEvents.clubNocturnoSeen || (d.patients||[]).some(x=>x.kind==='clubNocturno'));d.successfulAttentions=Number(d.successfulAttentions)||0;d.priorRxUses=d.priorRxUses||[];d.chequeWarnings=d.chequeWarnings||{};d.pendingChequeRevisit=d.pendingChequeRevisit||null;d.gameOverReason=d.gameOverReason||null;d.usedExtraPortraits=d.usedExtraPortraits||[];d.cleanStreak=Number.isFinite(d.cleanStreak)?d.cleanStreak:0;d.hospital=d.hospital||{active:false,starts:0,days:0,errors:0};d.dayHospitalCost=d.dayHospitalCost||0;d.dayStory=d.dayStory||'';d.dayStoryKind=d.dayStoryKind||'';d.moodQf=Number.isFinite(d.moodQf)?d.moodQf:75;d.moodCarlitos=Number.isFinite(d.moodCarlitos)?d.moodCarlitos:82;d.carlitosHealth=d.carlitosHealth||'estable';d.dayBonus=Number(d.dayBonus)||0;d.dayTreatmentCost=d.dayTreatmentCost??3000;d.currentHealthEvent=d.currentHealthEvent||'estable';d.moodNotes=d.moodNotes||[];d.reviewedMoves=d.reviewedMoves||{};d.pendingGift=d.pendingGift||null;d.usedIdentityNames=d.usedIdentityNames||[];d.usedVisualModels=d.usedVisualModels||[];d.usedCatalogIds=d.usedCatalogIds||[];d.simpleDispenses=d.simpleDispenses||[];d.receiptsNormal=d.receiptsNormal||[];
  for(const g of (d.gifts||[])){if(isSweet(g)&&g.effect==='sin uso')g.effect='sweet';if(!('used' in g))g.used=false}if(d.pendingGift?.item==='Chocolate artesanal'&&d.pendingGift.effect==='sin uso')d.pendingGift.effect='sweet';
  d.notifications=d.notifications||[];d.sisChecks=d.sisChecks||{};d.inspectionResolutionLocked=Boolean(d.inspectionResolutionLocked);d.fakeDoctorFindings=d.fakeDoctorFindings||0;d.idWarnings=d.idWarnings||0;d.retainedArchive=d.retainedArchive||[];d.policeReports=d.policeReports||[];d.authorityReports=d.authorityReports||[];d.gifts=d.gifts||[];d.couponPct=d.couponPct||0;d.couponUsedOnDay=d.couponUsedOnDay||null;
  // Reparamos actos duplicados por el bug de confirmación repetida de las versiones anteriores.
  if(Array.isArray(d.inspections)){
   const unique=new Map();
   for(const act of d.inspections){const key=String(act.day);if(!unique.has(key))unique.set(key,act)}
   d.inspections=[...unique.values()];
   const sanctionable=d.inspections.filter(act=>act.issue && !/sin diferencias identificadas|sin observaciones/i.test(act.issue));
   const firstFake=sanctionable.findIndex(act=>/prescriptor inexistente en Registro SIS/i.test(act.issue));
   const estimate=sanctionable.length-(firstFake>=0?1:0);
   d.infractions=Math.min(Math.max(0,Number(d.infractions)||0),Math.max(0,estimate));
   if(d.inspectionDone&&d.scene==='inspector'&&d.inspectionOutcome){
    const current=d.inspections.find(act=>act.day===d.day);
    if(current){d.inspectionOutcome.fine=current.fine;d.finesToday=current.fine;}
   }
  }
  d.characterRegistry=d.characterRegistry||{};d.characterCounter=d.characterCounter||{female:0,male:0};
  for(const [i,p] of (d.patients||[]).entries()){
   if(p.kind==='donVictor')continue;
   if(p.kind==='double')p.rxType='ELECTRÓNICA';
   if(p.kind==='electronicRepeat')p.rxType='ELECTRÓNICA';
   p.nationalityCode=p.nationalityCode||'CL';
   if(Number.isInteger(p.extraPortraitId)&&!d.usedExtraPortraits.includes(p.extraPortraitId))d.usedExtraPortraits.push(p.extraPortraitId);
   p.portraitSeed=p.portraitSeed??(31019+i*104729+d.day*997);
   p.idPortraitSeed=p.idPortraitSeed??p.portraitSeed;
   p.prescriberRegistered=p.prescriberRegistered??(p.kind!=='fakeDoctor');
   p.prescriberRut=p.prescriberRut||rutFmt(30000000+(p.portraitSeed%8000000));
   p.idUndercover=p.idUndercover??false;
   // Existing saved characters migrate to illustrated portraits without changing their identity.
   const basePool=p.face==='male'?MALE_BASES:FEMALE_BASES;
   if(p.portraitModel===undefined){const seed=(p.portraitSeed>>>0)||i+1;const slot=seed%160;p.portraitModel=basePool[Math.floor(slot/20)]*20+(slot%20)}
   if(p.idPortraitModel===undefined){const bad=p.kind==='fakeid'||p.idPortraitSeed!==p.portraitSeed;const base=basePool.indexOf(Math.floor(p.portraitModel/20));p.idPortraitModel=bad?basePool[(base+3+basePool.length)%basePool.length]*20+(p.portraitModel%20):p.portraitModel}
   if(!['specialCarlos','chinese','clubNocturno','tuguelExpired','tuguelFake','sicolasMuros','rufus','aluminio','tarotera','abuelo','chemy'].includes(p.kind)){
    if(!Number.isInteger(p.catalogId)){
      const rec=pickCatalogEntry(p,d.usedCatalogIds);
      if(rec)applyCatalogIdentity(p,rec,{preserveName:true});
    }
    repairLegacyBirthDate(p,d.usedCatalogIds);
    if(Number.isInteger(p.catalogId)&&!d.usedCatalogIds.includes(p.catalogId))d.usedCatalogIds.push(p.catalogId);
   }
   initializeIdentityDocument(p,d.day);
   initializeForeignPrescriptionId(p);
   if(!p.done&&p.rxType==='ELECTRÓNICA'&&p.qrValidation==='invalid')flagElectronicPrescriptionFraud(p,'El código electrónico no pudo ser validado.');
   if(!p.done&&p.rxType==='ELECTRÓNICA'&&p.qrValidation==='valid'){
    const issue=electronicPrescriptionIntegrityIssue(p,d.day);
    if(issue){
     flagElectronicPrescriptionFraud(p,issue);
     if(i===d.patientIndex)d.qrChecked=false;
    }
   }
   if(legacyVersion<44&&!p.done&&!['bribe','electronicRepeat','correctedCheque','wrongtypeRepeat','correctedPrescription'].includes(p.kind)){
    p.quote=patientDialogue(p);
   }
   if(p.identityScan==='match'&&!identityFingerprintMatches(p))p.identityScan='mismatch';
   d.characterRegistry[p.name]=p.portraitModel;
   if(p.name&&!d.usedIdentityNames.includes(p.name))d.usedIdentityNames.push(p.name);
   if(p.kind!=='specialCarlos'&&!d.usedVisualModels.includes(p.portraitModel))d.usedVisualModels.push(p.portraitModel);
  }
  const queuedPatients=d.returnedElectronicPrescriptions.map(entry=>entry.patient);
  if(d.pendingChequeRevisit?.patient)queuedPatients.push(d.pendingChequeRevisit.patient);
  if(d.patientResult?.p)queuedPatients.push(d.patientResult.p);
  for(const p of queuedPatients){
   repairLegacyBirthDate(p,d.usedCatalogIds);
   initializeIdentityDocument(p,d.day);
   initializeForeignPrescriptionId(p);
  }
  for(const [name,model] of Object.entries(d.characterRegistry)){
   if(name&&!d.usedIdentityNames.includes(name))d.usedIdentityNames.push(name);
   if(!d.usedVisualModels.includes(model))d.usedVisualModels.push(model);
  }
  if(d.day>=3&&!d.notifications.some(n=>n.key==='stolen-3472'))d.notifications.unshift({key:'stolen-3472',day:3,title:'ALERTA · TALONARIO ROBADO',body:STOLEN_FOLIO_ALERT,type:'alerta',seen:false});
  return d;
 }}catch(e){}return null}
function record(message){game.history.unshift({date:dateOf(game.day),message});if(game.history.length>36)game.history.length=36}
let toastTimer=null;function toast(message){toastEl.textContent=message;toastEl.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toastEl.classList.remove('show'),2300)}
function shownRxType(p){return p.rxType==='CHEQUE'?'RECETA FÍSICA CHEQUE':p.rxType==='RETENIDA'?'RECETA FÍSICA BLANCA · RETENIDA':p.rxType==='ELECTRÓNICA'?'RECETA ELECTRÓNICA'+(DRUGS[p.drug]?.kind==='CHEQUE'?' · CHEQUE':DRUGS[p.drug]?.kind==='RETENIDA'?' · CONTROLADO':''):'RECETA FÍSICA BLANCA'}
function documentWearClass(p,scope='rx'){
 const seed=((Number(p?.portraitSeed)||37)*31 + (scope==='id'?17:9) + (scope==='paper'?5:0) + ((p?.folio||'').length*13))>>>0;
 const wear=['doc-clean','doc-creased','doc-stained','doc-folded'];
 return wear[seed%wear.length];
}
function makePatient(kind,n=0,tmTitle='Médico Cirujano'){let config={
 carvedilol:['Daniela Rojas','carvedilol_25_mg_comprimidos','SIMPLE','Receta válida.','Necesito mi carvedilol 25 mg.','female'],
 correct:['Claudia Aravena','losartan','SIMPLE','Todo en regla.','Necesito retirar mi medicamento para la presión.','female'],
 controlled:['Valentina Núñez','clonazepam2','RETENIDA','Receta válida de control.','Traigo mi receta retenida.','female'],
 missingid:['Martina Soto','clonazepam2','RETENIDA','No entregó cédula.','Químico, aquí está la receta. ¿Me puede atender?','female'],
 typo:['Rodrigo Méndez','metformin','ELECTRÓNICA','RUT con un dígito errado.','El médico quizás escribió mal un dígito.','male'],
 different:['Alonso Cárdenas','amoxicillin','RETENIDA','RUT completamente diferente.','Esta receta es mía, se lo aseguro.','male'],
 prescriberTypo:['Valeria Muñoz','losartan','SIMPLE','RUT del prescriptor mal escrito.','Vengo a retirar el medicamento que me recetaron.','female'],
 expired:['Isabel Rojas','losartan','SIMPLE','Fecha de emisión antigua.','La encontré guardada y quería usarla.','female'],
 wrongtype:['Ignacio Ferrada','methylphenidate','SIMPLE','Tipo de receta insuficiente.','Siempre me lo venden con cualquier receta.','male'],
 stolen:['Javiera Alarcón','clonazepam2','RETENIDA','Folio denunciado como robado.','Vengo por mi clonazepam. ¿Por qué revisa tanto?','female'],
 electronic:['Elena Prieto','losartan','ELECTRÓNICA','Receta electrónica por validar.','La receta me llegó al teléfono.','female'],
 check:['Patricio Véliz','methylphenidate','CHEQUE','Receta cheque sin irregularidades.','Aquí está la receta cheque, químico.','male'],
 double:['Gabriel Sepúlveda','clotiazepam10','ELECTRÓNICA','Receta electrónica con un código previamente despachado.','Traigo mi receta electrónica; aquí está el código.','male'],
 retainedCommon:['Lorena Quezada','fluconazol_150','RETENIDA','Receta retenida sin libro especial.','Me dejaron este tratamiento; aquí está la receta.','female'],
 sicolasMuros:['Sicolás Muros','ketazolam30','RETENIDA','Prescriptor inexistente en el registro SIS.','Buenas. Me dieron esta receta en Clínica Kerito. Aquí está mi carnet.','male'],
 prescriberMismatch:['Valeria Muñoz','losartan','SIMPLE','El RUT de la receta corresponde a otro prescriptor.','Buenas tardes. Vengo a retirar el medicamento de esta receta.','female'],
 fakeDoctor:['Esteban Pino','losartan','SIMPLE','El prescriptor no figura en SIS.','Me dio esta receta el doctor Araya. ¿Tiene el medicamento?','male'],
 fakeid:['María Contreras','clonazepam05','RETENIDA','Fotografía discordante en cédula.','Aquí está mi receta y mi carnet, químico.','female'],
 lookHair:['Natalia Orellana','clonazepam2','RETENIDA','Fotografía antigua, cambio de cabello.','En mi carnet salgo con otro pelo. ¿Me cree si pongo la huella?','female'],
 lookClothes:['Felipe Contreras','losartan','SIMPLE','Fotografía antigua, cambio de ropa.','Esa foto es de cuando tenía otra chaqueta. Yo sí soy, mire.','male'],
 lookAge:['Rosario Aguilera','metformin','SIMPLE','Apariencia distinta por el paso del tiempo.','La foto es viejísima; ahora tengo otras canas y algunas historias que contar.','female'],
 idExpired:['Fernanda Lira','losartan','SIMPLE','Cédula vencida.','Creo que mi carnet todavía estaba bueno... ¿Puede revisarlo?','female'],
 idBirthDateFraud:['Camila Soto','clonazepam05','RETENIDA','Fecha de nacimiento adulterada en la cédula.','Buenas tardes. Aquí tiene mi receta y mi carnet.','female'],
 idFuture:['Matías Saavedra','clotiazepam10','RETENIDA','Cédula con fecha de emisión futura.','Lo renové hace poco. ¿Por qué mira tanto la fecha?','male'],
 idLastDay:['Claudia Millán','losartan','SIMPLE','Cédula vence hoy.','Hoy vence mi cédula, ¿alcanzamos justo?','female'],
 idSexMismatch:['Ariel Fuentes','clotiazepam10','RETENIDA','Datos registrales inconsistentes.','Me entregaron la ficha y el carnet. ¿Hay algo que deba aclarar?','male'],
 podiatristRx:['Marcela Inostroza','amoxicillin','SIMPLE','Antibiótico indicado por una podóloga.','Me hicieron una curación en el pie y me dieron esta receta para retirar amoxicilina.','female'],
 tmFraud:['Daniela Vergara','losartan','SIMPLE','Prescripción con calidad profesional falsa.','Me la firmó una persona que dijo ser médico. Ahí aparece el timbre, ¿o no?','female'],
 underage:['Joaquín Ríos','clotiazepam10','RETENIDA','Paciente menor de edad con receta controlada.','La receta está a mi nombre. Tengo 17, ¿me la puede dar igual?','male'],
 chinese:['Li Wei','losartan','SIMPLE','No trae documentos útiles.','你好... 这个... 谢谢。','male'],
 specialCarlos:['Carlos Neira Ibacache','clotiazepam10','RETENIDA','Caso especial poco frecuente.','Hola, vengo por mi receta de clotiazepam 10 mg.','male'],
 giftPaper:['Cliente Anónimo','losartan','SIMPLE','No solicita nada útil.','Le dejo esto, químico. No me sirve a mí.','female'],
 clubNocturno:['Visitante del Club Nocturno','losartan','SIMPLE','Entrega una tarjeta, no una receta.','Yo era de noruega papito, fama maxima, anda a pasarlo bien','male'],
 tuguelExpired:['Tuguel Pagaba','clonazepam2','RETENIDA','Documento de identidad vencido.','¡Qué pasa, papito! Vengo con mi receta, todo bacán.','male'],
 rufus:['Rufus','clonazepam2','RETENIDA','Carnet de fantasía presentado como auténtico.','ñau','male'],
 abuelo:['Eliseo Quintrel','losartan','SIMPLE','Visita sin receta.','Se le nota cansado, joven. Tome un dulce, que con algo rico se arregla el día.','male'],
 tarotera:['Clarisa Antilef','losartan','SIMPLE','Visita sin receta.','Tome, pa que sepa que hacer','female'],
 chemy:['Chemy Araucanía','fenbendazol25','SIMPLE','Receta válida de Fenbendazol 25 %.','Muuu... digo, buenas tardes. Vengo por mi fenbendazol al 25 %, aquí está la receta.','female'],
 aluminio:['Hernán Zúñiga','quetiapina50','SIMPLE','Paciente no porta documento de identidad.','estos weones quieren puro controlarnos','male'],
 tuguelFake:['Tuguel Pagaba','clonazepam2','RETENIDA','Documento de identificación falsificado.','¡Volví, papito! Ahora sí que está impecable el carnet.','male']
 }[kind]||[];
 let r=randomRut(),rr=r,rxDate=dateOf(game.day),rxType=config[2],folio=kind==='stolen'?'003472':String(4100+game.day*13+n*7).padStart(6,'0');
 if(kind==='typo')rr=typoRut(r);if(kind==='different')rr=rutFmt(randomRut());if(kind==='expired')rxDate='20/09/2026';
 let drugId=config[1];if(game.day>=2&&['correct','typo','different','expired','electronic'].includes(kind)){const pool=SIMPLE_IDS.filter(id=>DRUGS[id].kind==='SIMPLE');drugId=pool[Math.floor(Math.random()*pool.length)];}
 if(['retainedCommon'].includes(kind)){let pool=Object.keys(DRUGS).filter(k=>DRUGS[k].kind==='RETENIDA_COMUN');drugId=pool[Math.floor(Math.random()*pool.length)];}
 if(kind==='expired'){
  // La receta vencida depende del tipo: controlado, cheque y antibiótico (1 mes) o simple (6 meses); a veces llega electrónica.
  const roll=Math.random(),pick=ids=>ids[Math.floor(Math.random()*ids.length)];
  const abx=Object.keys(DRUGS).filter(k=>DRUGS[k].kind==='RETENIDA_COMUN');
  const ctl=Object.keys(DRUGS).filter(k=>DRUGS[k].kind==='RETENIDA'&&DRUGS[k].book);
  const simple=SIMPLE_IDS.filter(id=>DRUGS[id].kind==='SIMPLE');
  const extra=2+Math.floor(Math.random()*35);
  if(game.day>=2&&roll<0.2){drugId=pick(abx);rxType='RETENIDA'}
  else if(game.day>=2&&roll<0.4){drugId=pick(ctl);rxType='RETENIDA'}
  else if(game.day>=2&&roll<0.55){drugId='methylphenidate';rxType='CHEQUE'}
  else if(game.day>=2){drugId=pick(simple)}
  if(game.day>=2&&Math.random()<0.3)rxType='ELECTRÓNICA';
  rxDate=rxExpiredDate(rxValidityMonths({drug:drugId}),game.day>=2?extra:60);
 }
 let rxRegWrong=null;
 if(kind==='check'&&game.day>=2&&Math.random()<0.3&&DRUGS[drugId]?.reg)rxRegWrong=wrongRegistry(drugId);
 // La receta electrónica también puede ser de cheque o de un medicamento controlado.
 if(kind==='electronic'&&game.day>=3&&Math.random()<0.35){drugId=['methylphenidate','clonazepam05','clotiazepam10'][Math.floor(Math.random()*3)];}
 const doctors=['Dra. Francisca Lagos','Dr. Héctor Silva','Dra. Verónica Cruz','Dr. Nicolás Paredes','Dra. Elisa Molina'];
 const portraitSeed=Math.floor(Math.random()*2147483647),idPortraitSeed=kind==='fakeid'?portraitSeed+917245:portraitSeed;
 const replacement=kind==='tmFraud'&&game.specialEvents.tmDetained?substituteTechnologist(game.day):null;
 const prescriber=replacement?.name||(kind==='podiatristRx'?'Pod. Camila Navarro':kind==='sicolasMuros'?'Dr. René Puente':kind==='stolen'?'Dr. Ernesto Valdés':kind==='fakeDoctor'?'Dr. Simón Araya':kind==='specialCarlos'?'Dr. Ysela Creyó':kind==='tmFraud'?'TM. Mauricio Fuentes':kind==='chemy'?'Dra. Fixa Pilar':doctors[(game.day+n)%doctors.length]);
 const gaveId=kind==='missingid'||kind==='aluminio'||kind==='tarotera'||kind==='abuelo'||kind==='specialCarlos'||kind==='chinese'||kind==='giftPaper'?false:['fakeid','idBirthDateFraud'].includes(kind)||Math.random()<0.65;
 // Si hay carnets falsos masculinos disponibles, parte de los casos de identidad falsa salen con ellos.
 const fakeSexes=kind==='fakeid'?Object.keys(FAKE_CARNETS).map(id=>CAST600[id].sex):[];
 const face=fakeSexes.length&&portraitSeed%2===0?(fakeSexes[Math.floor(portraitSeed/2)%fakeSexes.length]==='M'?'male':'female'):kind==='idBirthDateFraud'&&portraitSeed%2?'male':config[5];
 const patientName=['clubNocturno','tuguelExpired','tuguelFake','sicolasMuros','rufus','aluminio','tarotera','abuelo','chemy'].includes(kind)?config[0]:kind==='chinese'?'No-Meh Wei':variedPatientName(face,config[0],kind);
 const info=replacement||doctorInfo(prescriber);
 const p={kind,name:patientName,drug:drugId,rxType,issue:config[3],quote:config[4],face,rut:rutFmt(r),rxRut:typeof rr==='number'?rutFmt(rr):rr,rxDate,folio,gaveId,prescriber,prescriberRegistered:kind!=='fakeDoctor',prescriberRut:info.rut,qty:1,doctorVerified:false,done:false,portraitSeed,idPortraitSeed,idUndercover:Math.random()<0.02,signature:info.signature};
 if(rxRegWrong){p.rxReg=rxRegWrong;p.issue='Número de Registro del medicamento errado.'}
 if(replacement)p.tmIssuerDay=game.day;
 if(kind==='fakeDoctor')p.prescriberRut=rutFmt(39900004);
 if(kind==='prescriberMismatch'){
  const another=doctors[(game.day+n+1)%doctors.length];
  p.prescriberRut=doctorInfo(another).rut;
 }
 if(kind==='stolen'){
  const roll=Math.random();
  p.stolenFolioDefect=roll<0.30?'signature':roll<0.60?'rut':'none';
  if(p.stolenFolioDefect==='signature')p.issue+=' Firma discordante.';
  if(p.stolenFolioDefect==='rut')p.issue+=' RUT del prescriptor mal escrito.';
 }
 if(kind==='prescriberTypo'||p.stolenFolioDefect==='rut')p.prescriberRut=info.rut.replace(/^\d/,digit=>digit==='3'?'2':'3');
 if(kind==='chinese'){p.rxType='NINGUNA';p.folio='';p.gaveId=false;p.note='Papel en chino';p.prescriber='—';p.prescriberRegistered=false;p.prescriberRut='—';}
 if(kind==='abuelo'){applyCatalogIdentity(p,CAST600[649]);p.rxType='NINGUNA';p.folio='';p.gaveId=false;p.note='Dulce de regalo';p.prescriber='—';p.prescriberRegistered=false;p.prescriberRut='—';p.quote=config[4];}
 if(kind==='tarotera'){applyCatalogIdentity(p,CAST600[648]);p.rxType='NINGUNA';p.folio='';p.gaveId=false;p.note='Carta Tarot';p.prescriber='—';p.prescriberRegistered=false;p.prescriberRut='—';p.quote='Tome, pa que sepa que hacer';}
 if(kind==='giftPaper'){p.rxType='NINGUNA';p.folio='';p.gaveId=false;p.note='Tarjeta publicitaria';p.prescriber='—';p.prescriberRegistered=false;p.prescriberRut='—';}
 if(kind==='clubNocturno'){p.rxType='NINGUNA';p.folio='';p.gaveId=false;p.note='Tarjeta del club nocturno';p.prescriber='—';p.prescriberRegistered=false;p.prescriberRut='—';}
 // Aproximadamente 10% de atenciones ordinarias se presentan realmente sin identificación.
 // Se excluyen personajes especiales y casos de falsificación documental.
 p.noDocument=kind==='missingid'||kind==='aluminio'||(!isForgedIdentityCase(p)&&!['tuguelExpired','specialCarlos','chinese','clubNocturno','giftPaper','tarotera','abuelo','chemy','bribe','tmFraud','podiatristRx'].includes(kind)&&Math.random()<0.10);
 if(p.noDocument){p.gaveId=false;p.issue='Paciente no porta documento de identidad.';}
 if(kind==='rufus')Object.assign(p,{rut:'N.N',rxRut:'N.N',gaveId:true,noDocument:false,
  idUndercover:false,docAuthenticity:'forged-novelty-card'});
 if(kind==='sicolasMuros'){
  Object.assign(p,{firstNames:'Sicolás',surnames:'Muros',birthDate:'05/06/1997',gaveId:true,noDocument:false,issue:config[3],
   clinic:'Clinica Kerito',prescriberRegistered:false,prescriberRut:rutFmt(39900003),signature:'R. Puente',idUndercover:false});
 }
 if(kind==='chemy'){Object.assign(p,{firstNames:'Chemy',surnames:'Araucanía',birthDate:'12/03/2001',noDocument:false,idUndercover:false,prescriberRegistered:true,issue:config[3],quote:config[4]});}
 if(kind==='aluminio'){applyCatalogIdentity(p,CAST600[641]);p.gaveId=false;p.noDocument=true;p.idUndercover=false;p.issue=config[3];p.quote=config[4];}
 if(kind==='specialCarlos'){p.rut='00.000.001-Z';p.rxRut=p.rut;p.birthDate='14/08/2000';p.gaveId=false;p.prescriberRegistered=true;p.prescriberRut=doctorInfo('Dr. Ysela Creyó').rut;p.signature=doctorInfo('Dr. Ysela Creyó').signature;}
 if(kind==='tuguelExpired'||kind==='tuguelFake'){p.name='Tuguel Pagaba';p.firstNames='Tuguel';p.surnames='Pagaba';p.rut=rutFmt(19876543);p.rxRut=p.rut;p.birthDate='14/07/1993';p.documentNumber='2018743602';p.gaveId=true;p.idUndercover=false;p.idPortraitSeed=p.portraitSeed;p.portraitModel=999;p.idPortraitModel=999;p.nationalityCode='CL';p.docAuthenticity=kind==='tuguelExpired'?'authentic-expired':'forged-license';}

 if(kind==='double'){
  const issueDay=Math.max(0,game.day-3),usedDay=Math.max(0,game.day-1);
  p.rxDate=dateOf(issueDay);
  p.priorRxUse={day:usedDay,issuedOn:issueDay,folio:p.folio,drug:p.drug,patient:p.name,rut:p.rut,qty:1,rxType:'ELECTRÓNICA',ref:'ARC-'+String(4200+game.day*19+n).padStart(6,'0')};
  game.priorRxUses=game.priorRxUses||[];
  if(!game.priorRxUses.some(u=>u.folio===p.folio))game.priorRxUses.push({...p.priorRxUse});
 }

 if(kind==='podiatristRx'){p.claimedTitle=info.title;p.gaveId=true;}
 if(kind==='tmFraud'){
  p.claimedTitle=tmTitle;
  p.gaveId=true;
  if(declaresTechnologistTitle(p))p.issue='Receta emitida por un tecnólogo médico no habilitado para prescribir en este caso.';
 }
 if(kind==='underage'){p.birthDate=MINOR_BIRTH_DATE;p.gaveId=true;}
 if(kind==='lookHair'){p.appearanceStyle='cabello';p.gaveId=true;}
 if(kind==='lookClothes'){p.appearanceStyle='ropa';p.gaveId=true;}
 if(kind==='lookAge'){p.appearanceStyle='tiempo';p.gaveId=true;}
 p.nationalityCode=['specialCarlos','giftPaper','clubNocturno','tuguelExpired','tuguelFake','sicolasMuros','rufus','aluminio','tarotera','abuelo','chemy'].includes(kind)?'CL':kind==='chinese'?'CN':chooseNationality(kind==='underage'?YOUNG_FOREIGN_NATIONALITY_WEIGHTS:undefined);
 if(p.nationalityCode!=='CL'&&kind!=='chinese'&&kind!=='specialCarlos'){
  const person=internationalName(p.nationalityCode,p.face,game.usedIdentityNames||[]);
  if(person){p.name=person.display;p.firstNames=person.first;p.surnames=person.last;}
 }else if(kind==='chinese'){
  p.name='No-Meh Wei';p.firstNames='No-Meh';p.surnames='Wei';
 }
 assignPatientModel(p);
 // La referencia del despacho anterior conserva exactamente la identidad definitiva del paciente.
 if(p.kind==='double'&&p.priorRxUse){
  p.priorRxUse.patient=p.name;p.priorRxUse.rut=p.rut;
  const previous=(game.priorRxUses||[]).find(x=>x.folio===p.folio&&x.drug===p.drug);
  if(previous){previous.patient=p.name;previous.rut=p.rut;}
 }
 initializeIdentityDocument(p,game.day);
 initializeForeignPrescriptionId(p);
 if(kind==='idBirthDateFraud'){
  const birth=parseCalendarDate(p.registeredBirthDate);
  const years=ageFromBirth(p.registeredBirthDate)>=36?15:-15;
  p.birthDate=printableDate(shiftYears(birth,years));
 }
 if(kind==='tuguelExpired'){p.idIssued='22/10/2018';p.idExpires='22/10/2026';p.idValidityYears=8;p.idDateSystem=2;}if(kind==='tuguelFake'){p.idIssued='16/11/2026';p.idExpires='16/11/2034';p.idDateSystem=2;}p.quote=patientDialogue(p);return p;
}

// ===== Diálogos personalizados (1.9.106) =====
// Estado de ánimo según la cara del sprite. Para sprites nuevos: mirar la hoja de contactos
// (gen/contact_sheet.py) y añadir el id aquí; lo que no esté listado se considera neutro.
const CAST_MOODS={752:'happy',756:'happy',757:'happy',759:'happy',772:'happy',776:'happy',777:'happy',781:'happy',786:'happy',789:'happy',797:'happy',806:'happy',
 702:'angry',742:'angry',709:'angry',749:'angry',720:'angry',704:'sad',744:'sad',712:'sad',703:'happy',743:'happy',710:'happy',713:'happy',716:'happy',723:'happy',724:'happy',727:'happy',730:'happy',733:'happy',748:'happy',
 615:'angry',651:'angry',659:'angry',668:'angry',673:'angry',684:'angry',
 658:'sad',665:'sad',677:'sad',686:'sad',698:'sad',
 633:'happy',635:'happy',638:'happy',640:'happy',645:'happy',646:'happy',649:'happy',652:'happy',657:'happy',671:'happy',676:'happy',683:'happy',689:'happy',697:'happy'};
function patientMood(p){const id=Number.isInteger(p?.idCatalogId)?p.idCatalogId:p?.catalogId;return CAST_MOODS[p?.catalogId]||CAST_MOODS[id]||'neutral'}
function dlgSeed(p,salt=0){const s=(Number(p?.portraitSeed)||0)>>>0;return ((((s^(s>>>5))+salt*40503)>>>0)*2246822519>>>0)>>>8}
function dlgPick(list,p,salt=0){return list[dlgSeed(p,salt)%list.length]}
// Pista en ~50 % de los casos con problema, siempre igual para el mismo paciente.
function dlgHasHint(p){return dlgSeed(p,99)%100<50}
const DLG_HINTS={
 typo:['El doctor la escribió corriendo y no la alcancé a revisar.','Me dictaron mis datos por teléfono, no sé si anotaron bien el RUT.','Ojalá no tenga errores, la secretaria la pasó en limpio apurada.'],
 different:['Esta receta la sacó mi hermano a mi nombre... creo que puso otro RUT.','Los datos son de otra persona de la familia, pero el remedio es para mí.','Me la prestó una prima, es el mismo remedio, ¿no?'],
 registry:['La receta la llenó la secretaria a la rápida, no sé si anotó bien el número.','El doctor la escribió de memoria; ojalá esté todo bien con el registro.'],
 expired:['La receta es de hace unas semanas, pero el remedio se me acabó recién.','No había podido venir antes. Ojalá todavía valga.','Es la receta del mes pasado, ¿verdad que dura harto?'],
 double:['Ya retiré con esta misma receta, pero quería ver si acá me daban otra caja.','Me dijeron que el código QR sirve más de una vez, ¿cierto?','Esta receta ya la usé esta semana, pero me sirve igual, ¿no?'],
 wrongtype:['El doctor me dio la receta blanca de siempre, también para este remedio.','Me dijeron que con receta simple se podía, ¿o no?','No tengo el cheque, pero la simple debería servir.'],
 electronicBad:['El código QR no lee, no sé por qué... me lo mandaron por WhatsApp.','Me pasaron la receta como captura de pantalla, ¿sirve igual?'],
 idExpired:['El carnet se me venció hace poco, pero soy yo, mire la foto.','No he podido renovar el carnet, pero está todo en orden.'],
 idFuture:['El carnet es nuevo, me lo dieron recién... creo que la fecha salió rara.','Lo retiré hace nada del registro; la fecha, no sé.'],
 idSexMismatch:['El carnet tiene un dato malo, hace años que no lo corrijo.','Ese es mi carnet, aunque tiene un error.'],
 missingid:['Se me quedó el carnet en la casa. ¿Me atiende igual?','No traje la cédula, ¿se puede igual?'],
 prescriberTypo:['El timbre del doctor salió medio borroso, no se lee bien el RUT.','El doctor anotó su RUT rapidito, creo que se equivocó.'],
 prescriberMismatch:['Me atendió un doctor de reemplazo ese día, no sé con qué timbre firmó.','Ese día me vio otro profesional; el timbre es de otro doctor.'],
 impostor:['Ese es mi carnet, aunque ando con otra facha.','La foto es medio vieja, pero soy yo, créame.']
};
function dlgProblemKey(p){
 if(p.kind==='missingid')return 'missingid';
 if(['typo','different','expired','double','wrongtype','idExpired','idFuture','idSexMismatch','prescriberTypo','prescriberMismatch'].includes(p.kind))return p.kind;
 if(!isPaperEvent(p)&&p.kind!=='bribe'&&rxIsExpired(p))return 'expired';
 if(registryMismatch(p))return 'registry';
 if(p.rxType==='ELECTRÓNICA'&&(p.qrValidation==='invalid'||p.kind==='electronicRepeat'))return 'electronicBad';
 if(p.variantImpostor===true&&!p.noDocument)return 'impostor';
 return null;
}
const DLG_OPEN={
 angry:['¡Apúrate, weón!','Ya po, weón, no tengo todo el día.','Oye, weón, ¿vai a atender o no?','Puta la weá lenta, apúrate.'],
 angryForeign:['¡Oiga, apúrese!','Llevo una hora esperando, ¡atienda ya!','Esto es una falta de respeto, atiéndame.'],
 sad:['Buenas... perdone la hora.','Hola... disculpe la molestia.','Buenas tardes, vengo medio cansado.'],
 happyOld:['¡Buenas tardes, hijito! Qué lindo día.','¡Hola, joven! Qué gusto verlo.'],
 happy:['¡Buenas, buenas!','¡Hola, químico! ¡Qué gusto!','¡Buenas tardes! Qué día más lindo.'],
 old:['Buenas tardes, hijito.','Hola, joven. Con calma, por favor.','Buenas, mijito.'],
 young:['Hola po, ¿qué tal?','Buenas, llevo rato en la fila.','Hola, ando apurado, ¿me ayuda?'],
 neutral:['Buenas tardes.','Hola, químico.','Buenas.'],
 VE:['Buenas, mi amigo.','Epa, buenas tardes.'],HT:['Bonjou, buenas tardes.'],AR:['Buenas, che.','Hola, buen día.'],PE:['Buenas, jefe.','Hola, joven.'],
 IT:['Buongiorno.'],BO:['Buenas tardes, joven.'],DE:['Guten Tag.'],CN:['Hola, buenas tardes.']
};
const DLG_ASK={
 'Control legal':['Vengo por mi {d}, el del control.','Me toca retirar el {d} del mes.','Traigo la receta del {d}, vengo con el tratamiento al día.'],
 'Salud mental':['Vengo por mi {d}, el que me dio el psiquiatra.','Necesito retirar el {d}, me hace bien.'],
 'Cardiovasculares':['Es para la presión, el {d}.','Vengo por mi {d}, el del corazón.'],
 'Endocrinos y metabólicos':['Vengo por mi {d}, el del control mensual.','Necesito el {d}, no puedo quedarme sin tratamiento.'],
 'Antiinfecciosos':['Me recetaron {d} por una infección.','Vengo por {d}, me dijeron que era urgente.'],
 'Gastrointestinales y respiratorios':['Vengo por mi {d}, el de la crisis de la semana pasada.','Necesito el {d}, me ha tenido mal.'],
 'Antiinflamatorios y relajantes':['Es por el dolor de espalda, necesito el {d}.','Me mandaron {d} por una contractura.'],
 _:['Vengo por mi {d}. ¿Me revisa la receta?','Traigo la receta del {d}.']
};
const DLG_ASK_ANGRY=['Dame mi {d} de una vez, weón, llevo una hora aquí.','Ya po, mi {d}. La receta está bien, atiende no más, weón.','Yo vine por el {d}, no a conversar, weón.'];
function dlgDrug(p){const d=DRUGS[p.drug];return d?`${d.name} ${d.mg}`:'remedio'}
function dlgAge(p){return ageFromBirth(fictionalIdDates(p).birth)||30}
function dlgIsCL(p){return !p.nationalityCode||p.nationalityCode==='CL'}
function dlgOpener(p){
 const mood=patientMood(p),age=dlgAge(p);
 if(mood==='angry')return dlgPick(dlgIsCL(p)?DLG_OPEN.angry:DLG_OPEN.angryForeign,p,1);
 if(mood==='sad')return dlgPick(DLG_OPEN.sad,p,1);
 if(!dlgIsCL(p)&&DLG_OPEN[p.nationalityCode]&&dlgSeed(p,2)%2===0)return dlgPick(DLG_OPEN[p.nationalityCode],p,1);
 if(mood==='happy')return dlgPick(age>=65?DLG_OPEN.happyOld:DLG_OPEN.happy,p,1);
 return dlgPick(age>=65?DLG_OPEN.old:age<=28?DLG_OPEN.young:DLG_OPEN.neutral,p,1);
}
function dlgBody(p){
 const d=dlgDrug(p);
 const pool=patientMood(p)==='angry'&&dlgIsCL(p)?DLG_ASK_ANGRY:(DLG_ASK[DRUGS[p.drug]?.group]||DLG_ASK._);
 return dlgPick(pool,p,3).replace('{d}',d);
}
// Tipos que ya tienen líneas propias: solo se les antepone el humor si el paciente se ve enojado.
const DLG_OWN_LINES=['tuguelExpired','tuguelFake','minorGuardian','chemy','specialCarlos','chinese','clubNocturno','tarotera','abuelo','giftPaper','tmFraud','underage','stolen','idBirthDateFraud','fakeid','aluminio','lookHair','lookClothes','lookAge','sicolasMuros','rufus','podiatristRx','fakeDoctor'];
const DLG_KEEP_PLAIN=['tuguelExpired','tuguelFake','minorGuardian','chemy','specialCarlos','chinese','clubNocturno','tarotera','abuelo','giftPaper','aluminio','sicolasMuros','rufus','podiatristRx','idBirthDateFraud'];
function patientDialogue(p){
 if(DLG_KEEP_PLAIN.includes(p.kind))return baseDialogue(p);
 if(DLG_OWN_LINES.includes(p.kind)){
  const base=baseDialogue(p);
  return patientMood(p)==='angry'&&dlgIsCL(p)?`${dlgPick(DLG_OPEN.angry,p,1)} ${base}`:base;
 }
 const opener=dlgOpener(p);
 const key=dlgProblemKey(p);
 if(key&&dlgHasHint(p))return `${opener} ${dlgPick(DLG_HINTS[key],p,5)}`;
 if(p.noDocument)return `${opener} ${dlgBody(p)} ¿Me puede revisar la receta?`;
 return `${opener} ${dlgBody(p)}`;
}
// Frase que dice el paciente una vez tomada la decisión.
const DLG_REASON_SAY={'id-expired':'tengo el carnet vencido','id-missing':'no traje el carnet','id-date':'la fecha del carnet salió mala','doctor-rut':'al doctor se le equivocó el RUT','doctor-missing':'a la receta le falta un dato del doctor','patient-rut':'los datos no calzan','foreign-label':'al RUT le falta la glosa','rx-expired':'la receta está vencida','rx-registry':'el número de registro de la receta está malo','rx-date':'la fecha de la receta salió mala','rx-cheque':'me hicieron la receta en el formato equivocado','underage':'soy menor de edad','stock':'no hay stock'};
// Receta electrónica ya usada: al devolverla o destruirla el paciente se enoja siempre.
function electronicAngerDialogue(p,choice){
 const cl=dlgIsCL(p);
 const pool=choice==='destroy'
  ?(cl?['¡¿Me rompiste la receta, weón?! ¡Yo te alimento, culiao, esto no queda así!','¡Puta la weá! ¿Me la destruyes? ¡Ándate a la cresta, weón!','¡Weón, era mi receta! Ya poh, apúrate y dime qué hago ahora, culiao.']:['¡¿La destruyó?! ¡Esto es un abuso, voy a reclamar!','¡No tenía derecho a destruir mi receta! ¡Qué falta de respeto!'])
  :(cl?['¡¿Cómo que no me sirve, weón?! ¡Apúrate y arréglame esto, culiao!','Chuta la weá, ¿me la devuelves? ¡Ándate a la cresta, weón!','Yo te alimento, culiao... ya po, me la llevo, pero esto no queda así.']:['¡¿No me la acepta?! ¡Esto es inaceptable!','Qué falta de seriedad, me voy muy molesto.']);
 return dlgPick(pool,p,77);
}
function outcomeDialogue(p,decision,reportCategory,returnReason,correct){
 const mood=patientMood(p),cl=dlgIsCL(p),say=DLG_REASON_SAY[returnReason]||'algo anda mal con mis papeles';
 const guilty=correct&&decision!=='dispense';
 const salt=(decision.length*13)+(returnReason?returnReason.length:0);
 const pk=list=>dlgPick(list,p,40+salt);
 if(p.kind==='aluminio')return 'Saco wea, el carnet es para dominar a las masas, por eso no progresai perkin';
 const angry=mood==='angry';
 if(['fakeDoctor','podiatristRx','tmFraud'].includes(p.kind)&&['seremi','police','retain'].includes(decision)){
  // El paciente fue engañado por un falso prescriptor: no sabe nada, se asusta y se confunde.
  return pk(['¿Cómo que no es médico? Yo... yo no sabía, me atendió en una consulta normal.','¡Ay, no! Yo no hice nada, solo fui a que me vieran. ¿Qué va a pasar ahora?','No entiendo... me dio la receta como cualquier doctor. Por favor, no me culpe a mí.','¿Falso? Pero si tenía timbre y todo... ¡Me asusté! Yo pagué la consulta de buena fe.']);
 }
 if(decision==='dispense'){
  if(angry)return pk(cl?['Por fin, weón. Chao.','Ya po, ¿ves que no era tan difícil? Chao.','Al fin, weón. Que te vaya mal... digo, buenas tardes.']:['Por fin. Gracias, aunque tardó una eternidad.']);
  if(!correct)return pk(['Gracias, químico. Que le vaya muy bien.','Listo, qué amable. Hasta luego.']);
  if(mood==='sad')return pk(['Gracias, de verdad... me hacía falta.','Gracias, químico. Que tenga buena tarde.']);
  if(mood==='happy')return pk(['¡Mil gracias! Que tenga un día precioso.','¡Gracias, químico! ¡Hasta la próxima!']);
  return pk(['Gracias, químico. Hasta luego.','Perfecto, muchas gracias.','Gracias, que le vaya bien.']);
 }
 if(decision==='return'){
  if(angry)return pk(cl?[`¡Weón, ${say} y por eso me mandas pa la casa! Yo te alimento, culiao.`,'¡¿Me la devuelves?! Puta la weá, apúrate y arréglalo, weón.','Ándate a la cresta, weón. Ya vuelvo, pero esto no queda así, culiao.',`Weón, ${say}... ¡no es pa tanto, apúrate!`]:['¡Esto es inaceptable! Volveré, pero me quejaré.','¿Me la devuelve? ¡Qué falta de respeto!']);
  if(mood==='sad')return pk([`Tiene razón, ${say}... perdone la molestia, vuelvo mañana.`,`Ay, ${say}. Qué pena, ya vuelvo con todo en orden.`]);
  if(mood==='happy')return pk([`¡Ah, es cierto, ${say}! Qué despistado soy. Vuelvo enseguida.`,`Jajá, ${say}. ¡Gracias por avisarme, químico!`]);
  if(!correct)return pk(['Pero si mi receta estaba bien... bueno, voy a reclamar.','No entiendo qué pasó, pero vuelvo a revisar.']);
  return pk([`Ya, entiendo, ${say}. Vuelvo cuando lo tenga listo.`,`Tiene razón, ${say}. Gracias por avisar.`]);
 }
 if(decision==='seremi'){
  if(angry)return pk(cl?[correct?'¡¿Me vas a acusar a la SEREMI, weón?! ¡Qué te pasa, culiao!':'¡Weón, mi receta es verdadera! ¡Te vas a arrepentir, culiao!','Ándate a la cresta, weón. Que vengan no más, yo no tengo nada que esconder.','¡Yo te alimento, culiao! ¿Ahora me mandas a la SEREMI?']:['¡Esto es un abuso! ¡Llamaré a mi abogado!']);
  if(!correct)return pk(['Esto es un error, la receta es verdadera. Voy a reclamar.','¿La SEREMI? Pero si yo no hice nada malo...']);
  if(mood==='sad')return pk(['Por favor, no... lo hice por necesidad, químico.','Perdóneme... no sabía qué más hacer.']);
  if(mood==='happy')return pk(['Jejeje... bueno, valía la pena intentarlo.','Ay, me pillaron. Qué le vamos a hacer.']);
  return pk(['Ya, me pilló. Fue una tontera.','Está bien... no pensé que lo iba a notar.']);
 }
 if(decision==='police'){
  if(angry)return pk(cl?['¡¿Carabineros, weón?! ¡Yo te alimento, culiao, esto no queda así!','Chuta, weón, ¿llamaste a los pacos? ¡Ándate a la cresta!','¡Suéltame, weón! ¡No hice nada, culiao!']:['¡No me toque! ¡Esto es una injusticia!']);
  if(!correct)return pk(['¡Se equivoca! Yo no hice nada, mire mis papeles.','Esto es un malentendido, llamen a mi doctor.']);
  if(mood==='sad')return pk(['Por favor, no llame a Carabineros... tengo familia.','No quería llegar a esto, perdóneme.']);
  return pk(['Está bien, está bien... voy con ellos, no hagamos escándalo.','Ya, me pillaron. No me resisto.']);
 }
 // retain, keep-paper u otros
 if(angry)return pk(cl?['¡Oye, weón, devuélveme la receta! ¡Ladrón, culiao!','¿Te quedas con mi receta? ¡Apúrate y devuélvemela, weón!']:['¡Devuélvame mis papeles de inmediato!']);
 if(mood==='sad')return pk(['Está bien... me quedo sin nada entonces.','Ya... qué le vamos a hacer.']);
 if(!correct)return pk(['Pero si es mía, ¿por qué se queda con ella?','No entiendo, pero bueno.']);
 return pk(['Está bien, como usted diga.','Ya, entonces me voy no más.']);
}

function baseDialogue(p){
 if(p.kind==='tuguelExpired')return '¡Qué pasa, papito! ¿Me da el medicamento? Traigo el carnet acá.';
 if(p.kind==='minorGuardian')return p.quote;
 if(p.kind==='chemy')return 'Muuu... digo, buenas tardes. Vengo por mi fenbendazol al 25 %, aquí está la receta.';
 if(p.kind==='tuguelFake')return '¡Ya po, papito! Ahora sí traje el documento renovado. ¿Estamos listos?';
 if(p.kind==='specialCarlos')return '¡Buenas! Tengo una receta de clotiazepam de 10. El carnet lo tengo aquí por si lo necesita.';
 if(p.kind==='chinese')return '年轻人，收下吧。这份礼物会让你受益一生。';
 if(p.kind==='clubNocturno')return 'Yo era de noruega papito, fama maxima, anda a pasarlo bien';
 if(p.kind==='tarotera')return 'Tome, pa que sepa que hacer';
 if(p.kind==='abuelo')return 'Se le nota cansado, joven. Tome un dulce, que con algo rico se arregla el día.';
 if(p.kind==='giftPaper')return 'No vengo a comprar nada, joven. Le dejo esto de recuerdo. No me haga preguntas.';
 if(p.kind==='tmFraud')return declaresTechnologistTitle(p)
  ?'Me dieron esta receta en la consulta. Me dijeron que podía retirar el medicamento acá.'
  :'Me aseguró que era médico. Mire el timbre, está clarito... ¿por qué lo mira tanto?';
 if(p.kind==='underage')return 'Tengo 17. La receta está a mi nombre, pero me dijeron que viniera con un adulto...';
 if(p.kind==='stolen')return 'Vine de lejos y estoy apurado. ¿Por qué revisa ese número de folio tres veces?';
 if(p.kind==='idBirthDateFraud')return p.quote;
 if(p.kind==='fakeid'&&p.catalogId===618)return 'Soy yo el del carnet por si acaso, me corté el pelo';
 if(p.kind==='fakeid')return 'Lo de la fotografía es por el cambio de look, se lo juro. ¿Me atiende?';
 if(p.kind==='aluminio')return 'estos weones quieren puro controlarnos';
 if(p.noDocument){
  return 'Buenas, vengo por este medicamento. ¿Me puede revisar la receta?';
 }
 if(p.kind==='lookHair')return 'La foto es de antes de cambiarme el pelo. Si quiere, verificamos mi huella.';
 if(p.kind==='lookClothes')return 'Andaba con otra pinta cuando renové el carnet. ¿Le sirve mi huella?';
 if(p.kind==='lookAge')return 'Los años pasan para todos, ¡menos para la foto del carnet! ¿Me revisa la huella?';
 if(p.kind==='sicolasMuros'||p.kind==='rufus'||p.kind==='podiatristRx')return p.quote;
 if(p.kind==='fakeDoctor')return 'Este doctor es nuevo. Tiene la consulta al lado de la feria, creo...';
 if(p.nationalityCode==='VE')return ['Vengo por mi receta. Traje todos los papeles, creo.','¿Me ayuda con esto? Siempre me confundo con el tipo de receta.'][p.portraitSeed%2];
 if(p.nationalityCode==='HT')return ['Buenas tardes, ¿me revisa la receta?',p.gaveId?'Aquí están la receta y la cédula.':'Tengo la cédula si la necesita.'][p.portraitSeed%2];
 if(p.nationalityCode==='AR')return ['Buenas, ¿está bien todo en esta receta?','Estoy esperando desde temprano, pero revísela con calma.'][p.portraitSeed%2];
 if(p.nationalityCode==='PE')return ['Disculpe, químico, ¿me puede revisar el folio?',p.gaveId?'Hola, aquí están la receta y el carnet.':'Hola, traigo el carnet por si lo necesita.'][p.portraitSeed%2];
 if(p.nationalityCode==='IT')return p.gaveId?'Buongiorno, aquí están la receta y mi identificación.':'Buongiorno, ¿puede revisar mi receta?';
 if(p.nationalityCode==='BO')return ['Buenas tardes, joven. ¿Me puede revisar la receta?',p.gaveId?'Aquí tiene la receta y mi cédula.':'Tengo mi cédula por si la necesita.'][p.portraitSeed%2];
 if(p.nationalityCode==='DE')return 'Guten Tag, buenas tardes. ¿Necesita comprobar mi cédula?';
 if(p.nationalityCode==='CN')return [p.gaveId?'Hola, aquí están mi receta y el carnet.':'Hola, tengo el carnet si lo necesita.','Buenos días. ¿Me confirma si el medicamento está disponible?'][p.portraitSeed%2];
 const age=ageFromBirth(fictionalIdDates(p).birth)||30;
 const pool=age>=65?[
  p.gaveId?'Hijito, aquí están la receta y mi carnet.':'Hijito, vengo por mis remedios. Si necesita mi carnet, está en la cartera.',
  'Me trajeron en colectivo para esto. ¿Me revisa la receta con calma, por favor?',
  'Tengo la receta doblada desde el lunes, pero aún se lee. ¿Verdad que sí?'
 ]:age<=28?[
  'Disculpe, llevo media hora en la fila. ¿Está todo correcto con la receta?',
  p.gaveId?'¡Hola! Aquí están el carnet y la receta.':'¡Hola! ¿Tengo que mostrar el carnet también?',
  'El médico me la envió después de la clase. ¿Me dice si falta algo?'
 ]:[
  'Buenas tardes. ¿Me puede revisar esta receta?',
  'Hola, químico. Me dijeron que este medicamento estaba disponible acá.',
  'Hoy he tenido un día larguísimo. Ojalá el trámite sea rápido.'
 ];
 return pool[(p.portraitSeed||0)%pool.length];
}
// El menor devuelto vuelve al día siguiente con su papá.
function queueMinorGuardian(p){
 if(!p||p.kind!=='underage'||p.guardianQueued)return;
 p.guardianQueued=true;
 game.minorGuardianQueue=game.minorGuardianQueue||[];
 game.minorGuardianQueue.push({due:game.day+1,son:{name:p.name,rut:p.rut,catalogId:p.catalogId,drug:p.drug,qty:p.qty||1}});
 record(`${p.name} es menor de edad: deberá volver con un adulto.`);
}
// El papá es siempre el mismo: Óscar Hidalgo Campos (ficha 626, reservada: no sale como paciente normal).
const GUARDIAN_FATHER_ID=626;
function pickGuardianRecord(){return CAST600[GUARDIAN_FATHER_ID]}
function makeMinorGuardianVisit(son){
 const rec=pickGuardianRecord();if(!rec)return null;
 let p=null;
 for(let k=0;k<20;k++){p=makePatient('controlled',70+game.day+k);if(p.nationalityCode==='CL')break}
 for(const key of ['idCatalogId','variantImpostor','appearanceStyle','extraPortraitId','catalogId','portraitModel','idPortraitModel','registeredBirthDate','docAuthenticity','idIssued','idExpires','confirmedIdSex','idSex','documentNumber'])delete p[key];
 p.idDateSystem=0;
 applyCatalogIdentity(p,rec);
 initializeIdentityDocument(p,game.day);
 p.registeredBirthDate=p.birthDate;
 Object.assign(p,{kind:'minorGuardian',guardianVisit:true,sonName:son.name,sonCatalogId:son.catalogId,
  rxPatientName:son.name,rxRut:son.rut,drug:son.drug,qty:son.qty||1,rxType:'RETENIDA',
  gaveId:true,noDocument:false,idUndercover:false,prescriberRegistered:true,
  callStatus:null,callResponder:null,callRejected:false,callAttempts:0,identityScan:null,done:false,
  rxDate:dateOf(game.day),folio:String(7400+game.day*31).padStart(6,'0'),
  issue:'Menor de edad acompañado por su padre; carnet y receta en regla.',
  quote:`Vengo con mi hijo ${String(son.name).split(' ')[0]}. Ayer le devolvieron la receta por ser menor. Aquí está mi carnet.`});
 if(DRUGS[p.drug]?.stockControl&&game.stock[p.drug]<p.qty)game.stock[p.drug]=p.qty;
 return p;
}
function addMinorGuardianVisits(){
 const queue=game.minorGuardianQueue||[];
 const ready=queue.filter(entry=>entry.due<=game.day);
 game.minorGuardianQueue=queue.filter(entry=>entry.due>game.day);
 ready.forEach((entry,i)=>{
  const p=makeMinorGuardianVisit(entry.son);
  if(p)game.patients.splice(Math.min(2+i,game.patients.length),0,p);
 });
}
// Desenlaces de las denuncias: siempre dentro de la historia, con el paciente reaccionando.
function authorityStory(kind,p){
 const n=escapeText(String(p?.firstNames||p?.name||'El paciente').trim().split(/\s+/)[0]);
 let h=0;for(const c of String((p?.folio||'')+(p?.name||'')))h=(h*31+c.charCodeAt(0))>>>0;
 const pick=list=>list[h%list.length];
 if((kind==='police-illegal-practice'&&['podiatristRx','tmFraud'].includes(p?.kind))||(kind==='seremi-rx'&&p?.kind==='fakeDoctor'))return pick([
  `La denuncia apunta a quien firmó la receta, no a ${n}. Los investigadores se llevan el timbre y los talonarios. ${n} se queda pálido en el mesón: «¿Cómo...? Yo pensé que era doctor de verdad. Me dio mucho susto, químico, no sabía nada».`,
  `Carabineros y la SEREMI abren una investigación contra el falso prescriptor. ${n} no puede creerlo: «¿Entonces la consulta era mentira? Yo pagué de buena fe... ¿Qué hago ahora con mi tratamiento?».`,
  `El caso queda en manos de la autoridad, que va tras el prescriptor. ${n} tiembla un poco y murmura: «Yo no sabía, de verdad. Gracias por avisarme... estoy muy asustado».`
 ]);
 if(patientMood(p)==='angry'&&dlgIsCL(p)){
  if(kind==='seremi-rx')return pick([
   `Una fiscalizadora de la SEREMI levanta el acta y cursa la multa. ${n} revienta: «¡Weón, qué abuso! ¡Yo te alimento, culiao!». Firma de mala gana y se va dando un portazo.`,
   `La autoridad sanitaria cursa la multa. ${n} la lee, se pone rojo y suelta: «¡La weá injusta! ¡Ándate a la cresta, químico!». Igual firma el acta.`
  ]);
  if(kind==='police-bribe')return pick([
   `Carabineros llega y detiene a ${n} por ofrecer plata a cambio de un medicamento. Mientras lo suben al furgón grita: «¡Suéltenme, weones! ¡Esto no queda así, culiao!».`,
   `Dos carabineros entran a la farmacia y se llevan a ${n}, que va protestando: «¡Apúrense, weones, si no hice nada!».`
  ]);
  return pick([
   `Carabineros llega a la farmacia y se lleva a ${n}, que grita desde la puerta: «¡Yo te alimento, culiao! ¡Ándate a la cresta!».`,
   `Dos carabineros detienen a ${n}, que se resiste y vocifera: «¡Suéltame, weón! ¡Esto es un abuso, culiao!».`
  ]);
 }
 if(kind==='seremi-rx')return pick([
  `Una fiscalizadora de la SEREMI levanta el acta y cursa la multa. ${n} la lee en silencio, se frota la frente y murmura: «No lo vuelvo a hacer, químico. Se lo juro».`,
  `La autoridad sanitaria cursa la multa y deja una copia del acta sobre el mesón. ${n} firma con la mano temblorosa: «Fue una tontera mía... No va a volver a pasar».`,
  `Llega el aviso de la SEREMI: multa por presentar una receta que no era legítima. ${n} baja la voz y dice, mirando el suelo: «Perdone la molestia. Aprendí la lección».`,
  `El acta sanitaria queda firmada y la multa, cursada. ${n} se ajusta la chaqueta y se despide: «Ya, ya... me lo merezco. Otra vez no, se lo prometo».`
 ]);
 if(kind==='police-bribe')return pick([
  `Carabineros llega a la farmacia y detiene a ${n} por ofrecer dinero a cambio de un medicamento sin receta. Mientras se lo llevan, alcanza a decir: «Fue un momento de desesperación, químico...».`,
  `Dos carabineros entran por la puerta y se llevan a ${n} para tomarle declaración. «No debí ofrecerle plata, perdone», murmura antes de subir al furgón.`
 ]);
 return pick([
  `Carabineros llega a la farmacia y se lleva a ${n} para tomarle declaración. Desde la puerta alcanza a decir: «Fue una locura, químico... nunca más».`,
  `Una patrulla de Carabineros se detiene frente al local. ${n} no ofrece resistencia: «Ya po, no hay para qué ponerse así. Me equivoqué, y feo».`,
  `Dos carabineros toman declaración en el mesón y se llevan a ${n}. «Perdóneme, químico. Usted solo hacía su pega», dice antes de salir.`
 ]);
}
function queueCorrectedPrescription(p,reason,fieldReasons){
 if(!fieldReasons.includes(reason)||!lookupPrescriber(p).registered)return;
 game.correctedPrescriptionQueue.push({due:game.day+1,patient:{...p},...(reason==='rx-registry'?{quote:'Hola, volví. El doctor corrigió el número de registro y aquí está la receta corregida. ¿Ahora sí?'}:{})});
}
function addCorrectedPrescriptionVisits(){
 const queued=game.correctedPrescriptionQueue;
 const ready=queued.filter(entry=>entry.due<=game.day);
 game.correctedPrescriptionQueue=queued.filter(entry=>entry.due>game.day);
 const visitors=ready.map(({patient,prescriber=patient.prescriber,quote},i)=>{
  const foreign=usesForeignPrescriptionId(patient);
  return {...patient,kind:'correctedPrescription',folio:String(800000+game.day*100+i),
   prescriber,prescriberRut:DOCTOR_REGISTRY[prescriber].rut,signature:DOCTOR_REGISTRY[prescriber].signature,
   prescriberRegistered:true,claimedTitle:undefined,rxDate:dateOf(game.day),
   rxRut:foreign?patient.documentNumber:patient.rut,rxForeignLabel:foreign,
   rxType:DRUGS[patient.drug]?.kind==='CHEQUE'?'CHEQUE':patient.rxType,rxReg:undefined,
   done:false,noDocument:false,gaveId:true,idUndercover:false,callStatus:null,callResponder:null,callRejected:false,
   callAttempts:0,doctorVerified:false,identityScan:null,qrValidation:null,qrReported:false,
   issue:'El paciente regresó con la receta corregida.',
   quote:quote||'Hola, volví con el temita solucionado. Aquí está la receta corregida. ¿La puede revisar?'};
 });
 game.patients.splice(Math.min(2,game.patients.length),0,...visitors);
}
function prepareDay(){
 if(activateDaySevenEnding())return;
 const standard=game.day===1?['correct','carvedilol','correct','typo','controlled']:
 game.day===2?['different','electronic','check']:
 game.day===3?['stolen','expired','controlled']:
 game.day===4?['controlled','wrongtype','double','check','retainedCommon']:
 game.day===5?['rufus','check','retainedCommon','correct']:
 game.day===6?['controlled','retainedCommon','different','prescriberTypo']:
 game.day===8?['fakeid','controlled','retainedCommon','prescriberMismatch']:
 ['controlled','wrongtype','double','check','retainedCommon'];
 const types=[...standard];
 // Genuine identities with visual changes: hair, outfit or years since the original photograph.
 if(game.day>=3&&Math.random()<0.20){
  const changing=['lookHair','lookClothes','lookAge'];
  types.splice(Math.min(types.length,1+Math.floor(Math.random()*types.length)),0,changing[Math.floor(Math.random()*changing.length)]);
 }
 if(game.day>8&&Math.random()<0.25)types.splice(1,0,'fakeid');

 game.specialEvents=game.specialEvents||{nomehWeiSeen:false,clubNocturnoSeen:false};
 // One-time NPCs. 1% per day until the guaranteed final day; no repeat afterward.
 if(!game.specialEvents.nomehWeiSeen&&game.day<=4&&(game.day===4||Math.random()<0.01)){types.push('chinese');game.specialEvents.nomehWeiSeen=true;}
 if(!game.specialEvents.clubNocturnoSeen&&game.day<=6&&(game.day===6||Math.random()<0.01)){types.push('clubNocturno');game.specialEvents.clubNocturnoSeen=true;}
 if(game.day>=4&&Math.random()<0.014)types.push('giftPaper');
 if(game.day===10&&!game.specialEvents.taroteraSeen){types.push('tarotera');game.specialEvents.taroteraSeen=true;}
 // Chemy: una vez por campaña, 12 % diario desde el día 3 y garantizada el día 12. Su receta siempre es válida.
 if(!game.specialEvents.chemySeen&&game.day>=3&&(game.day>=12||Math.random()<0.12)){types.push('chemy');game.specialEvents.chemySeen=true;}
 if(!game.specialEvents.aluminioSeen&&game.day>=2&&(game.day===9||Math.random()<0.08)){types.push('aluminio');game.specialEvents.aluminioSeen=true;}
 // Independientes y diarios, desde la primera jornada.
 if(Math.random()<0.05)types.splice(Math.min(2,types.length),0,'fakeDoctor');
 const tmRoll=Math.random();
 const tmTitle=tmRoll<0.015?'Tecnólogo Médico':'Médico Cirujano';
 if(tmRoll<0.03)types.splice(Math.min(3,types.length),0,'tmFraud');
 if(Math.random()<0.03)types.splice(Math.min(4,types.length),0,'podiatristRx');
 if(game.day>=3&&Math.random()<0.035)types.push('underage');
 if(game.day>=3&&Math.random()<0.12)types.push('idExpired');
 if(game.day>=4&&Math.random()<0.065)types.push('idFuture');
 if(game.day>=4&&Math.random()<0.075)types.push('idSexMismatch');
 if(game.day>=2&&Math.random()<0.055)types.push('idLastDay');
 if(game.day%2===0 && Math.random() < (game.day===14?0.01:0.005))types.push('specialCarlos');
 if(Math.random()<0.10){
  const position=Math.floor(Math.random()*(types.length+1));
  types.splice(position,0,'idBirthDateFraud');
 }
 game.patients=types.map((type,i)=>makePatient(type,i,tmTitle));
 insertAbueloIfDue(Math.min(2,game.patients.length));
 if(game.day>=2&&game.day<=6&&!game.donVictorVisitDay&&Math.random()<0.60){
  const position=Math.floor(Math.random()*(game.patients.length+1));
  game.patients.splice(position,0,{kind:'donVictor',name:'Don Victor',quote:'Me da una moneita, me da cien peso?',noDocument:true,done:false});
  game.donVictorVisitDay=game.day;
 }
 // Solo las recetas electrónicas ya dispensadas pueden volver con el mismo código.
 // Devolver la copia permite un nuevo intento desde el día siguiente (35% diario).
 game.returnedElectronicPrescriptions=game.returnedElectronicPrescriptions||[];
 for(const entry of game.returnedElectronicPrescriptions){
  if(entry.destroyed||game.day<=entry.lastReturnedDay||Math.random()>=0.35)continue;
  const p={...entry.patient,kind:'electronicRepeat',rxType:'ELECTRÓNICA',qrValidation:null,qrReported:false,
   gaveId:true,noDocument:false,done:false,identityScan:null,issue:'Código electrónico ya dispensado',
   quote:'Hola, traje la receta electrónica otra vez. ¿Puede validar este código?'};
  game.patients.splice(Math.min(2,game.patients.length),0,p);
  entry.lastSeenDay=game.day;
 }
 if(game.day===2&&game.specialEvents.tuguelReturnPending&&!game.specialEvents.tuguelReturnSeen){
   const original=game.specialEvents.tuguelPatient||{};
   const p={...makePatient('tuguelFake',-1),...original,kind:'tuguelFake',issue:'Identificación de fantasía presentada como válida',done:false,gaveId:true,identityScan:null,callStatus:null,quote:'¡Ya po, papito! Ahora sí traje el documento renovado. ¿Estamos listos?',docAuthenticity:'forged-license',idIssued:'16/11/2026',idExpires:'16/11/2034'};
   game.patients.unshift(p);game.specialEvents.tuguelReturnPending=false;game.specialEvents.tuguelReturnSeen=true;
 }

 if(game.pendingChequeRevisit&&game.pendingChequeRevisit.due<=game.day){
  const entry=game.pendingChequeRevisit;
  const p={...entry.patient,kind:entry.corrected?'correctedCheque':'wrongtypeRepeat',
    rxType:entry.corrected?'CHEQUE':'SIMPLE',rxDate:dateOf(game.day),folio:String(6800+game.day*29).padStart(6,'0'),
    issue:entry.corrected?'La receta corregida cumple el formato':'Receta blanca reiterada pese a la advertencia',
    done:false,gaveId:true,callStatus:null,callResponder:null,callRejected:false,callAttempts:0,identityScan:null,quote:entry.corrected?
    'Volví con la receta cheque como me indicaron. ¿Ahora está todo en orden?':
    'Me advirtieron la otra vez, pero traje esta receta blanca nuevamente...'};
  game.patients.splice(Math.min(2,game.patients.length),0,p);
  game.pendingChequeRevisit=null;
  addNotice('retorno-receta-'+game.day,'SEGUIMIENTO SEREMI · PACIENTE CITADO',
    'La persona observada por formato de receta vuelve hoy a la farmacia.', 'seremi');
 }
 if(game.day>=2&&Object.values(game.hidden).some(v=>v>0)&&Math.random()<0.10){
  game.patients.push({kind:'bribe',undercover:Math.random()<0.03,name:variedPatientName('male','Cliente desconocido','bribe'),drug:'clonazepam2',quote:'Necesito clonazepam de 2 mg sin receta. Puedo pagarle algo extra, químico.',face:'male',rut:'',rxRut:'',rxDate:'',folio:'',gaveId:false,portraitSeed:Math.floor(Math.random()*2147483647),idPortraitSeed:0});assignPatientModel(game.patients[game.patients.length-1]);
 }
 addCorrectedPrescriptionVisits();
 addMinorGuardianVisits();
 if(game.day===SIS_UNLOCK_DAY)game.patients.unshift(makePatient('sicolasMuros',-1));
 if(game.day===1&&!game.specialEvents.tuguelDay1Seen){
  game.patients.splice(TUGUEL_FIRST_VISIT_INDEX,0,makePatient('tuguelExpired',-1));
  game.specialEvents.tuguelDay1Seen=true;
 }
 ensureDaySevenPatient();
 game.patientIndex=0;game.patientResult=null;game.patientVerified=false;game.idRequested=false;game.qrChecked=false;game.deliveryDone=false;game.delivery=null;game.boxOpened=false;game.inspectedPacks=[];game.inspectionDone=false;game.inspectionIssue=null;game.inspectionResolutionLocked=false;game.finesToday=0;game.dayIncome=0;game.dayBonus=0;game.dayExpenses=0;game.dayPay=false;game.daySummary=null;game.illegalToday=0;
 if(game.day>=3)addNotice('stolen-3472','ALERTA · TALONARIO ROBADO',STOLEN_FOLIO_ALERT,'alerta');
 if(sisAvailable()){
  const {key,title,body,type}=SIS_UNLOCK_NOTICE;
  addNotice(key,title,body,type);
 }
 if(game.day>=8)addNotice('id-alert','AVISO DE IDENTIFICACIÓN','Se han reportado cédulas sospechosas. Contrasta la fotografía con quien las presenta; puedes devolver o denunciar si hay indicios.','alerta');
 if(game.pendingCorrections.some(x=>x.due<=game.day))addNotice('delivery-'+game.day,'RECTIFICACIÓN DE PEDIDO','Llegó una entrega especial o retiro vinculado a una incidencia anterior. Consulta recepción de pedidos.','pedido');
}

function pickAltLaboratory(i,seed=0){return ((i+seed)%2===0)?'Tulab':'Chicle'}
function wrongDrugVariant(drugId){
 const explicit={
  clonazepam2:'clonazepam05',
  clonazepam05:'clonazepam2',
  clotiazepam10:'clonazepam05',
  losartan:'losartan_100_mg_comprimidos',
  losartan_100_mg_comprimidos:'losartan',
  amlodipino_5_mg_comprimidos:'carvedilol_25_mg_comprimidos',
  metformin:'omeprazol_20_mg_capsulas',
  methylphenidate:'clonazepam05'
 };
 if(explicit[drugId]&&DRUGS[explicit[drugId]])return explicit[drugId];
 const ids=Object.keys(DRUGS).filter(id=>id!==drugId&&!DRUGS[id].exclusive);
 return ids[Math.abs(drugId.length*17)%ids.length]||drugId;
}
function buildDeliveryPackItems(delivery){
 const items=[];
 if(Array.isArray(delivery.lines)){
  const seed=String(delivery.id||'').length%2;
  for(const row of delivery.lines)for(let n=0;n<row.expected;n++)items.push({drug:row.drug,laboratory:pickAltLaboratory(items.length,seed),damaged:false});
  return items;
 }

 const seed=(delivery.id||'').split('').reduce((a,c)=>a+c.charCodeAt(0),0)%7;
 for(let i=0;i<delivery.actual;i++){
  items.push({
   drug:delivery.kind==='wrong'?wrongDrugVariant(delivery.drug):delivery.drug,
   laboratory:pickAltLaboratory(i,seed),
   damaged:delivery.kind==='damaged'&&i===delivery.actual-1
  });
 }
 return items;
}
function withPackItems(delivery){delivery.packItems=buildDeliveryPackItems(delivery);return delivery}
function makeDelivery(){if(game.pendingCorrections.some(x=>x.due<=game.day)){
   const r=game.pendingCorrections.find(x=>x.due<=game.day);
   return withPackItems({id:'C-'+r.id,regular:false,name:r.mode==='pickup'?'Retiro de excedentes':'Pedido rectificatorio',drug:r.drug,expected:r.amount,actual:r.amount,kind:r.mode==='pickup'?'pickup':'corrected',laboratory:'Mixto',reported:false,ref:r.id,boxes:r.amount});
 }
 if(game.day>=6){
  const essentials=['clonazepam2','clotiazepam10','methylphenidate'];
  const needs=essentials.filter(id=>(game.stock[id]||0)<=4).sort((a,b)=>game.stock[a]-game.stock[b]);
  if(needs.length){const drug=needs[0];return withPackItems({id:'REP-'+String(9000+game.day*17).padStart(6,'0'),regular:true,name:'Abastecimiento programado',drug,expected:7,actual:7,kind:'correct',laboratory:'Mixto',reported:false,boxes:7});}
 }
 if(game.day>=4 && game.day%3===0){
  const ids=['losartan','metformin','clotiazepam10','clonazepam05','amlodipino_5_mg_comprimidos','carvedilol_25_mg_comprimidos','atorvastatina_20_mg_comprimidos','methylphenidate'];
  const i=(game.day*3)%ids.length;
  const group=[ids[i],ids[(i+2)%ids.length],ids[(i+5)%ids.length]];
  const counts=[1,2,3];
  const lines=group.map((drug,j)=>({drug,expected:counts[j]}));
  return withPackItems({id:'GD-'+String(8000+game.day*7).padStart(6,'0'),regular:true,name:'Distribuidora Central Sur',drug:group[0],lines,expected:6,actual:6,kind:'multi',laboratory:'Mixto',reported:false,boxes:6});
 }
 const variants=[{drug:'clonazepam2',expected:3,actual:4,kind:'surplus'}, {drug:'clotiazepam10',expected:3,actual:3,kind:'wrong'}, {drug:'metformin',expected:3,actual:2,kind:'missing'}, {drug:'losartan',expected:4,actual:4,kind:'damaged'}, {drug:'clonazepam05',expected:4,actual:4,kind:'correct'}];
 const v={...variants[(game.day-1)%variants.length]};
 if(game.day>=6&&['correct','missing','damaged'].includes(v.kind)){
  const restockVariety=['amlodipino_5_mg_comprimidos','carvedilol_25_mg_comprimidos','bisoprolol_5_mg_comprimidos','atorvastatina_20_mg_comprimidos','omeprazol_20_mg_capsulas','levotiroxina_50_mcg_comprimidos_mcg','losartan_100_mg_comprimidos','metformin'];
  v.drug=restockVariety[(game.day+Math.floor(game.day/5))%restockVariety.length];
 }
 return withPackItems({id:'GD-'+String(8000+game.day*7).padStart(6,'0'),regular:true,name:'Distribuidora Central Sur',...v,laboratory:'Mixto',reported:false,boxes:v.actual});
}
function receivePlan(d){let good=d.actual,held=0;if(d.kind==='surplus'){good=d.expected;held=d.actual-d.expected}else if(d.kind==='wrong'){good=0;held=d.actual}else if(d.kind==='damaged'){good=Math.max(0,d.actual-1);held=d.actual-good}return {good,held,documented:d.expected,physical:d.actual}}
// Cada regalo es único y puede utilizarse una vez. Precios fijados por el diseñador.
const GIFT_STORE_PRICES={
 [DIRTY_CLOTH]:100,
 'Chocolate artesanal':1000,
 'Cupón farmacia 15%':null,
 'Cupón farmacia 20%':null,
 'Tarjeta publicitaria':0,
 'Papel en chino':67,
 'Tarjeta del club nocturno':0,
 'Tabletón Funa':100,
 'Caramelo 1/4 hora':20,
 'Luca':1000,
 'Bombón de licor':150,
 'Carta Tarot':10000,
 'Bagoncito':5000
};
const GIFT_CATALOG=[
 {label:'Chocolate artesanal',category:'Dulce',effect:'QF +12 / Carlitos +15',price:1000},
 {label:'Tabletón Funa',category:'Dulce',effect:'QF +8 / Carlitos +10',price:100},
 {label:'Caramelo 1/4 hora',category:'Dulce',effect:'QF +4 / Carlitos +5',price:20},
 {label:'Bombón de licor',category:'Dulce para adultos',effect:'QF +10; no apto para regalar a Carlitos',price:150},
 {label:'Luca',category:'Dinero',effect:'Canjear por $1.000 de efectivo',price:1000},
 {label:'Cupón farmacia 15%',category:'Cupón',effect:'15% descuento en tratamiento',price:null},
 {label:'Cupón farmacia 20%',category:'Cupón',effect:'20% descuento en tratamiento',price:null},
 {label:'Tarjeta publicitaria',category:'Papel',effect:'Coleccionable',price:0},
 {label:'Papel en chino',category:'Papel',effect:'Coleccionable',price:67},
 {label:'Tarjeta del club nocturno',category:'Papel',effect:'Coleccionable',price:0},
 {label:'Bagoncito',category:'Dulce',effect:'QF +20 / Carlitos +20',price:5000},
 {label:'Carta Tarot',category:'Carta',effect:'Coleccionable; no tiene función en el juego',price:10000}
];
function giftKey(g){return g.item==='Cupón farmacia'?`Cupón farmacia ${g.pct||15}%`:g.item}
function giftSalePrice(g){return GIFT_STORE_PRICES[giftKey(g)]??null}
function isSweet(g){return !!g&&['Chocolate artesanal','Tabletón Funa','Caramelo 1/4 hora','Bombón de licor','Bagoncito'].includes(g.item)}
function canGiftCarlitos(g){return isSweet(g)&&g.item!=='Bombón de licor'}
function moodFromSweet(g,recipient){const boosts={
 'Chocolate artesanal':{qf:12,carlitos:15},
 'Tabletón Funa':{qf:8,carlitos:10},
 'Caramelo 1/4 hora':{qf:4,carlitos:5},
 'Bombón de licor':{qf:10,carlitos:0},
 'Bagoncito':{qf:20,carlitos:20}
};return boosts[g.item]?.[recipient]||0}
// Visita única del abuelo de la bufanda naranja: aparece cuando el ánimo del QF o de Carlitos baja de 60.
function insertAbueloIfDue(position){
 if(!game||!game.abueloDue||game.tutorial||!Array.isArray(game.patients))return;
 if(position===undefined){
  if(game.scene!=='counter')return;
  position=Math.min(game.patients.length,game.patientIndex+1);
 }
 game.patients.splice(position,0,makePatient('abuelo',-1));
 game.abueloDue=false;
}
function changeMood(whose,delta,reason){
 const prop=whose==='carlitos'?'moodCarlitos':'moodQf';
 const before=Math.max(0,Math.min(100,Number(game[prop])||0));
 game[prop]=Math.max(0,Math.min(100,before+delta));
 if(delta<0&&!game.tutorial&&game[prop]<60){game.specialEvents=game.specialEvents||{};if(!game.specialEvents.abueloSeen){game.specialEvents.abueloSeen=true;game.abueloDue=true;insertAbueloIfDue();}}
 if(delta!==0){game.moodNotes=game.moodNotes||[];game.moodNotes.unshift({day:game.day,who:whose,delta:game[prop]-before,reason});if(game.moodNotes.length>60)game.moodNotes.length=60}
}
function moodBar(label,value,key='qf',small=false){
 const n=Math.max(0,Math.min(100,Math.round(value||0))),kind=n<=25?'critical':n<=49?'low':n<=74?'mid':'high';
 return `<div class="mood-track ${small?'mini-mood':''}" aria-label="Ánimo de ${escapeText(label)}: ${n} de 100"><div class="mood-track-head"><span>${escapeText(label)}</span><b>${n}/100</b></div><div class="mood-bar"><span class="mood-fill ${kind}" style="width:${n}%"></span></div></div>`;
}
function useSweet(index,recipient){
 const g=game.gifts?.[index];
 if(!g||g.used||!isSweet(g)){toast('Este objeto no se puede consumir.');return}
 if(recipient==='carlitos'){
  if(game.scene!=='home'){toast('Puedes regalarle un dulce a Carlitos al regresar a casa.');return}
  if(!canGiftCarlitos(g)){toast('Ese bombón contiene licor. No se le puede dar a Carlitos.');return}
 }
 const add=moodFromSweet(g,recipient);
 changeMood(recipient,add,`${recipient==='carlitos'?'Regalo para Carlitos':'Dulce consumido'}: ${g.item}`);
 g.used=true;g.usedBy=recipient==='carlitos'?'Regalado a Carlitos':'Consumido por el QF';g.usedOnDay=game.day;
 record(`${recipient==='carlitos'?'Carlitos recibió':'El QF comió'} ${g.item}. Ánimo +${add}.`);
 if(recipient==='carlitos')game.lastFamilyGift=`Hoy Carlitos recibió ${g.item}. ${game.hospital?.active?'Sonrió desde la cama y lo guardó para después.':'Dijo que era el mejor regalo de toda la semana, aunque el lunes dijo lo mismo.'}`;
 save();ui.modal='gifts';render();toast(`Ánimo de ${recipient==='carlitos'?'Carlitos':'QF'} +${add}`);
}
function sellGift(index){
 const g=game.gifts?.[index];
 if(!g||g.used)return;
 const price=giftSalePrice(g);
 if(!Number.isFinite(price)||price<0){toast('Falta asignar precio de venta a este regalo.');return}
 game.cash+=price;g.used=true;g.usedBy='Vendido';g.usedOnDay=game.day;
 record(`Vendiste ${g.item} por ${pesos(price)}.`);save();ui.modal='gifts';render();toast(`Venta registrada: ${pesos(price)}`);
}
function discardGift(index){
 const g=game.gifts?.[index];if(!g||g.used)return;
 g.used=true;g.usedBy='Botado';g.usedOnDay=game.day;
 record(`Botaste ${g.item}.`);
 save();ui.modal='gifts';render();toast(`${g.item} fue descartado.`);
}
function washSchoolCloth(index){
 const gift=game.gifts[index];
 if(!gift||gift.used||gift.item!==DIRTY_CLOTH)return;
 gift.item=CLEAN_CLOTH;
 record('Lavaste la tela de Don Victor.');
 save();render();toast('La tela quedó limpia.');
}
function availableSchoolCloth(){
 return game.gifts.find(gift=>!gift.used&&gift.item===CLEAN_CLOTH);
}
const ONCE_DAY=5;
const ONCE_GIFT='once-vecinos';
function offerNeighborsOnce(){
 if(!game||game.tutorial||game.day!==ONCE_DAY||game.scene!=='counter'||!game.patientResult||
     game.patientIndex!==game.patients.length-2||game.neighborsOnce||game.pendingGift)return false;
 game.neighborsOnce={choice:null};
 game.pendingGift={item:'Sopaipillas caseras',event:ONCE_GIFT};
 ui.modal='gift-reveal';save();render();
 return true;
}
function chooseNeighborsOnce(choice){
 if(ui.modal!=='gift-reveal'||game.pendingGift?.event!==ONCE_GIFT||
     !game.neighborsOnce||game.neighborsOnce.choice||!['home','share'].includes(choice))return;
 game.neighborsOnce.choice=choice;save();render();
}
function closeNeighborsOnce(){
 if(ui.modal!=='gift-reveal'||game.pendingGift?.event!==ONCE_GIFT||!game.neighborsOnce?.choice)return;
 game.pendingGift=null;ui.modal=null;nextPatient();
}
function giftSprite(g){
 const icon={
 [DIRTY_CLOTH]:'tela-sucia',
 [CLEAN_CLOTH]:'tela-limpia',
 'Chocolate artesanal':'chocolate-artesanal',
 'Tabletón Funa':'tableton-funa',
 'Caramelo 1/4 hora':'caramelo-cuarto-hora',
 'Luca':'luca',
 'Bombón de licor':'bombon-licor',
 'Papel en chino':'papel-chino',
 'Carta Tarot':'carta-tarot',
 'Bagoncito':'bagoncito',
 'Tarjeta del club nocturno':'club-nocturno-especial',
 'Tarjeta publicitaria':'tarjeta-publicitaria',
 'Cupón farmacia':'coupon',
 'Sopaipillas caseras':'sopaipillas'
 }[g?.item]||'advert';
 return `<img class="gift-sprite" src="${assetUrl('assets/gifts/'+icon+'.png')}" alt="${escapeText(g?.item||'regalo')}" draggable="false">`;
}
function acceptPendingGift(openInventory=false){
 const g=game.pendingGift;
 if(g?.event===ONCE_GIFT)return;
 if(g){game.gifts.push(g);record(`Obsequio guardado: ${g.item}.`);game.pendingGift=null;save();}
 ui.modal=openInventory?'gifts':null;
 render();
}
function declinePendingGift(){
 if(game.pendingGift?.event===ONCE_GIFT)return;
 if(game.pendingGift){record(`Obsequio no guardado: ${game.pendingGift.item}.`);game.pendingGift=null;save();}
 ui.modal=null;render();
}

function electronicUseRecord(p){
 if(!p||p.rxType!=='ELECTRÓNICA'||!p.folio)return null;
 // El mismo código electrónico debe corresponder también al paciente y medicamento.
 return (game.priorRxUses||[]).find(u=>u.folio===p.folio&&u.drug===p.drug&&u.rut===p.rut&&
  (u.rxType==='ELECTRÓNICA'||p.kind==='double'||p.kind==='electronicRepeat'))||null;
}
function resolveUsedElectronicRecipe(choice){
 const p=game.patients?.[game.patientIndex];
 if(!p||p.done||p.rxType!=='ELECTRÓNICA'||p.qrValidation!=='dispensed'||!['destroy','return'].includes(choice))return;
 const key=`${p.folio}|${p.rut}|${p.drug}`;
 game.returnedElectronicPrescriptions=game.returnedElectronicPrescriptions||[];
 game.destroyedElectronicFolios=game.destroyedElectronicFolios||[];
 let entry=game.returnedElectronicPrescriptions.find(x=>x.key===key);
 if(choice==='destroy'){
  if(entry)entry.destroyed=true;
  if(!game.destroyedElectronicFolios.includes(key))game.destroyedElectronicFolios.push(key);
  record(`Copia de receta electrónica previamente despachada destruida: folio ${p.folio}, ${p.name}.`);
 }else{
  if(!entry){entry={key,patient:{...p},lastReturnedDay:game.day,destroyed:false};game.returnedElectronicPrescriptions.push(entry)}
  else{entry.lastReturnedDay=game.day;entry.patient={...p};}
  record(`Receta electrónica ya despachada devuelta a ${p.name}, folio ${p.folio}. Podría volver desde mañana.`);
 }
 p.qrDisposition=choice;
 p.done=true;
 p.outcomeQuote=electronicAngerDialogue(p,choice);
 game.patientResult={decision:'return',expected:'return',correct:true,p,qrUsedDisposition:choice};
 game.qrChecked=false;
 ui.modal=null;
 save();render();
}
const RETURN_REASONS={
 'id-expired':'Cédula o DNI vencido',
 'id-missing':'El paciente no porta cédula o DNI',
 'id-date':'Fecha de emisión futura o inválida en la cédula o DNI',
 'doctor-rut':'RUT del médico mal escrito',
 'doctor-missing':'Falta un dato obligatorio del prescriptor',
 'patient-rut':'RUT, DNI o datos de identificación no coinciden',
 'foreign-label':'RUT extranjero sin glosa',
 'rx-expired':'Receta vencida',
 'rx-date':'Fecha de emisión futura o inválida en la receta',
 'rx-cheque':'El medicamento exige receta cheque y se presenta receta blanca u otro formato',
 'rx-registry':'El Número de Registro del medicamento no coincide con el del registro',
 'underage':'Paciente menor de 18 años para un medicamento con control de stock',
 'stock':'Stock insuficiente para dispensar'
};
const RETURN_REASON_GROUPS=[
 ['Identificación',['id-expired','id-missing','id-date']],
 ['Datos del paciente',['patient-rut','foreign-label']],
 ['Prescriptor',['doctor-rut','doctor-missing']],
 ['Fecha y tipo de receta',['rx-expired','rx-date','rx-cheque','rx-registry']],
 ['Edad y stock',['underage','stock']]
];
function returnReasonLabel(reason){
 if(reason==='id-discrepancy'||reason==='foreign-dni')return RETURN_REASONS['patient-rut'];
 if(reason==='doctor-unverified')return 'No fue posible verificar al prescriptor';
 return RETURN_REASONS[reason];
}
function prescriptionFieldReturnReasons(p,day=game.day){
 const reasons=[];
 if(usesForeignPrescriptionId(p)){
  if(p.rxForeignLabel!==true)reasons.push('foreign-label');
  if(!p.documentNumber||String(p.rxRut)!==String(p.documentNumber))reasons.push('patient-rut');
 }else if(p.guardianVisit!==true&&p.rut!==p.rxRut)reasons.push('patient-rut');
 const prescriberStatus=lookupPrescriber(p).status;
 if(prescriberStatus==='incomplete')reasons.push('doctor-missing');
 if(prescriberStatus==='typo')reasons.push('doctor-rut');
 const issued=parseCalendarDate(p.rxDate);
 if(!issued||issued>parseCalendarDate(dateOf(day)))reasons.push('rx-date');
 if(p.kind==='expired'||rxIsExpired(p,day))reasons.push('rx-expired');
 if(DRUGS[p.drug]?.kind==='CHEQUE'&&!['CHEQUE','ELECTRÓNICA'].includes(p.rxType))reasons.push('rx-cheque');
 if(registryMismatch(p))reasons.push('rx-registry');
 return reasons;
}
function electronicPrescriptionIntegrityIssue(p,day=game.day){
 if(p.rxType!=='ELECTRÓNICA')return '';
 if(isStolenPrescription(p))return 'El folio pertenece al talonario denunciado como robado.';
 const reasons=prescriptionFieldReturnReasons(p,day).filter(r=>r!=='rx-expired');
 if(reasons.includes('patient-rut'))return usesForeignPrescriptionId(p)?'El número de la receta no coincide con el DNI.':'El RUT de la receta no coincide con el de la cédula.';
 if(reasons.length)return RETURN_REASONS[reasons[0]]+'.';
 const prescriberStatus=lookupPrescriber(p).status;
 if(prescriberStatus==='unknown')return 'El prescriptor no figura en el registro.';
 if(prescriberStatus==='mismatch')return 'El RUT no corresponde al prescriptor indicado.';
 if(!validPrescriptionSignature(p))return 'La firma del prescriptor es discordante.';
 return '';
}
function electronicValidationFailed(p){return p?.rxType==='ELECTRÓNICA'&&['fraud','invalid'].includes(p.qrValidation)}
function flagElectronicPrescriptionFraud(p,issue){
 p.qrValidation='fraud';
 p.qrFraudReason=issue;
 p.issue='Receta electrónica falsa. '+issue;
}
function validReturnReasons(p,docStatus,age,fieldReasons){
 if(!validPrescriptionSignature(p)||prescriberIdentityIsFalse(lookupPrescriber(p).status)||p.kind==='rufus'||p.callRejected||electronicValidationFailed(p)||electronicPrescriptionIntegrityIssue(p)||isStolenPrescription(p)||p.kind==='sicolasMuros'||unauthorizedPrescriberCase(p))return [];
 const reasons=[...fieldReasons];
 if(p.noDocument)reasons.push('id-missing');
 else{
  if(docStatus.status==='expired')reasons.push('id-expired');
  if(docStatus.status==='future'||docStatus.status==='invalid'&&!invalidBirthDate(p))reasons.push('id-date');
  if((sexFieldMismatch(p)||isForgedIdentityCase(p))&&!reasons.includes('patient-rut'))reasons.push('patient-rut');
 }
 if(DRUGS[p.drug]?.stockControl){
  if(age!==null&&age<18)reasons.push('underage');
  if(game.stock[p.drug]<p.qty)reasons.push('stock');
 }
 return reasons;
}
// Cantidad de dígitos distintos entre el RUT de la receta y el de la cédula (1–2: error de escritura; 3 o más: intento de engaño).
function rutDigitDiffs(p){
 if(isPaperEvent(p)||p.noDocument||p.kind==='bribe'||p.guardianVisit||p.kind==='minorGuardian')return 0;
 const clean=v=>String(v??'').replace(/\(EXTRANJERO\)/gi,'').replace(/[^0-9kK]/g,'').toUpperCase();
 const rx=clean(prescriptionPatientId(p)),real=clean(usesForeignPrescriptionId(p)?p.documentNumber:p.rut);
 if(!rx||!real)return 0;
 let d=Math.abs(rx.length-real.length);for(let i=0;i<Math.min(rx.length,real.length);i++)if(rx[i]!==real[i])d++;
 return p.kind==='different'&&d>0?Math.max(d,3):d;
}
function rutMismatchIsFraud(p){return rutDigitDiffs(p)>=3}
function isReportablePrescription(p){
 return !isPaperEvent(p)&&p.rxType!=='NINGUNA'&&p.kind!=='bribe'&&!unauthorizedPrescriberCase(p)&&(p.callRejected===true||electronicValidationFailed(p)||isStolenPrescription(p)||!validPrescriptionSignature(p)||prescriberIdentityIsFalse(lookupPrescriber(p).status)||['wrongtype','wrongtypeRepeat'].includes(p.kind)||rutMismatchIsFraud(p));
}
function finalizePatient(decision,reportCategory=null,returnReason=null){const p=game.patients[game.patientIndex];if(!p||p.done||p.kind==='donVictor')return;
 if(!practiceDecisionAllowed(decision,reportCategory,returnReason))return;
 const dates=fictionalIdDates(p);
 const documentedAge=ageFromBirth(dates.birth);
 const registeredAge=ageFromBirth(p.registeredBirthDate);
 const age=documentedAge===null||registeredAge===null?null:Math.min(documentedAge,registeredAge);
 if(p.rxType==='ELECTRÓNICA'&&p.qrValidation==='dispensed'&&decision!=='dispense'){
  ui.modal='qr-used';save();render();return;
 }
 if(decision==='dispense'&&(isPaperEvent(p)||!DRUGS[p.drug]))return;
 const foreignIdIssue=foreignPrescriptionIssue(p);
 const electronicIssue=electronicPrescriptionIntegrityIssue(p);
 const sisStatus=isPaperEvent(p)||p.kind==='bribe'?'incomplete':lookupPrescriber(p).status;
 const falsePrescriber=prescriberIdentityIsFalse(sisStatus);
 const stolenFolio=isStolenPrescription(p);
 const docStatus=!isPaperEvent(p)&&p.kind!=='bribe'?idDocumentCheck(p):{status:'valid'};
 const mismatchedSex=sexFieldMismatch(p);
 const fieldReasons=isPaperEvent(p)||p.kind==='bribe'?[]:prescriptionFieldReturnReasons(p);
 const stockControlled=Boolean(DRUGS[p.drug]?.stockControl);
 const noStock=(stockControlled||DRUGS[p.drug]?.exclusive)&&game.stock[p.drug]<(p.qty||1);
 const ageIssue=stockControlled&&(age===null||age<18);
 const electronic=p.rxType==='ELECTRÓNICA';
 const alreadyUsed=Boolean(electronicUseRecord(p));
 const outstandingChecks=[];
 if(decision==='dispense'){
  if(noStock)outstandingChecks.push('stock');
  if(ageIssue)outstandingChecks.push(age===null?'id-age-unverified':'underage');
  if(alreadyUsed||p.qrValidation==='dispensed')outstandingChecks.push('rx-duplicate');
  else if(electronic&&(!game.qrChecked||p.qrValidation!=='valid')&&!electronicIssue&&!['invalid','expired'].includes(p.qrValidation))outstandingChecks.push('qr-unchecked');
 }
 let expected=['correct','carvedilol','controlled','missingid','electronic','check','retainedCommon','specialCarlos','chemy','minorGuardian','idLastDay','lookHair','lookClothes','lookAge','correctedCheque','correctedPrescription'].includes(p.kind)?'dispense':stolenFolio?'seremi':isForgedIdentityCase(p)?'police':['wrongtype','wrongtypeRepeat','sicolasMuros'].includes(p.kind)?'seremi':['chinese','giftPaper','underage','fakeDoctor','different','expired','wrongtype','double','typo','idExpired','idFuture','idSexMismatch','tuguelExpired'].includes(p.kind)?'return':'return';
 let correct=(isPaperEvent(p)&&(decision==='keep-paper'||decision==='return')) || decision===expected || (isForgedIdentityCase(p)&&decision==='police') || (p.kind==='fakeid'&&decision==='return') || (['wrongtype','wrongtypeRepeat'].includes(p.kind)&&decision==='return') || (decision==='return' && DRUGS[p.drug]?.stockControl && game.stock[p.drug]<(p.qty||1));
 if(p.noDocument){correct=decision==='return';expected='return';}
 if(p.qrValidation==='invalid'||foreignIdIssue){correct=decision==='return';expected='return';}
 if(!isPaperEvent(p)&&p.kind!=='bribe'&&(fieldReasons.includes('rx-expired')||fieldReasons.includes('rx-registry'))&&!reportCategory){correct=decision==='return';expected='return';}
 if(reportCategory)correct=(reportCategory==='police-bribe'&&p.kind==='bribe')||(reportCategory==='police-id'&&isForgedIdentityCase(p))||(reportCategory==='seremi-rx'&&isReportablePrescription(p));
 if((docStatus.status!=='valid'||mismatchedSex) && decision==='dispense')correct=false;
 if((docStatus.status!=='valid'||mismatchedSex) && decision==='return')correct=true;
 if(decision==='return'&&returnReason){
  const reasons=validReturnReasons(p,docStatus,age,fieldReasons);
  if(reasons.length)expected='return';
  correct=reasons.includes(returnReason);
 }
 if(falsePrescriber||!validPrescriptionSignature(p)||p.callRejected||electronicValidationFailed(p)||electronicIssue){
  expected='seremi';
  correct=decision==='seremi'&&reportCategory==='seremi-rx';
 }
 if(p.kind==='rufus'){
  expected='police';
  correct=decision==='police'&&reportCategory==='police-id';
 }
 if(decision==='retain'&&reportCategory==='retain-unreported'){
  correct=isReportablePrescription(p);
  if(correct)expected='retain';
 }
 if(unauthorizedPrescriberCase(p)){
  expected='police';
  correct=decision==='police'&&reportCategory==='police-illegal-practice';
 }
 if(stolenFolio){
  expected='seremi';
  correct=decision==='seremi'&&reportCategory==='seremi-rx';
 }
 // Devolver por datos de identidad discordantes no depende de que el médico conteste.
 const qrUnchecked=outstandingChecks.includes('qr-unchecked');
 if(decision==='dispense'&&(noStock||ageIssue||alreadyUsed||p.qrValidation==='dispensed'||qrUnchecked))correct=false;
 if(p.kind==='tuguelExpired'&&game.day===1){
   if(decision==='return'&&correct){
     game.specialEvents.tuguelReturnPending=true;
     game.specialEvents.tuguelPatient={name:p.name,firstNames:p.firstNames,surnames:p.surnames,rut:p.rut,rxRut:p.rxRut,birthDate:p.birthDate,documentNumber:p.documentNumber,drug:p.drug,rxType:p.rxType,rxDate:p.rxDate,folio:p.folio,prescriber:p.prescriber,prescriberRut:p.prescriberRut,prescriberRegistered:p.prescriberRegistered,signature:p.signature,qty:p.qty,portraitSeed:p.portraitSeed,idPortraitSeed:p.idPortraitSeed,face:p.face,nationalityCode:'CL',portraitModel:p.portraitModel,idPortraitModel:p.idPortraitModel};
   }else game.specialEvents.tuguelReturnPending=false;
 }
 p.done=true;game.patientResult={decision,expected,correct,p};
 if(!game.tutorial&&!isPaperEvent(p)&&p.kind!=='bribe')p.outcomeQuote=outcomeDialogue(p,decision,reportCategory,returnReason,correct);
 if(decision==='dispense'){
  ui.modal=null;
  if(noStock){
   game.patientResult.noStock=true;
   record(`Intento de despacho sin existencias · ${drugName(p.drug)} · folio ${p.folio}.`);
  }
 }
 if(decision==='return'&&p.kind==='underage')queueMinorGuardian(p);
 if(returnReason){
  game.patientResult.returnReason=returnReason;
  if(correct)queueCorrectedPrescription(p,returnReason,fieldReasons);
  record(`Devolución · ${RETURN_REASONS[returnReason]} · ${correct?'motivo válido':'motivo incorrecto'}.`);
 }
 if(decision==='dispense'&&!noStock){
  if(p.storyEvent==='day-seven-false-prescription'){
   game.daySevenConsequence={due:8,dispensedDay:game.day,patient:p.name,folio:p.folio,drug:p.drug,qty:p.qty,creditsShown:false};
  }
  if(DRUGS[p.drug].book){game.stock[p.drug]-=p.qty;game.folios[p.drug]++;game.dispatches.push({day:game.day,drug:p.drug,qty:p.qty,folio:game.folios[p.drug],rxFolio:p.folio,patient:p.name,posted:false});if(p.rxType!=='ELECTRÓNICA')game.retainedArchive.push({day:game.day,drug:p.drug,folio:p.folio,patient:p.name,rxType:p.rxType==='SIMPLE'?'RETENIDA':p.rxType,physical:true});record(`Dispensación controlada: ${drugName(p.drug)}, folio interno ${game.folios[p.drug]}.`);}
  else{if(DRUGS[p.drug].exclusive)game.stock[p.drug]=Math.max(0,game.stock[p.drug]-(p.qty||1));game.simpleDispenses.push({day:game.day,drug:p.drug,qty:p.qty,rxFolio:p.folio,patient:p.name});record(`Dispensación sin libro especial: ${drugName(p.drug)}.`);
   if(DRUGS[p.drug].kind==='RETENIDA_COMUN'&&p.rxType!=='ELECTRÓNICA')game.retainedArchive.push({day:game.day,drug:p.drug,folio:p.folio,patient:p.name,rxType:'RETENIDA',physical:true});}
  game.priorRxUses=game.priorRxUses||[];
  if(p.folio&&p.rxType==='ELECTRÓNICA'&&!game.priorRxUses.some(u=>u.folio===p.folio&&u.drug===p.drug&&u.rut===p.rut)){
   game.priorRxUses.push({day:game.day,issuedOn:game.day,folio:p.folio,drug:p.drug,patient:p.name,rut:p.rut,qty:p.qty,rxType:'ELECTRÓNICA',ref:'DESP-'+String(game.day).padStart(2,'0')+'-'+p.folio});
  }
  if(!p.gaveId&&!game.idRequested&&p.idUndercover){game.idWarnings++;game.patientResult.idNotice=true;addNotice('undercover-id-'+p.folio,'ADVERTENCIA · CÉDULA NO SOLICITADA',`El cliente ${p.name} era un fiscalizador encubierto. Quedó una advertencia sin multa ni infracción.`, 'seremi');record('Fiscalizador encubierto: advertencia por no solicitar cédula. Sin multa ni falta acumulada.');}
  if(sisStatus==='unknown'){addProfessionalError({day:game.day,type:'fakeDoctor',level:'leve',desc:`Dispensación con prescriptor inexistente en Registro SIS: ${p.prescriber}. Receta ${p.folio}.`,reported:false});record('Se aceptó una receta cuyo prescriptor no está registrado en la base ficticia SIS.');}
 }
 if(correct&&(decision==='retain'||reportCategory==='seremi-rx')){
  game.retainedArchive.push({day:game.day,drug:p.drug,folio:p.folio,patient:p.name,rxType:p.rxType,
   physical:p.rxType!=='ELECTRÓNICA',evidence:true,notified:reportCategory==='seremi-rx'});
  if(decision==='retain'){
   game.patientResult.retainedWithoutNotice=true;
   record(`Receta sospechosa retenida sin notificar · ${p.name} · folio ${p.folio}.`);
  }
 }
 if(reportCategory==='seremi-rx'&&stolenFolio&&correct){
   const key=`folio-robado-${game.day}-${p.folio}-${p.rut}`;
   const report={day:game.day,patient:p.name,folio:p.folio,reason:'Receta falsificada con folio denunciado como robado',agency:'SEREMI',confirmed:true};
   if(!game.authorityReports.some(x=>x.folio===p.folio&&x.patient===p.name&&x.reason===report.reason))game.authorityReports.push(report);
   const derivation={...report,agency:'POLICÍA',reason:'Derivación SEREMI · folio denunciado como robado'};
   if(!game.policeReports.some(x=>x.folio===p.folio&&x.patient===p.name&&x.reason===derivation.reason)){
      game.policeReports.push(derivation);game.authorityReports.push(derivation);
   }
   game.patientResult.detained=true;
   game.patientResult.notificationReason='Folio robado: aviso automático a SEREMI y derivación policial';
   addNotice(key,'SEREMI · RECETA RETENIDA',`Se retuvo la receta de ${p.name}, folio ${p.folio}, denunciado como robado. Denuncia sanitaria registrada y derivación policial.`,'seremi');
   record(`Retención folio robado ${p.folio}: aviso automático a SEREMI y derivación a policía.`);
   ui.notifyOutcome={kind:'seremi-rx',success:true,agency:'SEREMI',imprisoned:true,
     title:'FOLIO ROBADO · PERSONA DETENIDA',
     description:`SEREMI recibió la denuncia del folio ${p.folio}. Carabineros llega al local y detiene a ${escapeText(p.name)}, que repite sin parar: «Yo no sabía que estaba robado, se lo juro». La jornada continúa.`};
 }
 if(decision==='keep-paper')record('Papel sin valor médico guardado en recuerdos. No se retuvo una receta sanitaria.');
 if(decision==='police'||(decision==='seremi'&&!stolenFolio)){
   const agency=decision==='police'?'POLICÍA':'SEREMI';
   const reason=reportCategory==='police-illegal-practice'?ILLEGAL_PRACTICE_REASON:reportCategory==='seremi-rx'&&electronicValidationFailed(p)?'Receta electrónica falsa confirmada por el verificador':reportCategory==='seremi-rx'&&p.callRejected?'Receta falsa confirmada por llamada':reportCategory==='seremi-rx'&&falsePrescriber?'Receta falsa por datos del prescriptor incongruentes con el registro SIS':reportCategory==='seremi-rx'&&!validPrescriptionSignature(p)?'Receta falsa por firma discordante con el registro SIS':reportCategory==='police-id'?'Cédula aparentemente falsificada':reportCategory==='police-bribe'?'Intento de soborno':'Receta presuntamente falsificada';
   const report={day:game.day,patient:p.name,folio:p.folio||'',reason,agency,confirmed:correct,
     ...(reportCategory==='police-illegal-practice'?{prescriber:prescriberNameOnPrescription(p)}:{})};
   game.authorityReports.push(report);
   if(reportCategory==='seremi-rx'&&electronicValidationFailed(p))p.qrReported=true;
   if(decision==='police')game.policeReports.push(report);
   addNotice(`autoridad-${game.day}-${game.patientIndex}-${decision}`,`AVISO A ${agency}`,`${reason} · ${correct?'Caso sustentado en los antecedentes del juego.':'Denuncia sin antecedentes suficientes; queda como observación.'}`,'seguridad');
   record(`Notificación a ${agency} registrada: ${reason.toLowerCase()}; ${correct?'caso procedente':'sin prueba suficiente'}.`);
   game.patientResult.notificationReason=correct?reason:null;
 }
 if(!correct && !(sisStatus==='unknown'&&decision==='dispense')){
   const detail=foreignIdIssue||p.qrFraudReason||electronicIssue||
   (qrUnchecked?'Se entregó una receta electrónica sin validar su código QR.':p.issue);
  addProfessionalError({day:game.day,level:decision==='dispense'?'grave':'leve',desc:`Atención irregular: ${p.name} (${detail})`,reported:false,kind:p.kind,reviewReasons:patientReviewReasons(p,expected,reportCategory,returnReason,docStatus,fieldReasons,outstandingChecks),rxFolio:p.folio,drug:p.drug,patient:p.name,rut:p.rut});record(`Incidencia profesional en atención de ${p.name}.`)}
 if(!correct && decision!=='dispense')changeMood('qf',-8,'Decisión incorrecta durante la atención');
 if(correct&&!isPaperEvent(p)){game.successfulAttentions=(Number(game.successfulAttentions)||0)+1;}
 if(isPaperEvent(p) && decision==='keep-paper'){
   const item=p.kind==='abuelo'?'Bagoncito':p.kind==='tarotera'?'Carta Tarot':p.kind==='chinese'?'Papel en chino':p.kind==='clubNocturno'?'Tarjeta del club nocturno':'Tarjeta publicitaria';
   game.pendingGift={day:game.day,item,effect:item==='Bagoncito'?'sweet':'sin uso',used:false};
   game.patientResult.gift=item;
 } else if(!isPaperEvent(p) && !['invalid','dispensed','fraud'].includes(p.qrValidation) && Math.random()<Math.max(0.04,Math.min(0.10,0.04+Math.floor((game.successfulAttentions||0)/10)*0.01-Math.min(6,game.infractions||0)*0.01))){
   const pool=[
    {item:'Chocolate artesanal',effect:'sweet'},
    {item:'Tabletón Funa',effect:'sweet'},
    {item:'Caramelo 1/4 hora',effect:'sweet'},
    {item:'Bombón de licor',effect:'sweet'},
    {item:'Luca',effect:'cash'},
    {item:'Cupón farmacia',effect:'coupon',pct:15},
    {item:'Cupón farmacia',effect:'coupon',pct:20},
    {item:'Tarjeta publicitaria',effect:'sin uso'}
   ];
   const gift={...pool[Math.floor(Math.random()*pool.length)],day:game.day,used:false};
   game.pendingGift=gift;
   game.patientResult.gift=gift.item+(gift.pct?` (${gift.pct}%)`:'');
 }
 if(game.tutorial){game.pendingGift=null;delete game.patientResult.gift;ui.modal=null;}
 if(game.pendingGift)ui.modal='gift-reveal';
 save();render();
}
function postMovements(day,kind,rectification=false){let lines=(kind==='dispatch'?game.dispatches:game.receipts).filter(x=>x.day===day&&!x.posted&&DRUGS[x.drug]?.book);
 if(!lines.length)return 0;
 let groups={};for(let line of lines){let key=line.drug;if(!groups[key])groups[key]=[];groups[key].push(line)}
 let rows=0;for(const [drug,entries] of Object.entries(groups)){
  let total=entries.reduce((a,x)=>a+x.qty,0);let first=kind==='dispatch'?entries[0].folio:null;let last=kind==='dispatch'?entries[entries.length-1].folio:null;
  game.bookStock[drug]+=(kind==='dispatch'?-1:1)*total;
  game.ledger.push({day:game.day,originalDay:day,drug,kind,rectification,folio:first===null?'—':first===last?String(first):`${first}–${last}`,recipes:kind==='dispatch'?entries.length:0,egress:kind==='dispatch'?total:0,ingress:kind==='receipt'?total:0,balance:game.bookStock[drug],ref:entries.map(x=>x.ref||x.rxFolio).join(', ')});
  for(const x of entries)x.posted=true;rows++;
 }
 record(`${rectification?'Rectificación':'Transcripción'} de ${kind==='dispatch'?'despachos':'ingresos'}: ${rows} presentación(es).`);save();return rows;
}
function postHistoricalBacklog(){
 const dated=new Set([...game.dispatches,...game.receipts].filter(x=>!x.posted&&x.day<game.day&&DRUGS[x.drug]?.book).map(x=>x.day));
 let groups=0;for(const day of [...dated].sort((a,b)=>a-b)){groups+=postMovements(day,'receipt',true);groups+=postMovements(day,'dispatch',true)}
 if(groups)record(`Transcritos ${groups} asientos atrasados mediante rectificación trazable.`);
 save();return groups;
}
// Fiscalización por día: día 2 garantizado; día 4 al 50%;
// desde el 5, 10% base + 5 puntos por cada error profesional acumulado.
// Los errores confirmados siguen contando para la probabilidad, pero no se
// vuelven a sancionar como expediente duplicado: cada error posee 'reported'.
function inspectionProbability(day=game.day){
 if(day===2)return 1;
 if(day===4)return 0.5;
 if(day<5)return 0;
 const accumulated=(game.errors||[]).length;
 return Math.min(1,0.10+Math.max(0,accumulated)*0.05);
}
function eligibleInspection(){return Math.random()<inspectionProbability(game.day)}
const REVIEW_RISKS={
 'id-expired':'Una identificación vencida debilita la verificación de quién retira el medicamento y dificulta atribuir el despacho a la persona correcta.',
 'id-missing':'Sin cédula o DNI, no puedes cotejar la identidad de quien retira el medicamento. El despacho podría quedar asociado a otra persona.',
 'id-date':'Una fecha de emisión futura o inválida impide establecer la vigencia del documento al momento de la atención y exige aclarar su origen.',
 'doctor-rut':'Un RUT de prescriptor errado puede atribuir la receta a otro profesional e impedir confirmar quién indicó el medicamento.',
 'doctor-missing':'Sin los datos del prescriptor, es difícil confirmar la autoría de la receta y aclarar dudas sobre el tratamiento.',
 'patient-rut':'Despachar con un RUT o DNI errado puede entregar el medicamento a la persona equivocada, dejar al paciente sin su tratamiento y dificultar el seguimiento del despacho.',
 'foreign-label':'Si falta la glosa (EXTRANJERO), el DNI puede interpretarse como un RUT chileno y el despacho puede quedar asociado a un registro equivocado.',
 'rx-registry':'Un Número de Registro errado impide asegurar qué producto exacto se está entregando. El paciente debe volver con la receta corregida por el médico.',
 'rx-expired':'Una receta vencida puede corresponder a un tratamiento que ya cambió. Dispensarla puede reactivar una indicación desactualizada.',
 'rx-date':'Una fecha de emisión inválida o futura impide establecer cuándo se indicó el tratamiento y comprobar que la receta está vigente.',
 'rx-cheque':'El formato de receta cheque permite seguir el folio y su despacho. Aceptar otro formato pierde ese control y deja la entrega sin el respaldo exigido en el juego.',
 underage:'En este caso se requería verificar la edad antes de entregar un medicamento controlado. Omitir el control puede exponer a un menor a un uso que requiere supervisión.',
 stock:'Registrar una entrega sin existencias descuadra el inventario y deja al paciente con un despacho anotado sin haber recibido el medicamento.',
 'id-fraud':'Aceptar un carnet falsificado permite que otra persona retire medicamentos bajo una identidad falsa y rompe la trazabilidad del despacho.',
 'birth-fraud':'Una fecha de nacimiento adulterada puede ocultar la edad real y permitir que se eludan los controles de identidad y edad.',
 'id-record':'Si los datos registrales del carnet y la ficha difieren, verifica a quién pertenece el documento antes de asociar el despacho a esa identidad.',
 'doctor-unregistered':'Un prescriptor inexistente impide confirmar la autoría de la receta. El paciente podría recibir un medicamento que ningún profesional indicó.',
 'doctor-mismatch':'Si el nombre y el RUT identifican a personas distintas, el tratamiento puede quedar atribuido a un profesional que nunca firmó esa receta.',
 'signature-mismatch':'Una firma ajena a la muestra del SIS puede atribuir a un profesional un tratamiento que nunca autorizó.',
 'doctor-unauthorized':'El título del emisor coincide con el registro, pero en este caso no le permite indicar el tratamiento. Dispensarlo deja al paciente con una indicación sin respaldo médico.',
 'doctor-title':'Un título profesional falso impide confirmar que quien firmó podía indicar el tratamiento. El paciente queda expuesto a una prescripción sin respaldo profesional.',
 'stolen-folio':'Un folio denunciado como robado puede circular con firmas o tratamientos inventados. Aceptarlo permite que se use el talonario para obtener medicamentos.',
 'qr-unchecked':'Sin verificar el código electrónico, se puede entregar un medicamento con una receta inválida, alterada o que ya fue utilizada.',
 'id-age-unverified':'Si la edad no se puede comprobar, el medicamento controlado podría llegar a una persona que requiere supervisión.',
 'qr-invalid':'Si el código no se puede verificar, no es posible cotejar la receta con su registro digital ni confirmar que siga disponible para despacho.',
 'rx-call':'Si el prescriptor o su equipo desconoce la receta, despacharla puede entregar un medicamento que nunca fue indicado por ese profesional.',
 'rx-fraud':'Una receta electrónica incongruente puede contener datos alterados. Comprueba qué dato rechazó el verificador antes de decidir cómo proceder.',
 'rx-duplicate':'Volver a despachar el mismo folio puede duplicar la cantidad indicada y aumentar el riesgo de sobredosis o desvío.',
 'paper':'Una tarjeta o un papel sin indicación médica carece de los datos necesarios para sustentar una entrega de medicamentos.',
 bribe:'Aceptar dinero para saltarse un control permite que un medicamento salga sin receta o fuera del inventario y facilita su desvío.',
 'unwarranted-report':'Una notificación sin respaldo puede atribuir una irregularidad al paciente o al prescriptor e iniciar una revisión injustificada.',
 'wrong-return':'Devolver por un motivo que no corresponde dificulta que el paciente sepa qué corregir y puede obligarlo a volver sin resolver el problema.',
 'valid-care':'Interrumpir una atención en regla puede retrasar el inicio del tratamiento o dejar al paciente sin una dosis que necesita.',
 'wrong-decision':'Una decisión que no responde a la irregularidad observada deja el problema sin resolver y dificulta prevenir que se repita.',
 'unofficial-sale':'Una venta fuera del inventario elimina el registro de a quién se entregó el medicamento y facilita su uso sin control o su desvío.',
 'receipt-missing':'Ingresar cajas que no llegaron crea existencias ficticias. La farmacia puede prometer un despacho que luego no podrá completar.',
 'receipt-wrong':'Ingresar una presentación distinta a la recibida puede hacer que se entregue por error otro medicamento o una concentración diferente.',
 'receipt-damaged':'Ingresar una caja dañada como disponible puede poner en circulación un medicamento cuyo envase ya no garantiza su protección.',
 'receipt-inconsistent':'Aceptar un pedido que no coincide con la guía deja un inventario poco fiable y hace más difícil rastrear lo que realmente llegó.',
 'receipt-unsubstantiated':'Reportar una diferencia que no se comprobó puede iniciar una corrección innecesaria y demorar el ingreso de medicamentos aptos.',
 'receipt-category':'Clasificar mal una incidencia puede llevar a pedir un reemplazo equivocado o a dejar disponible un producto que debía separarse.',
 'receipt-count':'Un recuento errado distorsiona las existencias y puede hacer que se acepte un despacho que la farmacia no tiene cómo completar.',
 'stock-gap':'Una diferencia entre el stock físico y el digital puede ocultar una pérdida o un movimiento sin registrar. La farmacia puede comprometer unidades que no tiene.',
 'book-dispatch':'Si la salida no figura en el libro, cuesta vincular el medicamento entregado con su receta y explicar por qué disminuyó el stock.',
 'book-receipt':'Si el ingreso no figura en el libro, queda incompleta la trazabilidad del origen del medicamento y de las unidades recibidas.',
 'general-review':'Un registro incompleto dificulta reconstruir qué ocurrió y detectar a tiempo errores de identificación, dispensación o inventario.'
};
const REVIEW_PATIENT_KINDS={
 typo:'patient-rut',different:'patient-rut',prescriberTypo:'doctor-rut',expired:'rx-expired',
 wrongtype:'rx-cheque',wrongtypeRepeat:'rx-cheque',stolen:'stolen-folio',double:'rx-duplicate',
 electronicRepeat:'rx-duplicate',signatureFraud:'signature-mismatch',sicolasMuros:'doctor-unregistered',fakeDoctor:'doctor-unregistered',
 prescriberMismatch:'doctor-mismatch',fakeid:'id-fraud',tuguelFake:'id-fraud',rufus:'id-fraud',idBirthDateFraud:'birth-fraud',
 idExpired:'id-expired',tuguelExpired:'id-expired',idFuture:'id-date',idSexMismatch:'id-record',
 podiatristRx:'doctor-unauthorized',tmFraud:'doctor-title',underage:'underage',chinese:'paper',giftPaper:'paper',tarotera:'paper',abuelo:'paper',clubNocturno:'paper',bribe:'bribe'
};
function patientReviewReasons(p,expected,reportCategory,returnReason,docStatus,fieldReasons,outstandingChecks=[]){
 const reasons=[...outstandingChecks,...fieldReasons];
 if(p.noDocument)reasons.unshift('id-missing');
 else if(docStatus.status==='expired')reasons.push('id-expired');
 else if(docStatus.status==='future'||(docStatus.status==='invalid'&&!invalidBirthDate(p)))reasons.push('id-date');
 if(sexFieldMismatch(p))reasons.push('id-record');
 if(p.callRejected)reasons.unshift('rx-call');
 if(electronicValidationFailed(p)&&!fieldReasons.length)reasons.unshift('rx-fraud');
 if(p.qrValidation==='invalid')reasons.unshift('qr-invalid');
 if(!isPaperEvent(p)&&p.kind!=='bribe'){
  const prescriberStatus=lookupPrescriber(p).status;
  if(prescriberStatus==='unknown')reasons.push('doctor-unregistered');
  if(prescriberStatus==='mismatch')reasons.push('doctor-mismatch');
 }
 if(isStolenPrescription(p))reasons.unshift('stolen-folio');
 if(!validPrescriptionSignature(p))reasons.push('signature-mismatch');
 const kindReason=declaresTechnologistTitle(p)?'doctor-unauthorized':p.variantImpostor===true?'id-fraud':REVIEW_PATIENT_KINDS[p.kind];
 if(kindReason&&!reasons.includes(kindReason))reasons.push(kindReason);
 if(returnReason)reasons.unshift('wrong-return');
 if(reportCategory&&expected==='dispense')reasons.unshift('unwarranted-report');
 if(!reasons.length)reasons.push(expected==='dispense'?'valid-care':'wrong-decision');
 return [...new Set(reasons)];
}
function inspectionReviewReasons(issue,error){
 if(issue.type==='clean')return [];
 if(issue.type==='book')return [issue.kind==='dispatch'?'book-dispatch':'book-receipt'];
 if(issue.type==='gap')return ['stock-gap'];
 if(issue.type==='fakeDoctor')return ['doctor-unregistered'];
 if(error?.reviewReasons?.length)return error.reviewReasons;
 // Los expedientes ya guardados pueden conservar solo el motivo en texto.
 const legacy=issue.text||'';
 if(legacy.startsWith('Dispensación clandestina'))return ['unofficial-sale'];
 if(legacy.startsWith('Recepción inconsistente'))return ['receipt-inconsistent'];
 if(legacy.startsWith('Se notificó una diferencia no sustentada'))return ['receipt-unsubstantiated'];
 if(legacy.startsWith('Incidencia de guía'))return ['receipt-category'];
 if(legacy.startsWith('Recuento incorrecto'))return ['receipt-count'];
 if(legacy.includes('no porta documento')||legacy.includes('No entregó cédula'))return ['id-missing'];
 if(legacy.includes('(EXTRANJERO)'))return ['foreign-label'];
 if(legacy.includes('no coincide con el DNI')||legacy.includes('RUT de la receta no coincide'))return ['patient-rut'];
 if(legacy.includes('Código electrónico no validable'))return ['qr-invalid'];
 if(legacy.includes('Receta electrónica falsa'))return ['rx-fraud'];
 return [REVIEW_PATIENT_KINDS[error?.kind]||(error?.kind?'valid-care':'general-review')];
}

function assignLegacyErrorIds(state){
 // Las faltas se agregan al final del historial. Cada posición conserva su identidad.
 state.errors.forEach((error,index)=>{if(!error.id)error.id='falta-'+(index+1);});
}
function addProfessionalError(error){
 game.errors.push({...error,id:'falta-'+(game.errors.length+1)});
}
function getInspectionIssue(state=game){
 assignLegacyErrorIds(state);
 // La fiscalización da prioridad a casos graves pendientes: un despacho erróneo
 // no queda oculto por un asiento de libro atrasado de menor gravedad.
 const fake=state.errors.find(x=>!x.reported&&x.type==='fakeDoctor'&&x.day<state.day);
 const serious=state.errors.find(x=>!x.reported&&x.level==='grave'&&x.day<state.day && x.type!=='fakeDoctor');
 if(serious)return {type:'error',level:'grave',proof:false,text:serious.desc,errorId:serious.id,error:serious,rxFolio:serious.rxFolio,drug:serious.drug,patient:serious.patient};
 if(fake)return {type:'fakeDoctor',level:'leve',proof:false,text:fake.desc,errorId:fake.id,error:fake};
 const gap=Object.keys(state.inventoryGap||{}).find(x=>state.inventoryGap[x]!==0);
 if(gap)return {type:'gap',drug:gap,level:'moderada',proof:false,text:`Diferencia entre existencia física y digital de ${drugName(gap)}.`};
 const oldD=(state.dispatches||[]).find(x=>x.day<state.day&&!x.posted&&DRUGS[x.drug]?.book&&!state.reviewedMoves?.['dispatch-'+x.day+'-'+x.drug]);
 const oldR=(state.receipts||[]).find(x=>x.day<state.day&&!x.posted&&DRUGS[x.drug]?.book&&!state.reviewedMoves?.['receipt-'+x.day+'-'+x.drug]);
 if(oldD)return {type:'book',kind:'dispatch',day:oldD.day,drug:oldD.drug,level:'leve',proof:true,text:`Egreso de ${drugName(oldD.drug)} sin transcribir al libro. Existe receta archivada.`};
 if(oldR)return {type:'book',kind:'receipt',day:oldR.day,drug:oldR.drug,level:'leve',proof:true,text:`Ingreso de ${drugName(oldR.drug)} sin transcribir al libro. Existe guía respaldatoria.`};
 const err=state.errors.find(x=>!x.reported&&x.day<state.day);
 if(err)return {type:'error',level:err.level,proof:false,text:err.desc,errorId:err.id,error:err,rxFolio:err.rxFolio,drug:err.drug,patient:err.patient};
 return {type:'clean',level:'none',proof:false,text:'Registros y documentos revisados: sin diferencias identificadas.'};
}
const MAX_INSPECTION_FINE=24000;
function calculateFine(level){
 if(level==='none')return 0;
 game.infractions++;
 if(game.infractions===1)return 0;
 const base={leve:4000,moderada:10000,grave:20000}[level]||4000;
 const multiplier=Math.min(2,1+(game.infractions-2)*.25);
 return Math.min(MAX_INSPECTION_FINE,Math.round(base*multiplier));
}
function inspectDecision(action){
 let issue=game.inspectionIssue;
 if(!issue||game.scene!=='inspector')return;
 if(game.inspectionResolutionLocked)return;
 if(game.inspectionDone || (game.inspections||[]).some(x=>x.day===game.day)){
  if(!game.inspectionDone){game.inspectionDone=true;game.inspectionResolutionLocked=true;game.inspectionOutcome=game.inspectionOutcome||{fine:game.inspections.find(x=>x.day===game.day)?.fine||0,action:'acknowledge',issue:issue.text,number:game.infractions};save();}
  goScene('close');return;
 }
 if(action==='rectify'&&!issue.proof){toast('Esta observación no admite rectificación sin respaldo documental.');return;}

 const isError=issue.type==='error'||issue.type==='fakeDoctor';
 const error=isError?game.errors.find(entry=>entry.id===issue.errorId):null;
 if(isError&&(!error||error.reported)){
  game.inspectionIssue=getInspectionIssue();
  ui.modal=null;save();render();return;
 }

 game.inspectionResolutionLocked=true;
 if(issue.type==='book'){game.reviewedMoves=game.reviewedMoves||{};game.reviewedMoves[issue.kind+'-'+issue.day+'-'+issue.drug]=true}
 if(action==='rectify'&&issue.proof){postMovements(issue.day,issue.kind,true)}
 if(issue.type==='gap' && issue.drug && game.inventoryGap[issue.drug]){const gap=game.inventoryGap[issue.drug];const drug=issue.drug;game.stock[drug]=Math.max(0,game.stock[drug]-gap);game.bookStock[drug]=Math.max(0,game.bookStock[drug]-gap);game.ledger.push({day:game.day,originalDay:game.day,drug,kind:'adjustment',rectification:true,folio:'—',recipes:0,egress:0,ingress:0,balance:game.bookStock[drug],ref:'Inventario físico / observación SEREMI: ajuste documentado '+gap});game.inventoryGap[drug]=0;try{record(`Ajuste documentado de ${drugName(drug)} tras recuento físico. Diferencia: ${gap}.`)}catch(_){}}
 let fine=0;
 if(issue.type==='fakeDoctor'){game.fakeDoctorFindings++;fine=game.fakeDoctorFindings===1?0:Math.round(4000*Math.min(2,1+(game.fakeDoctorFindings-2)*0.25));if(game.fakeDoctorFindings>=2)game.infractions++;}
 else fine=calculateFine(issue.level);
 game.finesToday+=fine;
 game.inspections=game.inspections||[];
 if(!(game.inspections||[]).some(x=>x.day===game.day))game.inspections.push({day:game.day,issue:issue.text,action,fine,index:game.infractions,errorId:issue.errorId,
   ...(action==='acknowledge'&&issue.type!=='clean'?{responsibilityAccepted:true}:{})});
 if(error){
  error.reported=true;
  if(!error.moraleHandled&&(error.level==='grave'||issue.type==='fakeDoctor')){
   changeMood('qf',-10,'La SEREMI detectó una dispensación irregular');
   error.moraleHandled=true;
  }
 }
 game.inspectionDone=true;
 game.inspectionOutcome={fine,action,issue:issue.text,number:game.infractions};
 save();
 try{addNotice('inspeccion-'+game.day,'RESULTADO FISCALIZACIÓN',`${issue.text} · ${fine?'Multa ficticia '+pesos(fine):'Observación sin multa'}.`,'seremi');}catch(_){}
 try{record(`Fiscalización: ${issue.text} ${fine?`Multa ${pesos(fine)}.`:'Sin multa.'}`);}catch(_){}
 toast(action==='rectify'?'Rectificación registrada. Pasando al cierre.':issue.type==='clean'?'Fiscalización cerrada. Pasando al cierre.':'Observación registrada. Pasando al cierre.');
 goScene('close');
}
// Historias cotidianas originales. Guardamos el relato del día para que no cambie al abrir un menú.
const SCHOOL_STORIES=[
 'En ciencias conoció a Sofía: hicieron un volcán con bicarbonato y ahora insiste en que la cocina es un laboratorio.',
 'Se hizo amigo de Benjamín, que intercambia lápices como si fueran acciones de la bolsa.',
 'La profesora lo felicitó por leer en voz alta. Cobró el aplauso con una reverencia demasiado larga.',
 'En recreo inventó una liga de fútbol con una pelota de papel. El VAR era una compañera con una regla.',
 'Conoció a Emilia y le mostró un dibujo de un pudú astronauta. Ella pidió uno para su cuaderno.',
 'Le tocó cuidar una planta de la sala. La bautizó Don Fotosíntesis y le contó sus problemas.',
 'En matemáticas resolvió el ejercicio correcto, pero explicó que llegó ahí con la ayuda de un dinosaurio invisible.',
 'Su compañero Matías le prestó una goma. Carlitos dijo que ahora eran socios de una empresa.',
 'Hoy hizo una tarjeta para tu farmacia: dibujó a un cliente con veinte recetas y ninguna paciencia.',
 'En música le prestaron un pandero y anunció que formará una banda llamada Los Comprimidos.',
 'Llevó una hoja seca al colegio porque, según él, era un fósil del otoño.',
 'La profesora pidió una frase con la palabra receta. Escribió: «Papá, receta por favor, pero con vacaciones».',
 'Conoció a Vicente. Su amistad comenzó al descubrir que ambos odian la coliflor.',
 'En el recreo descubrió una piedra brillante. La declaró tesoro nacional de su bolsillo.',
 'Hoy se sentó junto a Fernanda, que le enseñó a dibujar gatos con tres líneas.',
 'Inventó un club secreto con clave de acceso: «No contárselo a la profe». Duró ocho minutos.',
 'Ayudó a una compañera con la tarea y se autoproclamó profesor suplente de la mesa cuatro.',
 'En educación física llegó segundo. Dice que habría ganado si los zapatos tuvieran turbo.',
 'Llevó un dibujo de tu farmacia a la sala. El letrero decía «Aquí no se fía, salvo cariño».',
 'En el almuerzo conoció a Diego, que compartió una mandarina y le contó un chiste terrible.',
 'Construyó un robot con cajas recicladas. El robot solo sabe decir «recreo».',
 'Hoy le enseñaron sobre el sistema solar. Insiste en que Plutón merece un abogado.',
 'Junto a Antonia inventó un idioma secreto. Olvidaron la traducción antes del timbre.',
 'Ganó una partida de ajedrez por accidente y pidió que lo llamaran «maestro Carlitos».',
 'Hoy dibujó a su familia como superhéroes. Tu superpoder era encontrar cosas perdidas.',
 'En biblioteca encontró un libro de animales de Chile y eligió al pudú como su nuevo jefe.',
 'Su amiga Camila le prestó un lápiz verde. Dice que con él escribe tres veces más elegante.',
 'Le tocó dar los buenos días en el curso y agregó un discurso de seis minutos.',
 'Inventó una moneda de papel para comprar minutos extra de recreo. Nadie aceptó el cambio.',
 'La tarea era escribir un deseo. Escribió: «Que mañana haya menos tarea y más pan con palta».',
 'Junto a Tomás dibujó un mapa del colegio con un «tesoro» detrás del bebedero.',
 'Le preguntaron qué quería ser de grande. Respondió: «Primero quiero llegar al viernes».',
 'En clase de arte pintó una jirafa azul. Defendió su decisión diciendo que era una jirafa nocturna.',
 'Hoy aprendió a hacer origami y dejó tres barcos de papel escondidos en su mochila.',
 'Hizo un nuevo amigo, Nicolás. Ahora comparten la responsabilidad de cuidar una pelota imaginaria.',
 'La profesora pidió silencio; Carlitos levantó la mano para preguntar cuánto silencio exactamente.'
];
const REST_STORIES=[
 'Se quedó en casa descansando. Dijo que el control remoto es una gran responsabilidad.',
 'Hoy descansó con un libro de dinosaurios; decidió que el más simpático es el que no muerde.',
 'No fue al colegio y su amiga Sofía le mandó los apuntes con un dibujo de un pudú.',
 'Hizo la tarea desde el sillón. La terminó y se premió con una siesta de cuatro minutos.',
 'Benjamín le mandó un audio del recreo. Carlitos respondió que igual ganaría en una carrera de almohadas.',
 'Se sintió cansado, pero alcanzó a dibujar un cohete en el que todos sus amigos tienen asiento.'
];
const HOSPITAL_STORIES=[
 'La enfermera comentó que está más tranquilo. Carlitos le preguntó si el suero también necesita vacaciones.',
 'Hoy recibió un dibujo de Emilia y lo pegó junto a su cama. El pudú dibujado tiene capa.',
 'Le tomaron controles y pudo descansar. Preguntó si las máquinas hacen ruido porque están conversando.',
 'La profesora envió un mensaje para que no se preocupe por las tareas. Carlitos pidió conservarlo por escrito.',
 'En la visita de la tarde sonrió al ver a su familia; quería saber quién estaba cuidando su colección de piedras.',
 'Su ánimo mejoró un poco después de una videollamada con Benjamín. Los dos hablaron del recreo.',
 'Hoy pasó una jornada tranquila bajo observación. El personal confirmó que seguirá acompañado.',
 'Carlitos dibujó la habitación con una ventana enorme y un letrero: «Se reciben abrazos».',
 'Los médicos revisaron su evolución. Él preguntó si puede ponerle nombre al termómetro.',
 'Recibió una carta del curso. La leyó dos veces y guardó el sobre debajo de la almohada.',
 'Hoy se cansó más que ayer y prefirió dormir temprano. Se alegró cuando le llevaste su cuaderno.',
 'Pasó la tarde contando historias a su peluche. Según él, el peluche es un paciente exigente.'
];
function storyForDay(day,health){
 if(health==='hospitalizado')return `Hoy permanece hospitalizado. ${HOSPITAL_STORIES[(day*7+3)%HOSPITAL_STORIES.length]}`;
 if(health==='de alta')return 'Hoy le dieron el alta. Dijo que extrañará a las enfermeras, pero no a la comida del hospital. Está descansando en casa.';
 if(health==='ingresó al hospital')return 'Esta tarde tuvo que ingresar al hospital para recibir cuidados. Dejó su cuaderno abierto en la mesa y pidió que se lo llevaran mañana.';
 if(health==='en crisis'||health==='con molestias')return REST_STORIES[(day*5+1)%REST_STORIES.length];
 return SCHOOL_STORIES[(day-1)%SCHOOL_STORIES.length];
}
function closeDayGoHome(){
 if(game.tutorial){completePractice();return;}
 if(game.dayPay)return;
 game.dayPay=true;
 // Bono visible por libros transcritos: no se basa en errores secretos ni delata recetas irregulares.
 const postedThisDay=[...game.dispatches,...game.receipts].filter(x=>x.day===game.day&&DRUGS[x.drug]?.book);
 const pendingBook=postedThisDay.filter(x=>!x.posted).length;
 game.dayBonus=postedThisDay.length && pendingBook===0 ? 4000 : 0;
 game.dayIncome=40000+game.dayBonus;
 game.cash+=game.dayIncome-game.finesToday;
 game.hospital=game.hospital||{active:false,starts:0,days:0};
 const hospital=game.hospital;
 const isHospitalDay=hospital.active && game.day>=hospital.starts;
 let hospitalizedToday=false,dischargedToday=false;
 game.dayHospitalCost=0;
 if(isHospitalDay){
  hospitalizedToday=true;hospital.days++;
  game.dayHospitalCost=10000;
  if(hospital.days>=3){dischargedToday=true;hospital.active=false;}
 }
 let crisis=false,ailments=false,improving=false;
 if(hospitalizedToday){
  game.currentHealthEvent=dischargedToday?'de alta':'hospitalizado';
  game.carlitosHealth=dischargedToday?'de alta · en recuperación':'hospitalizado';
  changeMood('carlitos',dischargedToday?9:-3,dischargedToday?'Alta hospitalaria':'Jornada en el hospital');
 }else{
  crisis=game.day%4===0 || Math.random()<0.065;
  ailments=!crisis&&Math.random()<0.20;
  improving=!crisis&&!ailments&&Math.random()<0.26;
  game.currentHealthEvent=crisis?'crisis':ailments?'molestias':improving?'mejorando':'estable';
  game.carlitosHealth=crisis?'en crisis':ailments?'con molestias':improving?'mejorando':'estable';
  if(crisis){
   game.healthCrises++;
   game.crisesSinceAdmission++;
   changeMood('carlitos',-11,'Crisis de salud de Carlitos');
   if(game.crisesSinceAdmission>=3){
    game.crisesSinceAdmission=0;
    hospital.active=true;hospital.starts=game.day+1;hospital.days=0;
    game.currentHealthEvent='ingresó al hospital';
    game.carlitosHealth='ingresó al hospital · en observación';
    changeMood('carlitos',-12,'Ingreso hospitalario');
   }
  }
  else if(ailments)changeMood('carlitos',-4,'Molestias durante el día');
  else if(improving)changeMood('carlitos',11,'Un día de mejoría');
  else changeMood('carlitos',7,'Día estable y rutina familiar tranquila');
 }
 const storyStatus=game.currentHealthEvent;
 game.dayStoryKind=storyStatus;
 game.dayStory=storyForDay(game.day,storyStatus);
 game.lastFamilyGift='';
 game.dayTreatmentCost=3000;
 game.dayExpenses=12000+game.dayTreatmentCost+(crisis?25000:0)+(game.day%20===0?200000:0)+game.dayHospitalCost;
 game.couponUsedOnDay=null;
 if(hospitalizedToday)record(`Hospitalización de Carlitos: jornada ${hospital.days}, costo ${pesos(game.dayHospitalCost)}. ${dischargedToday?'Alta médica.':'Continúa en observación.'}`);
 if(hospital.active&&hospital.starts===game.day+1)record('Carlitos ingresó al hospital. Desde la siguiente jornada, se programaron tres días de hospitalización a $10.000 por día.');
 changeMood('qf',3,'Descanso y desconexión después del turno');
 game.scene='home';record(`Jornada finalizada. Sueldo ${pesos(40000)}; bono de libros ${pesos(game.dayBonus)}; multas ${pesos(game.finesToday)}. Carlitos: ${game.carlitosHealth}.`);save();render();
}

// A fixed narrative case uses the normal prescription, SIS and dispatch paths.
// The ending is armed only after stock is actually delivered.
function ensureSicolasPatient(){
 if(!game||game.tutorial||game.gameOver||game.day!==SIS_UNLOCK_DAY||!Array.isArray(game.patients))return;
 if(game.patients.some(x=>x.kind==='sicolasMuros')||game.patientIndex>=game.patients.length)return;
 const atStart=game.scene==='briefing'&&game.patientIndex===0&&!game.patientResult;
 game.patients.splice(atStart?0:game.patientIndex+1,0,makePatient('sicolasMuros',-1));
 save();
}
function maybeShowSisIntro(){
 if(!game||game.tutorial||game.gameOver||ui.modal||game.sisIntroSeen||!sisAvailable())return false;
 if(game.scene!=='briefing'&&game.scene!=='counter')return false;
 game.sisIntroSeen=true;ui.modal='sis-intro';save();return true;
}
function ensureDaySevenPatient(){
 if(game.day!==7||game.gameOver||!['briefing','counter','inspect'].includes(game.scene))return;
 if(game.specialEvents.daySevenCaseGenerated)return;
 if(game.patients.some(p=>p.storyEvent==='day-seven-false-prescription')){
  game.specialEvents.daySevenCaseGenerated=true;
  return;
 }
 const patient=makePatient('fakeDoctor',70);
 Object.assign(patient,{
  storyEvent:'day-seven-false-prescription',drug:'clonazepam05',rxType:'RETENIDA',qty:7,
  gaveId:true,noDocument:false,idUndercover:false,
  birthDate:'18/04/1987',registeredBirthDate:'18/04/1987',
  issue:'Receta de siete cajas emitida por un prescriptor inexistente en el registro SIS.',
  quote:'Buenas tardes. Vengo a retirar las siete cajas indicadas en esta receta.'
 });
 initializeIdentityDocument(patient,game.day);
 initializeForeignPrescriptionId(patient);
 game.patients.push(patient);
 game.specialEvents.daySevenCaseGenerated=true;
 save();
}
function activateDaySevenEnding(){
 const consequence=game?.daySevenConsequence;
 if(!consequence||game.day<consequence.due)return false;
 const firstArrival=game.gameOverReason!=='day-seven-false-prescription';
 game.gameOver=true;
 game.gameOverReason='day-seven-false-prescription';
 game.scene='gameover';
 game.patients=[];
 game.patientIndex=0;
 game.patientResult=null;
 game.pendingGift=null;
 ui.modal=null;
 ui.notifyOutcome=null;
 if(firstArrival){
  record(`Día ${game.day}: SEREMI llega con la policía por la receta falsa ${consequence.folio} despachada el día 7. El paciente falleció por suicidio. El QF es detenido. Final de la partida.`);
  save();
 }
 return true;
}
function daySevenEndingHtml(){
 if(!game.daySevenConsequence.creditsShown){
  return `${stage('inspection','DÍA 8 · SEREMI Y POLICÍA','La farmacia permanece cerrada')}<section class="content"><div class="paper"><h2>LA ÚLTIMA RECETA</h2><p>Esta mañana no hay pacientes esperando. Un fiscalizador de SEREMI entra acompañado por la policía.</p><p>«El paciente que retiró siete cajas ayer falleció por suicidio. La receta era falsa. El médico que aparece en ella no existe».</p><p>El fiscalizador deja la copia de la receta sobre el mostrador. La policía te comunica que quedas detenido por tu participación en este caso.</p><p>La farmacia cierra. Tu partida termina aquí.</p></div></section>${actionbar([['VER CRÉDITOS','day-seven-credits','cream']])}`;
 }
 return `<section class="content ending-credits"><figure class="ending-family"><img src="${assetUrl('assets/endings/familia-dia-8.webp')}" alt="Carlitos y su madre lloran juntos en casa, junto a una silla vacía"></figure><div class="paper center"><h2>RECIPE, PLEASE</h2><p>En casa, Carlitos y su madre lloran juntos. Tu silla queda vacía.</p><p>Una persona perdió la vida. Su familia también queda enfrentando su ausencia.</p><p>El químico farmacéutico es guardián de la salud de las personas.</p><p class="small">Creado por Carlos Sebastián Neira Ibacache.</p><p><b>FIN DE LA PARTIDA</b></p></div></section>${actionbar([['NUEVA PARTIDA','new','green'],['MENÚ PRINCIPAL','menu','dark']])}`;
}

function beginNextDay(){if(game.gameOver)return;game.day++;game.scene='briefing';prepareDay();save();render()}
const PROLOGUE_SCENES=[
 ['Tu oficio','Eres químico farmacéutico. Hoy abres tu propia farmacia. Ayer dejaste listo el mostrador. Esta mañana llegaste temprano para contar las cajas una vez más.'],
 ['Carlitos','Tienes un hijo, Carlitos. Vive con un síndrome y, entre sus controles y el colegio, en casa se organizan para acompañarlo cuando lo necesita. Esta mañana te pidió permiso para usar una de las cajas vacías. Tiene un proyecto y dice que todavía es secreto.'],
 ['El turno','Trabajas para sostener tu casa y mantener abierta la farmacia. Cada mes hay que pagar el arriendo, reponer medicamentos y hacer espacio en el horario para los controles de Carlitos. Hoy su abuela lo acompaña. A ti te toca abrir el local.'],
 ['El mostrador','El químico farmacéutico es guardián de la salud de las personas. La persona que te entrega una receta confía en que la vas a leer con cuidado. Si algo te hace dudar, te toca detenerte y revisar, incluso cuando hay fila.']
];
const PRACTICE_CASES=[
 ['Una caja para el paciente','La receta pide 1 caja. El stock de la farmacia es de 11 cajas disponibles. Compara el nombre y el RUT de ambos documentos y pulsa Dispensar.','Entregaste 1 caja. El stock bajó de 11 a 10. Las cajas disponibles son las existencias de la farmacia.'],
 ['Paciente sin cédula o DNI','Si el paciente no trae su cédula o DNI, devuelve la receta y selecciona «El paciente no porta cédula o DNI». Si presenta un documento falso, pulsa Notificar y elige «Avisar a Policía · Carnet presuntamente falsificado».','Receta devuelta por falta de DNI. El paciente dice «Ya, voy a buscarlo y vuelvo. Gracias».'],
 ['Un carnet sospechoso','Pulsa Verificar y luego Verificar identidad. Usa el lector de huella. Si no coincide, pulsa Notificar y elige «Avisar a Policía · Carnet presuntamente falsificado».','Notificaste a Policía por carnet presuntamente falsificado después de comprobar la huella.'],
 ['La receta se queda en la farmacia','Consulta en Protocolos la condición de venta. Este medicamento requiere receta retenida. La receta está en orden. Dispénsala y después registra los despachos en el Libro de control del cierre.','Dispensación registrada. La receta física queda archivada en la farmacia. Ahora completa el cierre y el Libro de control.']
];
function onboardingPanel(title,body,buttons,layout=''){
 return `<div class="overlay" role="dialog" aria-modal="true" aria-label="${escapeText(title)}"><div class="modal onboarding-modal ${layout}"><h2>${escapeText(title)}</h2>${body}<div class="btn-row">${buttons}</div></div></div>`;
}
function onboardingModal(){
 if(game.scene==='welcome')return onboardingPanel('ANTES DE ABRIR', '<p>Conoce la historia de tu familia y elige cómo comenzar.</p><p>El día 0 te enseña a revisar documentos, devolver recetas, notificar y registrar el cierre. Puedes repetirlo desde el Manual.</p>',btn('HACER TURNO DE PRÁCTICA · DÍA 0','choose-practice','green')+btn('IR AL DÍA 1','choose-campaign','cream'));
 if(game.scene==='prologue'){
  const index=game.onboarding.step;
  const [title,text]=PROLOGUE_SCENES[index];
  const label=index===3?(game.onboarding.route==='practice'?'EMPEZAR PRÁCTICA':'ABRIR LA FARMACIA'):'SIGUIENTE';
  return onboardingPanel(title,`<div class="prologue-art prologue-art-${index}" role="img" aria-label="${escapeText(title)}"></div><p class="prologue-text">${escapeText(text)}</p>`,(index?btn('ANTERIOR','prologue-back','dark'):'')+btn(label,'prologue-next','green'),'prologue-modal');
 }
 const t=game.tutorial;
 if(ui.modal==='practice-complete')return onboardingPanel('TURNO DE PRÁCTICA COMPLETADO','<p>Revisaste una receta válida, devolviste una por falta de DNI, notificaste un carnet falso y registraste el cierre.</p>',btn(t.returnState?'VOLVER A MI PARTIDA':'EMPEZAR DÍA 1','practice-finish','green'));
 const [title,instruction]=t.closing?['Cierre y Libro de control','Pulsa «Registrar despachos en libro». El Libro de control registra las cajas entregadas. Después pulsa «Terminar práctica».']:PRACTICE_CASES[game.patientIndex];
 return onboardingPanel(t.feedback?'VUELVE A INTENTARLO':title,`<p>${escapeText(t.feedback||instruction)}</p><p class="tiny">Turno de práctica. Puedes volver a intentarlo.</p>`,btn('ENTENDIDO','practice-dismiss','green'));
}
function chooseOpening(route){
 if(game.scene!=='welcome')return;
 game.onboarding={route,step:0};game.scene='prologue';ui.modal='prologue';save();render();
}
function nextPrologue(){
 if(game.scene!=='prologue')return;
 if(game.onboarding.step<3){game.onboarding.step++;save();render();return;}
 if(game.onboarding.route==='practice')startPractice();else startCampaign();
}
function startCampaign(){
 game=newState();game.onboardingComplete=true;prepareDay();ui.modal=null;save();render();
}
function startPractice(returnState=null){
 game=newState();game.day=0;game.scene='counter';
 game.tutorial={returnState,helpOpen:true,feedback:null,closing:false,completed:false};
 game.patients=['controlled','missingid','fakeid','controlled'].map((kind,index)=>{
  const p=makePatient(kind,index);
  Object.assign(p,{noDocument:index===1,gaveId:index!==1,idUndercover:false,qty:1,rxType:'RETENIDA',drug:index===3?'clonazepam2':'clonazepam05',rxDate:dateOf(0),prescriber:'Dra. Francisca Lagos',prescriberRut:doctorInfo('Dra. Francisca Lagos').rut,signature:doctorInfo('Dra. Francisca Lagos').signature,prescriberRegistered:true,birthDate:'18/04/1987',registeredBirthDate:'18/04/1987'});
  if(index===1)p.quote='Pucha, parece que dejé el carnet en la casa. ¿Me lo puede entregar igual?';
  initializeIdentityDocument(p,0);initializeForeignPrescriptionId(p);
  return p;
 });
 game.stock.clonazepam05=11;game.bookStock.clonazepam05=11;
 ui.modal='practice-help';ui.notifyOutcome=null;save();render();
}
function practiceRetry(message){
 game.tutorial.feedback=message;game.tutorial.helpOpen=true;ui.modal='practice-help';save();render();return false;
}
function practiceDecisionAllowed(decision,category,reason){
 if(!game.tutorial)return true;
 if(game.tutorial.closing)return false;
 const index=game.patientIndex;
 if(index===1){
  if(decision!=='return'||reason!=='id-missing')return practiceRetry('El paciente no trae DNI. Devuelve la receta y selecciona «El paciente no porta cédula o DNI».');
 }else if(index===2){
  if(game.patients[index].identityScan!=='mismatch')return practiceRetry('Primero comprueba la huella en Verificar → Verificar identidad → Colocar dedo.');
  if(decision!=='police'||category!=='police-id')return practiceRetry('La huella no coincide. Abre Notificar y elige «Avisar a Policía · Carnet presuntamente falsificado».');
 }else if(decision!=='dispense'){
  return practiceRetry(index===0?'El paciente pide 1 caja. Tienes 11 cajas disponibles en la farmacia. Los documentos coinciden. Pulsa Dispensar.':'Esta receta está en orden y tienes stock. Pulsa Dispensar. La receta física se archiva al entregar el medicamento.');
 }
 return true;
}
function advancePractice(){
 if(!game.patientResult||!game.patients[game.patientIndex]?.done)return;
 game.patientIndex++;game.patientResult=null;game.idRequested=false;game.patientVerified=false;game.qrChecked=false;ui.notifyOutcome=null;
 if(game.patientIndex===4){game.scene='close';game.deliveryDone=true;game.tutorial.closing=true;}
 else game.scene='counter';
 game.tutorial.helpOpen=true;game.tutorial.feedback=null;ui.modal='practice-help';save();render();
}
function finishPractice(){
 if(!game.tutorial)return;
 const restored=game.tutorial.returnState;
 if(restored){game=restored;ui.modal=null;save();render();}else startCampaign();
}
function completePractice(){
 if(game.dispatches.some(x=>!x.posted))return practiceRetry('Falta registrar los despachos. Pulsa «Registrar despachos en libro» antes de terminar.');
 game.tutorial.completed=true;ui.modal='practice-complete';save();render();
}

function startNew(){game=newState();game.day=0;game.scene='welcome';ui={...ui,modal:'start-choice',manual:'INICIO'};save();render()}
function guardianDuoPortrait(p){
 const son=subjectPortrait({kind:'son',catalogId:p.sonCatalogId,name:p.sonName},'stage');
 return `<span class="duo-person duo-father">${subjectPortrait(p)}</span><span class="duo-person duo-son">${son}</span>`;
}
function stage(which,label,sub='',speech=''){
 let p=which==='pharmacy'&&['counter','inspect'].includes(game?.scene)?game.patients?.[game.patientIndex]:null;
 const key=p?`${p.portraitSeed}-${game.day}-${game.patientIndex}`:'';
 const arriving=game?.scene==='counter'&&key!==ui.arrivalKey;
 if(arriving)ui.arrivalKey=key;
 const person=p?`<div class="stage-character ${p.guardianVisit?'duo ':''}${p.kind==='specialCarlos'?'carlos':p.kind==='chinese'?'nomeh':p.kind==='clubNocturno'?'club':p.kind==='tuguelExpired'||p.kind==='tuguelFake'?'tuguel':'regular'} ${arriving?'patient-arriving':''}">${p.guardianVisit?guardianDuoPortrait(p):subjectPortrait(p)}</div>`:'';
 if(which==='home'||which==='book')return `<div class="stage ${which} scenic-only" role="img" aria-label="${which==='home'?'Familia reunida en el hogar':'Estanterías de medicamentos de la farmacia'}"></div>`;
 if(p&&p.done&&p.outcomeQuote&&speech===p.quote)speech=p.outcomeQuote;
 return `<div class="stage ${which}">${person}<div class="stage-label"><b>${escapeText(label)}</b><small>${escapeText(sub)}</small></div>${speech?`<div class="speech">${escapeText(speech)}</div>`:''}</div>`;
}
function sisAvailable(){
 return game.day>=SIS_UNLOCK_DAY;
}
function header(){if(game.tutorial)return `<header class="game-top"><div class="brand">DÍA 0 · TURNO DE PRÁCTICA</div><div class="btn-row">${btn('VER INSTRUCCIÓN','practice-help','cream')}${btn('MANUAL','manual','dark')}${btn('SALIR DE LA PRÁCTICA','practice-exit','dark')}</div></header>`;let unread=(game.notifications||[]).filter(x=>!x.seen).length;return `<header class="game-top"><div class="brand brand-logo"><img src="${assetUrl('assets/branding/recipe-please-logo.png')}" alt="Recipe, Please" width="1254" height="1254"></div><div class="topstats"><span class="hud-stat">DÍA <strong>${z(game.day)}</strong> · ${dateOf(game.day)}</span><span class="hud-stat">EFECTIVO <strong>${pesos(game.cash)}</strong></span><span class="hud-stat">FALTAS <strong>${game.infractions}</strong></span>${moodBar('QF',game.moodQf,'qf',true)}${moodBar('CARLITOS',game.moodCarlitos,'carlitos',true)}</div><button class="smallbtn mobile-top-toggle" data-action="toggle-top" aria-expanded="${ui.topOpen?'true':'false'}">${ui.topOpen?'✕ CERRAR':'☰ OPCIONES'}${unread&&!ui.topOpen?`<span class="notification-count">${unread}</span>`:''}</button><div class="top-actions${ui.topOpen?' open':''}"><button class="smallbtn audio-toggle" data-action="toggle-sound" aria-pressed="${ui.soundEnabled?'true':'false'}" title="Activar o silenciar efectos sonoros">${ui.soundEnabled?'♫ SONIDO: SÍ':'♪ SONIDO: NO'}</button><button class="smallbtn music-toggle" data-action="toggle-music" aria-pressed="${ui.musicEnabled?'true':'false'}" title="Activar o silenciar música ambiental original">${ui.musicEnabled?'♬ MÚSICA: SÍ':'♩ MÚSICA: NO'}</button><button class="smallbtn" data-action="gifts">♢ REGALOS (${(game.gifts||[]).filter(g=>!g.used).length})</button><button class="smallbtn" data-action="calendar">▦ CALENDARIO</button><button class="smallbtn" data-action="phone">☎ AVISOS ${unread?`<span class="notification-count">${unread}</span>`:''}</button>${sisAvailable()?'<button class="smallbtn" data-action="sis">▣ REGISTRO SIS</button>':''}<button class="smallbtn" data-action="manual">? MANUAL</button><button class="smallbtn" data-action="book">▤ LIBRO</button>${game.scene==='book'?'':'<button class="smallbtn" data-action="go-menu">⌂ INICIO</button>'}<button class="smallbtn" data-action="menu">☷ MENÚ</button></div></header>`}
const FOCUSABLE='button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex="0"]';
let renderedModal=null;
let modalOpener=null;
let clickedAction=null;

function focusKey(element){
 if(element?.id)return {id:element.id};
 const action=element?.dataset?.action;
 return action?{action,attributes:{...element.dataset}}:null;
}
function restoreFocus(root,key){
 if(!key)return false;
 const element=key.id?root.querySelectorAll('[id]'):root.querySelectorAll('[data-action]');
 const match=[...element].find(node=>!node.disabled&&node.getClientRects().length&&
  (key.id?node.id===key.id:Object.entries(key.attributes).every(([name,value])=>node.dataset[name]===value)));
 if(!match)return false;
 match.focus({preventScroll:true});
 return true;
}
function clearModalRendering(){
 document.documentElement?.classList.remove('modal-open');
 renderedModal=null;
 modalOpener=null;
}
function wrap(body){
 const modal=ui.modal?modalHtml():'';
 const previous=app.querySelector('.modal');
 const currentFocus=document.activeElement;
 const sameModal=Boolean(modal&&renderedModal===ui.modal);
 const priorFocus=sameModal?focusKey(currentFocus):null;
 const scrollTop=sameModal?previous?.scrollTop||0:0;
 if(modal&&!renderedModal){
  modalOpener=focusKey(clickedAction||currentFocus);
  toastEl.classList.remove('show');
 }
 const returning=modal?null:modalOpener;
 app.innerHTML=`<main class="shell" data-practice-step="${game.tutorial?game.patientIndex:''}"${modal?' inert aria-hidden="true"':''}>${['welcome','prologue'].includes(game.scene)||game.gameOverReason==='day-seven-false-prescription'?'':header()}${body}</main><div class="footer">RECIPE, PLEASE · Edición 1.9.106 · Una obra de ficción. Simulación farmacéutica simplificada, no una guía clínica ni normativa.</div>${modal}`;
 bindDrag();
 if(!modal){
  clearModalRendering();
  restoreFocus(app,returning);
  return;
 }
 renderedModal=ui.modal;
 document.documentElement?.classList.add('modal-open');
 const overlay=app.querySelector('.overlay');
 if(!overlay?.matches?.('.overlay'))return;
 const dialog=overlay.querySelector('.modal')||overlay;
 dialog.tabIndex=-1;
 overlay.setAttribute('role','dialog');
 overlay.setAttribute('aria-modal','true');
 const heading=dialog.querySelector('h2,h3');
 if(heading&&!overlay.hasAttribute('aria-label')){
  heading.id='active-dialog-title';
  overlay.setAttribute('aria-labelledby',heading.id);
 }
 dialog.scrollTop=scrollTop;
 if(!restoreFocus(dialog,priorFocus)){
  const target=dialog.matches('.practice-police')?dialog.querySelector('[data-action="notify-police-id"]'):null;
  (target||dialog).focus({preventScroll:true});
 }
}
function trapModalTab(event){
 const dialog=app.querySelector('.overlay .modal');
 if(!dialog?.matches?.('.modal'))return;
 const controls=[...dialog.querySelectorAll(FOCUSABLE)].filter(node=>node.getClientRects().length);
 const position=controls.indexOf(document.activeElement);
 const edge=event.shiftKey?0:controls.length-1;
 if(position<0||position===edge){
  event.preventDefault();
  const next=event.shiftKey?controls[controls.length-1]:controls[0];
  (next||dialog).focus();
 }
}
function btn(text,act,cls='dark',extra=''){return `<button class="btn ${cls}" data-action="${act}" ${extra}>${text}</button>`}
function actionbar(items){return `<div class="actionbar">${items.map(x=>btn(...x)).join('')}</div>`}
function menuHtml(){clearModalRendering();if(TACA_PREVIEW){
 app.innerHTML='<main class="shell"><section class="menu-options"><h1>¡Campeones de taca-taca!</h1><div class="btn-row"><a class="btn cream" href="./?escenas=carlitos">Volver a probar las escenas</a><a class="btn green" href="./">Jugar la versión completa</a></div></section></main>';return;
 }let saved=load();app.innerHTML=`<main class="shell">${stage('menu','EDICIÓN JUGABLE · VERSIÓN 1.9.106','Su receta, por favor · una decisión, una consecuencia')}<section class="menu-options textured-menu"><div class="menu-audio" role="group" aria-label="Sonido y música"><button class="smallbtn audio-toggle" data-action="toggle-sound" aria-pressed="${ui.soundEnabled?'true':'false'}">${ui.soundEnabled?'♫ SONIDO: SÍ':'♪ SONIDO: NO'}</button><button class="smallbtn music-toggle" data-action="toggle-music" aria-pressed="${ui.musicEnabled?'true':'false'}">${ui.musicEnabled?'♬ MÚSICA: SÍ':'♩ MÚSICA: NO'}</button></div><h1>UNA RECETA.<br>UNA DECISIÓN.<br>UNA CONSECUENCIA.</h1><p>Eres el químico farmacéutico de una farmacia de barrio. Revisa documentos, recibe pedidos, controla medicamentos y cuida de tu familia. Las decisiones no siempre son fáciles.</p><div class="btn-row">${btn('▶ NUEVA PARTIDA','new','green')}${saved?btn('▣ CONTINUAR PARTIDA','continue','cream'):''}</div><div class="difficulty"><b>Esta versión ya permite:</b><p class="small">Pacientes sin repetición durante la campaña · firmas caligráficas · regalos animados · documentos con texturas · documentos arrastrables · atención y validación de recetas · comparación ampliada · recepción física de pedidos · reportes · libros correlativos · fiscalizaciones y rectificaciones · remuneración · familia y Carlitos · eventos clandestinos.</p><p class="tiny muted">Contiene una campaña de demostración con jornadas repetibles. El arte es un prototipo derivado de los bocetos aprobados; las reglas de juego no sustituyen procedimientos sanitarios reales.</p></div></section></main>`}
function briefingHtml(){return `${stage('pharmacy',`MEMORÁNDUM · DÍA ${z(game.day)}`,'Inicio del turno farmacéutico')}<section class="content"><div class="content-grid"><div class="paper"><h2>CIRCULAR INTERNA</h2><p><b>Fecha:</b> ${dateOf(game.day)}</p><p><b>Jornada:</b> ${z(game.day)} / Simulación</p><hr><p>${game.day===1?'Revise identidad, tipo de receta y condiciones de dispensación. Un documento vencido debe devolverse sin denuncia automática.':game.day===2?'Desde hoy puede recibir una fiscalización. Mantenga al día el Libro y valide el código QR de cada receta electrónica antes de dispensar.':'Las alertas de talonarios robados y las discrepancias de inventario pueden relacionarse con casos anteriores. Revisa el teléfono ☎ en la barra superior.'}</p>${game.day>=3?'<p class="pill bad">ALERTA: FOLIOS 003450–003499</p>':''}<p class="mini">Catálogo ampliado por principio activo y concentración. Recetas simples sin libro especial de control. Todos los pacientes son ficticios.</p></div><div class="dark-card"><h2>ESTADO DE LA FARMACIA</h2><div class="money-line"><span>Pacientes programados</span><strong>${game.patients.length}</strong></div><div class="money-line"><span>Pedidos por recibir</span><strong>1</strong></div><div class="money-line"><span>Asientos pendientes</span><strong>${game.dispatches.filter(x=>!x.posted).length+game.receipts.filter(x=>!x.posted).length}</strong></div><div class="money-line"><span>Dinero familiar</span><strong>${pesos(game.cash)}</strong></div><div class="notice ${game.day>=3?'warn':''}">El hijo del protagonista se llama <b>Carlitos</b> y padece el síndrome ficticio de Neibacache.</div></div></div></section>${actionbar([['▶ COMENZAR ATENCIÓN','go-counter','green'],['▤ CONSULTAR LIBRO','book','cream'],['? VER MANUAL','manual','dark']])}`}
function declaresTechnologistTitle(p){
 return p.kind==='tmFraud'&&p.claimedTitle==='Tecnólogo Médico';
}
function prescriberNameOnPrescription(p){
 return p.claimedTitle?p.prescriber.replace(/^(?:TM|Pod)\.\s*/,''):p.prescriber;
}
function prescriptionHtml(p,compact=false){
  if(isPaperEvent(p))return `<div class="paper foreign-note draggable ${documentWearClass(p,'paper')}" data-drag="rx"><div class="paper-fold"></div><h3>${p.kind==='chinese'?'陌生的纸条 · PAPEL DESCONOCIDO':p.kind==='tarotera'?'CARTA DE TAROT':'TARJETA INESPERADA'}</h3><div class="foreign-symbols">${p.kind==='chinese'?'有时候，只有翻译才能理解一些事情。':p.kind==='tarotera'?'THE BRAIN · OBSEQUIO':'CLUB NOCTURNO · ENTRADA LIBRE'}</div><p>NO ES UNA RECETA</p><p class="mini">No hay medicamento, indicación ni profesional prescriptor.</p></div>`;
  const cls=p.rxType==='CHEQUE'?'bad':p.rxType==='ELECTRÓNICA'?'warn':'';
  if(p.rxType==='CHEQUE'){
    const d=DRUGS[p.drug];
    return `<div class="paper doc draggable rx-cheque ${documentWearClass(p,'rx')}" data-drag="rx" title="Arrastra la receta cheque; doble clic para inspección"><div class="paper-fold"></div>
      <div class="cheque-top"><div class="cheque-title">RECETA CHEQUE</div><span class="cheque-folio">N.º ${escapeText(p.folio)}</span></div>
      
      <div class="cheque-grid">
        <div class="cheque-sect"><div class="cheque-sect-title">DATOS DEL PACIENTE</div><div><b>Nombre</b> ${escapeText(rxPatientName(p))}</div><div><b>RUT</b> <span class="rx-rut">${prescriptionPatientId(p)}</span></div><div><b>Dirección</b> Av. del Parque 123</div></div>
        <div class="cheque-sect"><div class="cheque-sect-title">PRESCRIPTOR</div><div><b>Profesional</b> ${escapeText(prescriberNameOnPrescription(p))}</div><div><b>RUT prescriptor</b> ${escapeText(p.prescriberRut||'Pendiente')}</div><div><b>Fecha emisión</b> ${escapeText(p.rxDate)}</div><div><b>Consulta</b> ${escapeText(p.clinic||'Centro Médico Los Alerces')}</div><div><b>Título declarado</b> ${escapeText(p.claimedTitle||doctorInfo(p.prescriber).title)}</div></div>
      </div>
      <div class="cheque-sect cheque-rx"><div class="cheque-sect-title">PRESCRIPCIÓN</div><div class="rx-drug">${escapeText(drugName(p.drug))}</div><div class="center">Forma: ${escapeText(d.form)} · ${escapeText(d.pack)}</div><div class="center"><b>${escapeText(drugRegLine(p))}</b></div><div class="center"><b>Cantidad solicitada:</b> ${p.qty} ${p.qty===1?'caja':'cajas'}</div></div>
      <div class="cheque-foot"><span>Firma del prescriptor:<br><strong class="ink-sign">${prescriptionSignatureArtwork(p)}</strong></span><span class="cheque-stamp">FECHA ${escapeText(p.rxDate)}</span></div>
    </div>`;
  }
  return `<div class="paper doc draggable ${documentWearClass(p,'rx')}" data-drag="rx" title="Arrastra el documento; doble clic para inspeccionar"><div class="paper-fold"></div><div class="doc-label">${p.rxType==='ELECTRÓNICA'?'RECETA ELECTRÓNICA'+(DRUGS[p.drug]?.kind==='CHEQUE'?' · CHEQUE':DRUGS[p.drug]?.kind==='RETENIDA'?' · CONTROLADO':''):'RECETA MÉDICA'}</div><p class="center mini">REPÚBLICA DE CHILE · PRESCRIPCIÓN</p><p class="right"><span class="pill ${cls}">FOLIO ${escapeText(p.folio)}</span></p><div class="doc-fields"><div><b>Paciente:</b> ${escapeText(rxPatientName(p))}</div><div><b>RUT:</b> <span class="rx-rut">${prescriptionPatientId(p)}</span></div><div><b>Fecha emisión:</b> ${escapeText(p.rxDate)}</div><div><b>Prescriptor:</b> ${escapeText(prescriberNameOnPrescription(p))}${p.claimedTitle?` <span class="rx-title-claim">· ${escapeText(p.claimedTitle)}</span>`:''}</div><div><b>RUT prescriptor:</b> ${escapeText(p.prescriberRut||'Pendiente')}</div>${p.clinic?`<div><b>Clínica de emisión:</b> ${escapeText(p.clinic)}</div>`:''}</div><hr><p class="center"><b>Rp/</b></p><div class="rx-drug">${escapeText(drugName(p.drug))}</div><p class="center">${escapeText(DRUGS[p.drug].pack)}${rxRegistryShown(p)?' · '+escapeText(drugRegLine(p)):''} · Cantidad recetada: ${p.qty} ${p.qty===1?'caja':'cajas'}</p><p class="mini">Posología: según indicación del prescriptor.</p><div class="ink-sign">${prescriptionSignatureArtwork(p)}</div><p class="center mini">Firma y timbre del prescriptor</p><div class="chips"><span class="pill ${p.rxType==='CHEQUE'?'bad':'warn'}">${escapeText(p.rxType==='CHEQUE'?'Cheque':p.rxType==='ELECTRÓNICA'?'Electrónica':'Blanca')}</span></div></div>`;
}
// Rúbricas humanas de los titulares: trazos SVG con iniciales gestuales y floreos variables.
// Son distintas para cada cédula y se conservan con el identificador del documento.
function identitySignatureSvg(p){
 let seed=(Number(p.portraitSeed)||345727)>>>0;
 for(const c of String(p.documentNumber||p.rut||''))seed=(Math.imul(seed^c.charCodeAt(0),16777619))>>>0;
 const next=()=>{seed^=seed<<13;seed^=seed>>>17;seed^=seed<<5;return (seed>>>0)/4294967296};
 const first=(p.firstNames||p.name.split(/\s+/)[0]||'A');
 const last=(p.surnames||p.name.trim().split(/\s+/).pop()||'R');
 // Usar monograma abreviado más rúbrica variable, no escribir todo el nombre en cursiva.
 const initials=`${first.slice(0,1).toUpperCase()}. ${last.slice(0,2)}`;
 const angle=(next()-.5)*9;
 const x=3+next()*8,base=27+next()*3,wide=60+next()*43;
 const sweep=`M ${x.toFixed(1)} ${(base+8).toFixed(1)} C ${(x+wide*.18).toFixed(1)} ${(base+next()*2).toFixed(1)} ${(x+wide*.68).toFixed(1)} ${(base+7+next()*4).toFixed(1)} ${(x+wide).toFixed(1)} ${(base+4).toFixed(1)}`;
 const curl=next()>.33?`<path d="M ${(x+wide-9).toFixed(1)} ${(base+4).toFixed(1)} Q ${(x+wide+14).toFixed(1)} ${(base-14).toFixed(1)} ${(x+wide+3).toFixed(1)} ${(base+1).toFixed(1)}" stroke-width="1.05"/>`:'';
 const slash=next()>.45?`<path d="M ${(x+21).toFixed(1)} ${(base-23).toFixed(1)} L ${(x+29).toFixed(1)} ${(base+10).toFixed(1)}" stroke-width="1.15"/>`:'';
 return `<svg class="id-autograph" viewBox="0 0 164 49" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Firma manuscrita del titular"><g transform="rotate(${angle.toFixed(1)} 65 26)" fill="none" stroke="#304a76" stroke-linecap="round" stroke-linejoin="round"><text x="${x.toFixed(1)}" y="${base.toFixed(1)}" font-family="Z003, 'Brush Script MT', cursive" font-style="italic" font-size="30" fill="#304a76" stroke="none">${escapeText(initials)}</text><path d="${sweep}" stroke-width="1.15"/>${curl}${slash}</g></svg>`;
}
function rufusCardHtml(draggable=false){
 return `<img class="rufus-id-sprite ${draggable?'draggable':''}" ${draggable?'data-drag="id"':''}
  src="${assetUrl('assets/patients/rufus-card.webp')}"
  alt="Very Real ID. Name: Rufus. Age: 21. Address: 100 Cool Street. Dibujo de un gato."
  draggable="false">`;
}

// Plantillas de carnet (1.9.88). Rectángulos en % de la imagen: [x,y,ancho,alto]. 
const ID_TEMPLATES={"HT":{"src":"assets/idcards/ht.webp","w":1480,"h":948,"r":{"photo":[4.53,24.79,29.39,56.33],"surname":[36.82,23.42,60.14,4.75],"names":[36.82,32.7,60.14,4.75],"doc":[36.82,42.19,33.65,4.75],"sex":[72.91,42.19,24.05,4.75],"birth":[36.69,51.79,26.76,4.54],"nat":[66.15,51.79,30.81,4.64],"place":[36.82,60.97,60.14,4.64],"issued":[36.69,70.36,27.03,4.75],"expires":[66.15,70.36,30.81,4.75],"sign":[36.82,80.38,60.0,9.7]}},"VE":{"src":"assets/idcards/ve.webp","w":1494,"h":953,"r":{"photo":[65.06,26.76,30.79,58.66],"surname":[4.15,27.28,58.37,5.67],"names":[4.15,38.41,58.37,5.67],"doc":[4.15,49.32,33.07,4.93],"sex":[38.82,49.32,23.76,4.93],"birth":[4.15,59.29,25.1,5.14],"civil":[32.2,59.29,28.38,5.14],"nat":[4.15,69.46,21.82,5.77],"issued":[28.25,69.46,16.53,5.77],"expires":[46.72,69.46,16.2,5.77],"sign":[4.15,80.8,58.23,8.18]}},"IT":{"src":"assets/idcards/it.webp","w":1545,"h":962,"r":{"photo":[3.3,20.37,25.05,57.8],"surname":[31.59,22.56,49.97,4.37],"names":[31.59,31.6,49.97,4.26],"doc":[31.59,40.44,49.97,4.37],"place":[31.59,49.69,32.3,4.37],"birth":[66.6,49.69,22.27,4.37],"sex":[31.59,58.94,18.45,4.37],"nat":[54.69,58.94,34.17,4.37],"issued":[31.59,68.19,24.47,4.37],"expires":[60.71,68.19,28.16,4.37],"sign":[31.59,78.07,54.69,8.52]}},"AR":{"src":"assets/idcards/ar.webp","w":1517,"h":955,"r":{"photo":[4.35,19.37,28.02,52.67],"surname":[34.67,21.99,60.65,5.24],"names":[34.67,33.09,60.65,5.24],"sex":[34.67,44.29,14.37,5.45],"nat":[51.62,44.29,43.7,5.45],"birth":[34.67,55.39,34.08,5.24],"issued":[34.67,66.28,32.43,5.34],"expires":[34.54,77.28,32.76,5.24],"doc":[3.56,78.32,28.81,7.96],"sign":[70.6,66.81,25.84,18.64]}},"DE":{"src":"assets/idcards/de.webp","w":1545,"h":944,"r":{"photo":[3.37,21.61,30.42,64.62],"surname":[35.73,22.56,60.52,4.98],"names":[35.73,32.2,60.52,4.98],"doc":[35.73,41.95,34.76,4.87],"birth":[35.73,51.48,25.7,4.87],"place":[63.56,51.48,33.14,4.87],"nat":[35.73,61.12,36.63,4.98],"sex":[74.95,61.12,21.81,4.98],"issued":[35.73,70.76,28.09,4.98],"expires":[66.93,70.76,29.84,4.98],"sign":[35.73,80.83,61.04,9.96]}},"PE":{"src":"assets/idcards/pe.webp","w":1517,"h":891,"r":{"photo":[2.97,24.35,25.71,57.46],"surname":[30.52,27.5,58.47,5.27],"names":[30.52,38.38,58.47,5.27],"doc":[30.52,49.61,27.03,5.27],"birth":[60.25,49.61,26.83,5.27],"nat":[30.52,60.61,19.25,5.39],"sex":[52.08,60.61,11.14,5.39],"civil":[65.39,60.61,19.05,5.39],"issued":[30.52,72.05,23.8,5.39],"expires":[56.36,72.05,24.92,5.39],"sign":[29.93,80.47,47.26,10.33]}},"CL":{"src":"assets/idcards/cl.webp","w":1482,"h":898,"r":{"photo":[3.71,18.26,24.29,53.67],"surname":[30.77,21.05,52.29,5.79],"names":[30.77,32.74,52.16,5.79],"nat":[30.5,44.43,27.94,5.23],"sex":[60.8,44.43,23.75,5.23],"birth":[30.5,55.23,25.91,5.46],"doc":[59.11,55.23,26.45,5.46],"issued":[30.5,66.15,25.91,5.46],"expires":[59.11,66.15,26.45,5.46],"run":[3.58,78.95,24.97,8.69],"sign":[31.92,77.62,40.42,12.81]}},"BO":{"src":"assets/idcards/bo.webp","w":1551,"h":915,"r":{"photo":[3.42,19.45,26.31,56.83],"surname":[31.91,21.42,56.87,5.46],"names":[31.91,32.9,56.87,5.46],"doc":[31.91,43.93,39.91,5.36],"birth":[31.91,55.08,30.37,5.57],"nat":[64.35,55.08,32.43,5.57],"sex":[31.91,66.34,14.31,5.68],"issued":[48.23,66.34,23.4,5.68],"expires":[73.05,66.34,23.73,5.68],"sign":[45.2,75.74,50.16,13.99]}},"CN":{"src":"assets/idcards/cn.webp","w":1492,"h":976,"r":{"photo":[70.58,22.44,26.01,43.03],"surname":[3.69,26.02,63.94,5.12],"names":[3.69,36.27,63.94,5.12],"sex":[3.69,46.52,19.57,4.51],"nat":[26.94,46.52,40.68,4.51],"birth":[3.69,56.15,24.66,4.51],"place":[31.23,56.15,36.39,4.51],"doc":[3.69,65.98,63.94,4.41],"issued":[3.69,75.41,26.74,4.61],"expires":[34.12,75.41,33.51,4.61],"sign":[3.69,85.04,64.08,6.97]}}};
const ID_BIRTHPLACES={CN:['上海市','北京市','广州市','成都市','武汉市','杭州市'],HT:['PORT-AU-PRINCE','CAP-HAÏTIEN','GONAÏVES','JACMEL','LES CAYES'],IT:['ROMA','MILANO','NAPOLI','TORINO','FIRENZE','BOLOGNA'],DE:['BERLIN','HAMBURG','MÜNCHEN','KÖLN','FRANKFURT','LEIPZIG']};
function idCivilStatus(p,dates){
 const seed=(Number(p.portraitSeed)||0)>>>0,fem=p.idSex==='F';
 const y=Number(String(dates.birth||'').slice(-4))||1990,age=2026-y;
 const opts=age<25?['SOLTER']:age>=70?['SOLTER','CASAD','VIUD']:['SOLTER','CASAD','SOLTER'];
 return opts[seed%opts.length]+(fem?'A':'O');
}
// Porcentaje de alto transparente bajo el busto (id_gaps.py lo regenera)
const ID_PHOTO_GAPS={};
function idPhotoFit(html){
 const m=/src="[^"]*?([^\/"]+?)\.(?:webp|png)"/.exec(html);
 const key=m?m[1]:'';
 const gap=Number(ID_PHOTO_GAPS[key])||0;
 const css=`width:100%!important;height:100%!important;object-fit:cover!important;object-position:center center!important;-webkit-mask-size:cover!important;mask-size:cover!important;-webkit-mask-position:center center!important;mask-position:center center!important;transform:translateY(${gap}%)!important;`;
 return html.replace(/^<img /,`<img style="${css}" `);
}
function idTemplateHtml(p,code,v){
 const t=ID_TEMPLATES[code];
 const f=(key,text,{shrink=true,center=false}={})=>{
  const r=t.r[key];if(!r)return '';
  const boxW=r[2]/100*t.w,boxH=r[3]/100*t.h,txt=String(text??'—');
  let fs=boxH*0.62;
  if(shrink)fs=Math.min(fs,boxW*0.86/Math.max(1,txt.length*0.6));
  return `<span class="idt-f${center?' c':''}" style="left:${r[0]}%;top:${r[1]}%;width:${r[2]}%;height:${r[3]}%;font-size:${(fs/t.w*100).toFixed(3)}cqw">${escapeText(txt)}</span>`;
 };
 const ph=t.r.photo,sg=t.r.sign;
 // Foto del carnet: siempre cubre el recuadro y el busto toca el borde inferior (sin franjas flotantes).
 const photo=idPhotoFit(subjectPortrait(p,'id'));
 return `<div class="idtpl id-country-${code.toLowerCase()} draggable ${documentWearClass(p,'id')}" data-drag="id" title="Arrastra la cédula; doble clic para inspeccionar" aria-label="Cédula del paciente" style="aspect-ratio:${t.w}/${t.h};background-image:url('${assetUrl(t.src)}')">
  <span class="idt-photo" style="left:${ph[0]}%;top:${ph[1]}%;width:${ph[2]}%;height:${ph[3]}%">${photo}</span>
  ${f('surname',v.surname)}${f('names',v.names)}${f('doc',v.doc)}${f('sex',v.sex)}${f('birth',v.birth)}${f('nat',v.nat)}${f('place',v.place)}${f('civil',v.civil)}${f('issued',v.issued)}${f('expires',v.expires)}${f('run',v.run)}
  ${sg?`<span class="idt-sign" style="left:${sg[0]}%;top:${sg[1]}%;width:${sg[2]}%;height:${sg[3]}%">${identitySignatureSvg(p)}</span>`:''}
 </div>`;
}
function idHtml(p){
 if(p.kind==='rufus')return rufusCardHtml(true);
 if(p.noDocument)return '<div class="notice warning">Este paciente no porta un documento de identidad.</div>';
 if(p.kind==='tuguelFake')return `<div class="mclovin-fake-id draggable" data-drag="id" title="Documento presentado por Tuguel"><div class="mclovin-identity-photo">${subjectPortrait(p,'id')}</div><div class="mclovin-fields"><div class="mclovin-head"><b>HAWAII</b><span>DRIVER<br>LICENSE</span></div><div class="mclovin-number">NUMBER &nbsp;${escapeText(p.rut)}</div><div class="mclovin-rainbow"><p>NAME &nbsp;<b>TUGUEL PAGABA</b></p><p>DOB &nbsp;<b>${escapeText(p.birthDate)}</b> &nbsp; EXP &nbsp;<b>${escapeText(p.idExpires)}</b></p><p>SEX M &nbsp; EYES BRO &nbsp; HAIR BRO</p></div><p>ISSUED ${escapeText(p.idIssued)}</p><div class="mclovin-signature">T. Pagaba</div></div></div>`;
 assignPatientModel(p);
 const parts=p.name.trim().split(/\s+/);
 const names=p.kind==='specialCarlos'?'Carlos':p.firstNames|| (parts.length>1?parts.slice(0,-1).join(' '):parts[0]);
 const lastname=p.kind==='specialCarlos'?'Neira Ibacache':p.surnames||(parts.length>1?parts[parts.length-1]:'—');
 const dates=fictionalIdDates(p);
 const correctPhoto=p.kind==='specialCarlos'||p.idPortraitModel===p.portraitModel;
 const docTypes={
  CL:['CÉDULA DE','IDENTIDAD','REPÚBLICA DE CHILE','SERVICIO DE REGISTRO CIVIL E IDENTIFICACIÓN','RUN'],
  VE:['CÉDULA DE','IDENTIDAD','REPÚBLICA BOLIVARIANA DE VENEZUELA','IDENTIFICACIÓN NACIONAL','N.º'],
  HT:['CARTE','IDENTITÉ','RÉPUBLIQUE D’HAÏTI','DOCUMENT D’IDENTIFICATION','N.º'],
  AR:['DOCUMENTO','NACIONAL','REPÚBLICA ARGENTINA','DOCUMENTO NACIONAL DE IDENTIDAD','DNI'],
  PE:['DOCUMENTO','NACIONAL','REPÚBLICA DEL PERÚ','REGISTRO NACIONAL DE IDENTIFICACIÓN','DNI'],
  CN:['居民身份证','身份证','中华人民共和国','IDENTIFICACIÓN CIUDADANA','N.º'],
  IT:['CARTA','D’IDENTITÀ','REPUBBLICA ITALIANA','MINISTERO DELL’INTERNO','N.º'],
  DE:['PERSONAL','AUSWEIS','BUNDESREPUBLIK DEUTSCHLAND','PERSONALAUSWEIS','N.º']
 };
 const code=docTypes[p.nationalityCode]||ID_TEMPLATES[p.nationalityCode]?p.nationalityCode:'CL';
 if(ID_TEMPLATES[code]){
  const seed=(Number(p.portraitSeed)||0)>>>0,places=ID_BIRTHPLACES[code];
  return idTemplateHtml(p,code,{surname:lastname.toUpperCase(),names:names.toUpperCase(),doc:p.documentNumber,sex:p.idSex||'—',birth:dates.birth,nat:countryLabel(p),place:places?places[seed%places.length]:'',civil:idCivilStatus(p,dates),issued:dates.issued,expires:dates.expires,run:p.rut});
 }
 const cardFields=docTypes[code];
 return `<div class="chile-id-card idcard id-country-${code.toLowerCase()} draggable ${documentWearClass(p,'id')}" data-drag="id" title="Arrastra la cédula; doble clic para inspeccionar" aria-label="Cédula del paciente">
    <div class="chile-id-watermark">★</div>
    <div class="chile-id-head"><div class="chile-id-kind">${cardFields[0]}<br>${cardFields[1]}</div>${code==='CL'?'<span class="chile-flag"><i></i><i></i><i></i></span>':`<span class="country-insignia">${code}</span>`}<div class="chile-id-country">${cardFields[2]}<small>${cardFields[3]}</small></div></div>
    <div class="chile-id-main"><div class="chile-id-photo">${idPhotoFit(subjectPortrait(p,'id'))}</div>
    <div class="chile-id-fields"><label>APELLIDOS</label><b>${escapeText(lastname.toUpperCase())}</b><label>NOMBRES</label><b>${escapeText(names.toUpperCase())}</b>
    <div class="chile-id-duo"><div><label>NACIONALIDAD</label><span>${escapeText(countryLabel(p))}</span></div><div><label>SEXO</label><span>${escapeText(p.idSex||'—')}</span></div></div>
    <div class="chile-id-duo"><div><label>FECHA DE NACIMIENTO</label><span>${dates.birth}</span></div><div><label>N.º DOCUMENTO</label><span>${escapeText(p.documentNumber)}</span></div></div>
    <div class="chile-id-duo"><div><label>FECHA DE EMISIÓN</label><span>${dates.issued}</span></div><div><label>FECHA DE VENCIMIENTO</label><span>${dates.expires}</span></div></div></div>
    <div class="chile-id-mini" aria-label="Fotografía secundaria de seguridad, misma identidad que la fotografía principal">
      <div class="chile-id-mini-photo">${idPhotoFit(subjectPortrait(p,'id'))}</div>
      <span class="chile-id-mini-run">${escapeText(code==='CL'?p.rut:p.documentNumber)}</span>
    </div></div>
    <div class="chile-id-foot"><strong>${cardFields[4]} ${escapeText(code==='CL'?p.rut:p.documentNumber)}</strong><span class="chile-id-sign">${identitySignatureSvg(p)}</span></div>
   </div>`;
}

function canShowPatientId(p){return !p.noDocument&&(p.gaveId||game.idRequested)}
function eRxHtml(p){return `<div class="e-card draggable" data-drag="erx"><h3>▦ RECETA ELECTRÓNICA</h3><div class="eqr"></div><p class="center small">${escapeText(rxPatientName(p))} · RUT: ${prescriptionPatientId(p)}</p></div>`}
function counterHtml(){const p=game.patients[game.patientIndex];if(!p)return '';if(p.kind==='donVictor')return donVictorHtml(p);if(p.kind==='bribe')return bribeHtml(p);if(p.kind==='clubNocturno')return clubEncounterHtml(p);if(p.kind==='tarotera'||p.kind==='abuelo')return tarotEncounterHtml(p);if(isPaperEvent(p))return paperEncounterHtml(p);
 return `${stage('pharmacy',`ATENCIÓN DE PACIENTES · ${game.patientIndex+1}/${game.patients.length}`,`FILA: ${game.patients.length-game.patientIndex-1} · DÍA ${game.day}`,p.quote)}<div class="desk"><nav class="touch-document-tools" aria-label="Documentos del paciente">${btn('Ampliar y comparar','inspect','cream')}${!canShowPatientId(p)&&!game.idRequested&&!p.done?btn('Solicitar cédula','request-id','cream'):''}</nav><div class="desk-columns"><aside class="paper manual"><h3>▤ PROTOCOLOS</h3><p class="mini">Reglas de atención · Manual del juego</p>${btn('VER CATÁLOGO COMPLETO','catalog','cream')}<hr>${Object.entries(DRUGS).slice(0,8).map(([id,d])=>`<div class="ledger-row"><b>${escapeText(drugName(id))}</b><br><span class="mini">${d.kind==='SIMPLE'?'Receta simple':d.kind==='RETENIDA'||d.kind==='RETENIDA_COMUN'?'Receta retenida':'Receta cheque'} · ${d.pack}</span></div>`).join('')}</aside><div class="vstack">${prescriptionHtml(p)}${p.rxType==='ELECTRÓNICA'?eRxHtml(p):''}${p.kind==='chinese'||p.kind==='giftPaper'?`<div class="paper"><h3>PAPEL ENTREGADO</h3><p>${escapeText(p.note||'Papel ilegible')}</p><p class="mini">No corresponde a receta ni documento válido.</p></div>`:''}</div><div class="vstack panel-right"><div class="dark-card"><h3>IDENTIFICACIÓN</h3>${canShowPatientId(p)?idHtml(p):p.noDocument&&game.idRequested?'<p class="warning"><b>NO PORTA DOCUMENTO DE IDENTIDAD</b></p><p>Lo solicitaste, pero el paciente confirma que no lo trae.</p><p class="mini">Corresponde devolver la receta, sin denunciar automáticamente.</p>':`<p>${p.noDocument?'El paciente no tiene identificación consigo.':'El paciente aún no entregó cédula.'}</p><p class="mini">Solicita la identificación antes de tomar una decisión.</p>${btn('SOLICITAR CÉDULA','request-id','cream')}`}</div><div class="dark-card"><h3>FICHA DE IDENTIFICACIÓN</h3><p class="mini">Sexo registral confirmado en la ficha: <b>${escapeText(p.confirmedIdSex||'—')}</b></p><p class="tiny">Compáralo con el dato de la cédula. No se determina por apariencia.</p>${btn('▦ VER CALENDARIO','calendar','cream')}</div><div class="dark-card"><h3>STOCK DE LA FARMACIA</h3><p>${DRUGS[p.drug]?escapeText(drugName(p.drug)):'Sin medicamento válido'}</p><div class="stock-big">${DRUGS[p.drug]?.stockControl?game.stock[p.drug]+' cajas disponibles':'Sin control de stock en esta modalidad'}</div><p class="mini">Documento presentado: ${p.rxType==='CHEQUE'?'Cheque':p.rxType==='ELECTRÓNICA'?'Electrónica':'Blanca'}</p>${p.rxType==='ELECTRÓNICA'&&!p.qrValidation?btn('VALIDAR CÓDIGO','verify-qr','blue',p.done?'disabled':''):p.rxType==='ELECTRÓNICA'&&p.qrValidation==='valid'?'<p class="good">✓ Código validado</p>':electronicValidationFailed(p)?`<div class="notice warning" role="status"><b>RECETA ELECTRÓNICA NO VÁLIDA</b><p>${escapeText(p.qrFraudReason)}</p><p>Receta falsa. Decide cómo proceder en «Notificar o retener».</p></div>`:p.rxType==='ELECTRÓNICA'&&p.qrValidation==='expired'?`<div class="notice warn" role="status"><b>✕ CÓDIGO RECHAZADO · RECETA VENCIDA</b><p>${escapeText(p.qrExpiredNote||'La receta electrónica está vencida.')} No es una falsificación: devuélvela con el motivo «Receta vencida».</p></div>`:p.rxType==='ELECTRÓNICA'&&p.qrValidation==='invalid'?'<p class="warning">✕ Validación fallida: receta electrónica falsa.</p>':p.rxType==='ELECTRÓNICA'&&p.qrValidation==='dispensed'?btn('▣ RECETA DESPACHADA','show-used-qr','red'):''}</div><div class="notice desktop-document-tip">Doble clic sobre una receta o cédula para ampliar y comparar. También puedes arrastrarlas.</div></div></div>${game.patientResult?resultHtml():''}</div>${game.patientResult?actionbar([['SIGUIENTE CLIENTE →','next-patient','green']]):actionbar([['✓ DISPENSAR','dispense','green'],['↶ DEVOLVER','return','amber'],['⌕ VERIFICAR','inspect','cream'],['⚠ NOTIFICAR O RETENER','notify','red']])}`
}
function resultHtml(){if(game.tutorial)return `<div class="notice ok" role="status">${escapeText(PRACTICE_CASES[game.patientIndex][2])}</div>`;const r=game.patientResult;const dateIssue=!isPaperEvent(r.p)?idDocumentCheck(r.p):{status:'valid'};const reason=r.decision==='return'&&r.correct?(foreignPrescriptionIssue(r.p)|| (r.p.qrValidation==='invalid'?'Se devuelve por código electrónico inválido.':r.p.qrValidation==='dispensed'?(r.p.qrDisposition==='destroy'?'Código electrónico ya despachado: se destruyó la copia presentada. No habrá nuevas visitas por este folio.':'Código electrónico ya despachado: se devuelve la copia al paciente, que podría regresar con el mismo folio.'):r.p.noDocument?'Se devuelve porque el paciente no porta un documento de identidad. No corresponde denuncia policial.':dateIssue.status==='expired'?'Se devuelve porque la cédula está vencida.':dateIssue.status==='future'?'Se devuelve por fecha de emisión futura en la cédula.':sexFieldMismatch(r.p)?'Se devuelve para aclarar la discrepancia entre los datos registrales de la ficha y la cédula.':r.p.kind==='typo'?'Se devuelve por un dígito incorrecto en el RUT.':r.p.kind==='different'?'Se devuelve por discrepancia importante de RUT.':['wrongtype','wrongtypeRepeat'].includes(r.p.kind)?'Se devuelve porque la condición de venta exige receta cheque y no receta blanca.':r.p.kind==='underage'?'Se devuelve por requisito de edad: no se entregan controlados a menores.':r.p.kind==='expired'?'Se devuelve porque la receta se emitió fuera del plazo aceptado en el caso.':r.p.kind==='fakeDoctor'?'Se devuelve porque no fue posible verificar al prescriptor.':r.p.kind==='double'?'Se devuelve por receta ya utilizada.':r.p.kind==='tuguelExpired'?'Se devuelve porque la cédula de identidad está vencida. No corresponde notificar a la policía.':r.p.kind==='fakeid'?'Se devuelve por discrepancia de fotografía.':'Se devuelve para aclaración documental.')):'';const retentionReason=r.decision==='retain'&&r.correct?('Se retiene por indicios documentales que requieren verificación sanitaria.') : '';const resultTone=r.decision==='dispense'?'':r.correct?'ok':'';if(r.decision==='dispense'&&!r.idNotice&&!r.noStock&&!r.gift)return '';return `<div class="notice ${resultTone}"><b>${r.decision==='dispense'?(r.noStock?'INTENTO DE DESPACHO REGISTRADO':'DISPENSACIÓN REGISTRADA'):r.decision==='return'?'RECETA DEVUELTA':r.decision==='police'?'AVISO A POLICÍA':r.decision==='seremi'?'RECETA NOTIFICADA A SEREMI':r.decision==='keep-paper'?'PAPEL GUARDADO':'RECETA RETENIDA'}</b><p>${r.decision==='dispense'?(r.noStock?'Faltan unidades en el inventario y no se hizo una entrega.':'La dispensación quedó registrada.'):'La atención quedó registrada. Revisa el motivo documental indicado cuando corresponda.'}</p>${r.returnReason?`<p class="${r.correct?'good':'warning'}"><b>Motivo registrado:</b> ${escapeText(returnReasonLabel(r.returnReason))}. ${r.correct?'Motivo válido.':'El motivo elegido no justifica la devolución en este caso.'}</p>`:reason?`<p class="good"><b>${escapeText(reason)}</b></p>`:''}${r.retainedWithoutNotice?'<p class="good">La receta queda en la farmacia. El paciente se retira y la atención continúa.</p>':retentionReason?`<p class="good"><b>${escapeText(retentionReason)}</b></p>`:''}${r.notificationReason?`<p class="good">${escapeText(r.notificationReason)} · notificación registrada.</p>`:''}${r.idNotice?'<p class="warning">Advertencia de fiscalizador encubierto por no solicitar cédula. Sin multa ni infracción.</p>':''}${r.gift?`<p class="good">El paciente dejó un obsequio: <b>${escapeText(r.gift)}</b>.</p>`:''}${r.decision==='dispense'&&!r.noStock&&DRUGS[r.p.drug]?`<p>${DRUGS[r.p.drug].book||DRUGS[r.p.drug].exclusive?'Stock actualizado: '+drugName(r.p.drug)+' · '+game.stock[r.p.drug]+' cajas.':DRUGS[r.p.drug].kind==='RETENIDA_COMUN'?'Receta archivada.':''}</p>`:''}</div>`}
function donVictorHtml(p){
 const result=game.patientResult;
 const giveLabel=`<img class="donation-coin" src="${assetUrl('assets/gifts/moneda-100.png')}" alt="" width="32" height="32">Darle 100 pesos`;
 const content=result
  ? `<p role="status">${escapeText(result.message)}</p>${btn('Siguiente paciente','next-patient','green')}`
  : `<div class="btn-row">${btn(giveLabel,'give-don-victor','green donation-button',game.cash<VICTOR_DONATION?'disabled title="Necesitas $100"':'')}${btn('No darle 100 pesos','decline-don-victor','cream')}</div>`;
 return `${stage('pharmacy','DON VICTOR',`DÍA ${game.day}`,result?'':p.quote)}<section class="content"><div class="paper don-victor-visit">${content}</div></section>`;
}
function clubEncounterHtml(p){
 const card=assetUrl('assets/gifts/club-nocturno-especial.png');
 const egg=assetUrl('assets/gifts/huevo-corona-simple.png');
 return `${stage('pharmacy','VISITA INESPERADA · CLUB NOCTURNO',`DÍA ${game.day} · Sin receta`,p.quote)}<section class="content"><div class="content-grid special-paper-grid"><div class="paper special-club-card"><h2>UNA TARJETA INESPERADA</h2><div class="special-paper-art"><img src="${card}" alt="Tarjeta del club nocturno con la Tía Turbina" draggable="false"></div><p>El visitante deja una tarjeta sobre el mesón. No solicita medicamentos ni presenta receta.</p><p class="mini">Puedes conservarla en el inventario de regalos o devolverla.</p></div><div class="dark-card special-club-id"><h2>IDENTIFICACIÓN</h2>${game.idRequested?`<div class="special-paper-art egg-art"><img src="${egg}" alt="Huevo común con una corona pequeña tallada" draggable="false"></div><p>En lugar de un carnet, presenta un huevo con una corona grabada.</p><p class="small muted">No es un documento de identidad.</p>`:`<p>No presentó documento de identidad.</p><p>Si quieres comprobar quién es, puedes pedírselo.</p>${btn('SOLICITAR IDENTIFICACIÓN','request-id','cream')}`}</div></div>${game.patientResult?resultHtml():''}</section>${game.patientResult?actionbar([['SIGUIENTE CLIENTE →','next-patient','green']]):actionbar([['DEVOLVER TARJETA','return','amber'],['GUARDAR EN REGALOS','keep-paper','green']])}`;
}
function tarotEncounterHtml(p){
 const sweet=p.kind==='abuelo';
 const card=assetUrl(sweet?'assets/gifts/bagoncito-grande.png':'assets/gifts/carta-tarot-grande.png');
 return `${stage('pharmacy','VISITA INESPERADA · UN REGALO',`DÍA ${game.day} · Sin receta`,p.quote)}<section class="content"><div class="content-grid special-paper-grid"><div class="paper special-club-card"><h2>${sweet?'UN DULCE PARA EL ÁNIMO':'UNA CARTA DE TAROT'}</h2><div class="special-paper-art"><img src="${card}" alt="${sweet?'Chocolate Bagoncito de Funa':'Carta de tarot «The Brain»'}" draggable="false"></div><p>${sweet?'El visitante deja un chocolate sobre el mesón. No solicita medicamentos ni presenta receta.':'La visitante deja una carta sobre el mesón. No solicita medicamentos ni presenta receta.'}</p><p class="mini">Puedes aceptarlo como obsequio o devolverlo.</p></div><div class="dark-card"><h2>UNA VISITA EXTRAÑA</h2><p>${sweet?'No tiene utilidad sanitaria. Es un dulce que puedes comer tú o llevarle a Carlitos; también se puede vender.':'No tiene ninguna utilidad sanitaria. Aceptarla la añade a «Regalos de pacientes» y se puede vender.'}</p></div></div>${game.patientResult?resultHtml():''}</section>${game.patientResult?actionbar([['SIGUIENTE CLIENTE →','next-patient','green']]):actionbar([['DEVOLVER','return','amber'],['ACEPTAR REGALO','keep-paper','green']])}`;
}
function paperEncounterHtml(p){return `${stage('pharmacy','VISITA INESPERADA',`DÍA ${game.day} · Sin receta`,p.quote)}<section class="content"><div class="content-grid"><div class="paper paper-special"><div class="eyebrow">PAPEL ENTREGADO · NO ES RECETA</div><h2>${p.kind==='chinese'?'纸条':'Tarjeta sin identificación'}</h2><div class="foreign-symbols">${p.kind==='chinese'?'有时候，只有翻译才能理解一些事情。':'CUPÓN PROMOCIONAL · CLUB DE ADULTOS'}</div><p class="mini">No contiene un medicamento, una dosis ni datos de prescriptor.</p></div><div class="dark-card"><h2>UNA VISITA EXTRAÑA</h2><p>${p.kind==='chinese'?'El visitante solo habla chino. No hay intérprete ni documentación médica. Puedes devolver el papel o guardarlo como recuerdo.':'Un desconocido entra para dejarte una tarjeta que no solicitaste. No tiene ninguna utilidad sanitaria.'}</p><p class="small muted">Guardar el papel lo añade a «Regalos de pacientes», no al libro de control.</p>${p.kind==='chinese'?(game.idRequested?`<div class="special-paper-art wood-art"><img src="${assetUrl('assets/patients/nomeh_document.webp')}" alt="Tablilla china tallada con la cara de No-Meh Wei"></div>`:btn('SOLICITAR IDENTIFICACIÓN','request-id','cream')):''}${p.kind==='chinese'?btn('TRADUCIR PAPEL','translate-paper','amber'):''}</div></div>${game.patientResult?resultHtml():''}</section>${game.patientResult?actionbar([['SIGUIENTE CLIENTE →','next-patient','green']]):actionbar([['DEVOLVER PAPEL','return','amber'],['GUARDAR EN REGALOS','keep-paper','cream']])}`}
function bribeHtml(p){let has=game.hidden.clonazepam2||0;return `${stage('pharmacy','EVENTO ESPECIAL · OFERTA CLANDESTINA','Cliente sin receta',p.quote)}<section class="content"><div class="content-grid"><div class="paper"><h2>UNA OFERTA EXTRAÑA</h2><p>El cliente solicita <b>clonazepam 2 mg</b> sin receta y ofrece <b>$50.000</b>.</p><p>La farmacia conserva <b>${has} caja(s)</b> sobrantes de un pedido sin regularizar.</p><p class="mini">Esta situación es ficticia. La dispensación sin receta no está autorizada.</p></div><div class="dark-card"><h2>DECISIÓN ÉTICA</h2><p>Rechazar mantiene tu integridad. Aceptar puede generar dinero, pérdida de registros, una investigación o consecuencias narrativas muy graves.</p><p class="small warning">Probabilidad secreta: 3% de fiscalizador encubierto entre encuentros clandestinos elegibles.</p></div></div>${game.patientResult?`<div class="notice ${game.gameOver?'warn':'ok'}">${escapeText(game.patientResult.message)}</div>`:''}</section>${game.gameOver?actionbar([['REINICIAR PARTIDA','new','red']]):game.patientResult?actionbar([['SIGUIENTE PACIENTE','next-patient','green']]):actionbar([['RECHAZAR LA OFERTA','reject-bribe','green'],['⚠ NOTIFICAR','notify','amber'],['ACEPTAR $50.000','accept-bribe','red']])}`}
function folioAlertsHtml(){
 const alerts=game.notifications.filter(n=>n.day<=game.day&&(n.key==='stolen-3472'||n.folioAlert));
 return `<h3>FOLIOS NO VÁLIDOS · AVISOS</h3>${alerts.length
  ? `<ul>${alerts.map(n=>`<li>${escapeText(n.key==='stolen-3472'?STOLEN_FOLIO_ALERT:n.body)}</li>`).join('')}</ul>`
  : '<p class="small">Todavía no hay avisos de folios no válidos.</p>'}`;
}
function sisResultHtml(p){
 const {status,registered,identityMatches}=sisPrescriptionStatus(p);
 const copy={
  match:registered?.canPrescribe===false
   ?p.claimedTitle===registered.title
    ?['⚠ PROFESIONAL NO HABILITADO PARA PRESCRIBIR',`El título coincide con el SIS. En este caso, ${escapeText(prescriberNameOnPrescription(p))} no está habilitado para emitir esta receta. En «Notificar o retener», elige «Ejercicio ilegal de la profesión médica».`]
    :['⚠ TÍTULO DECLARADO NO COINCIDE',`La receta dice «Médico Cirujano». El SIS registra a ${escapeText(prescriberNameOnPrescription(p))} como Tecnólogo Médico. En «Notificar o retener», elige «Ejercicio ilegal de la profesión médica».`]
   :['✓ PROFESIONAL REGISTRADO','El nombre y el RUT coinciden. Puedes cotejar el título y la firma de referencia.'],
  'signature-mismatch':['⚠ FIRMA NO COINCIDE · RECETA FALSA',
   (identityMatches?'El nombre y el RUT coinciden con el registro. ':'')+
   'La firma de la receta es distinta de la firma registrada. En «Notificar o retener», elige «Avisar a SEREMI» por receta presuntamente falsificada.'],
  typo:['⚠ RUT DEL PRESCRIPTOR MAL ESCRITO','El prescriptor existe en el registro. El RUT de la receta tiene un carácter errado. '+(p.rxType==='ELECTRÓNICA'
   ?'Comprueba la discrepancia en el verificador de recetas electrónicas.'
   :'Devuelve la receta y solicita que se emita nuevamente con el RUT correcto.')],
  unknown:['⚠ SIN COINCIDENCIA EN EL REGISTRO · RECETA FALSA','El prescriptor indicado no existe en el registro del juego. Notifica a SEREMI por falsificación de receta.'],
  mismatch:['⚠ NOMBRE Y RUT NO COINCIDEN · RECETA FALSA','El RUT de la receta no corresponde al profesional indicado. Notifica a SEREMI por falsificación de receta.'],
  incomplete:['⚠ DATOS DEL PRESCRIPTOR INCOMPLETOS','Falta un dato necesario para verificar al profesional. '+(p.rxType==='ELECTRÓNICA'
   ?'Consulta el verificador de recetas electrónicas.'
   :'Devuelve la receta y solicita que se emita con los datos completos.')]
 };
 const [title,explanation]=copy[status];
 const stolen=isStolenPrescription(p);
 const stolenNotice=stolen?`<div class="notice warn" role="status"><b>⚠ FOLIO ROBADO · RECETA FALSA</b><p>El folio ${escapeText(p.folio)} pertenece al talonario denunciado como robado. En «Notificar o retener», elige «Avisar a SEREMI» por receta presuntamente falsificada.</p>${status==='typo'?'<p>El RUT del prescriptor también tiene un carácter errado.</p>':''}</div>`:'';
 const showResult=!stolen||status==='signature-mismatch'||status==='mismatch'||status==='unknown';
 const reference=registered?`<div class="form-line"><label>RUT registrado en SIS</label><div class="field static-field">${escapeText(registered.rut)}</div></div><div class="form-line"><label>Título acreditado</label><div class="field static-field">${escapeText(registered.title)}</div></div><div class="form-line"><label>Firma registrada</label><div class="field static-field ink-sign">${SIGNATURE_IDS[p.prescriber]===undefined?`<span class="ink-sign">${escapeText(registered.signature)}</span>`:signatureArtwork(p.prescriber,false)}</div></div>`:'';
 const presentedSignature=status==='signature-mismatch'?`<div class="form-line"><label>Firma en la receta</label><div class="field static-field ink-sign">${prescriptionSignatureArtwork(p)}</div></div>`:'';
 return `${stolenNotice}${showResult?`<div class="notice ${status==='match'&&registered?.canPrescribe!==false?'ok':'warn'}" role="status"><b>${title}</b><p>${explanation}</p></div>`:''}${reference}${presentedSignature}`;
}
function prescriptionErrorForCall(p){
 return unauthorizedPrescriberCase(p)||isStolenPrescription(p)||prescriptionFieldReturnReasons(p).length>0||prescriberIdentityIsFalse(lookupPrescriber(p).status)||
  !validPrescriptionSignature(p)||['invalid','fraud'].includes(p.qrValidation);
}
function prescriptionCallResultHtml(p){
 if(!p.callStatus)return '';
 if(p.callStatus==='unanswered')return '<p class="small warning" role="status">No hubo respuesta. Revisa los documentos y los avisos.</p>';
 const responder=p.callResponder==='secretary'?'La secretaria':'El médico';
 if(p.callRejected&&unauthorizedPrescriberCase(p)){
  const finding=p.kind==='podiatristRx'?'La emisora es podóloga y no está habilitada para indicar este antibiótico.':declaresTechnologistTitle(p)?'El emisor es tecnólogo médico y no está habilitado para prescribir en este caso.':'El título declarado en la receta no coincide con el del emisor.';
  return `<p class="small warning" role="status">${finding} En «Notificar o retener», elige «Ejercicio ilegal de la profesión médica».</p>`;
 }
 const result=p.callRejected
  ? `${p.prescriberRegistered===false?'La secretaria no reconoce al prescriptor ni la receta.':responder+' confirma la identidad del prescriptor, pero desconoce la receta.'} Receta falsa confirmada. Avisa a SEREMI por receta presuntamente falsificada.`
  : `${responder} confirma la identidad del prescriptor y reconoce la receta.`;
 return `<p class="small ${p.callRejected?'warning':'good'}" role="status">${result}</p>`;
}
function callPrescriptionOffice(p){
 if(!p||p.done||!p.folio||!p.prescriber||isPaperEvent(p)||p.qrValidation==='dispensed'){toast('No hay una receta activa para consultar.');return}
 if(p.callStatus)return;
 if(unauthorizedPrescriberCase(p)){toast('Quien firma no es médico: no corresponde llamar a consulta.');return}
 const roll=Math.random();
 const responder=roll<0.15&&p.prescriberRegistered!==false?'doctor':roll>=0.15&&roll<0.25?'secretary':null;
 p.callStatus=responder?'answered':'unanswered';
 p.callResponder=responder;
 p.callAttempts=1;
 p.callRejected=Boolean(responder&&p.kind!=='chemy'&&p.kind!=='minorGuardian'&&(prescriptionErrorForCall(p)||Math.random()<0.20));
 game.patientVerified=Boolean(responder);p.doctorVerified=responder==='doctor';
 record(!responder?`Llamada sin respuesta · folio ${p.folio}.`:
  `${responder==='secretary'?'La secretaria':'El médico'} ${p.callRejected?'desconoció':'reconoció'} la receta · folio ${p.folio}.`);
 save();render();
}
function compareDocumentsHtml(p){
 const showId=canShowPatientId(p);
 const foreign=p.nationalityCode&&p.nationalityCode!=='CL';
 const dates=showId&&p.kind!=='rufus'?fictionalIdDates(p):null;
 return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="compare-title"><div class="modal compare-documents">
  <div class="section-head"><h2 id="compare-title">COMPARAR DOCUMENTOS</h2>${btn('Cerrar','close-modal','cream')}</div>
  <div class="compare-columns">
   <section class="paper"><h3>Receta</h3><dl>
    <dt>Paciente</dt><dd>${escapeText(rxPatientName(p))}</dd>
    <dt>${foreign?'DNI o RUT indicado':'RUT'}</dt><dd>${prescriptionPatientId(p)||'—'}</dd>
    <dt>Fecha de emisión</dt><dd>${escapeText(p.rxDate)}</dd>
    <dt>Folio</dt><dd>${escapeText(p.folio)}</dd>
    <dt>Prescriptor</dt><dd>${escapeText(p.prescriber)}</dd>
    <dt>RUT del prescriptor</dt><dd>${escapeText(p.prescriberRut||'—')}</dd>
   </dl></section>
   <section class="paper"><h3>Identificación</h3>${showId&&p.kind==='rufus'?rufusCardHtml():showId?`<dl>
    <dt>Titular</dt><dd>${escapeText(p.name)}</dd>
    <dt>${foreign?'DNI':'RUT'}</dt><dd>${escapeText(foreign?p.documentNumber:p.rut)}</dd>
    <dt>Fecha de emisión</dt><dd>${escapeText(dates.issued)}</dd>
    <dt>Vencimiento</dt><dd>${escapeText(dates.expires)}</dd>
    <dt>Nacimiento</dt><dd>${escapeText(dates.birth)}</dd>
    <dt>Sexo en cédula / ficha</dt><dd>${escapeText(p.idSex||'—')} / ${escapeText(p.confirmedIdSex||'—')}</dd>
   </dl>`:`<p>${p.noDocument?'El paciente no porta identificación.':'Solicita la identificación en el mesón.'}</p>`}</section>
  </div></div></div>`;
}
function inspectHtml(){const p=game.patients[game.patientIndex];
 return `${stage('pharmacy','MODO INSPECCIÓN','Comparación libre de documentos',p.quote)}<section class="content" id="document-review"><div class="section-head"><h2>INVESTIGACIÓN DOCUMENTAL</h2><span class="keytip">ESC = VOLVER · DOBLE CLIC EN UN DOCUMENTO</span></div><div class="chips"><span class="chip">Aumento: <b>${ui.inspectZoom}%</b></span>${btn('− ZOOM','zoom-out','dark')}${btn('+ ZOOM','zoom-in','dark')}${btn('▧ VERIFICAR IDENTIDAD','verify-identity','blue',!canShowPatientId(p)?'disabled':'')}${btn('▦ CALENDARIO','calendar','cream')}</div><div class="inspect-area"><div class="inspect-doc"><div style="zoom:${ui.inspectZoom/100}">${prescriptionHtml(p)}</div></div><div class="vstack"><div class="dark-card"><h3>CÉDULA / ARCHIVO</h3>${canShowPatientId(p)?idHtml(p):p.noDocument?'<p class="warning">Paciente sin DNI. No es posible verificar su identidad; corresponde devolver la receta.</p>':'<p>Falta cédula. Regresa al mesón para solicitarla.</p>'}<hr>${folioAlertsHtml()}</div><div class="dark-card"><h3>VERIFICACIONES</h3>${btn('COMPARAR DOCUMENTOS','compare','cream')}<p class="small">${game.patientVerified?'✓ Consulta al prescriptor realizada.':'Aún no se ha contactado al prescriptor.'}</p>${btn(p.identityScan?'▧ RESULTADO DE HUELLA':'▧ VERIFICAR IDENTIDAD','verify-identity','blue',!canShowPatientId(p)?'disabled':'')}
 <p class="tiny muted">Comparación de huella y cédula. Los cambios de cabello, edad y vestimenta no alteran la identidad.</p>
 ${p.identityScan?`<div class="fingerprint-mini ${p.identityScan==='match'?'matched':'unmatched'}">${p.identityScan==='match'?'● HUELLA COINCIDENTE':'● HUELLA NO COINCIDENTE'}</div>`:''}
 ${sisAvailable()?btn('▣ ABRIR REGISTRO SIS','sis','green'):''}<p class="tiny muted">Respuestas por llamada: médico 15 % si está registrado o secretaria 10 %. Un intento por atención. No se llama si quien firma no es médico (tecnólogo médico, podólogo).</p>${btn(unauthorizedPrescriberCase(p)?'☎ NO SE LLAMA · NO ES MÉDICO':p.callStatus?'☎ LLAMADA REALIZADA':'☎ LLAMAR AL MÉDICO','call-doctor','blue',p.callStatus||unauthorizedPrescriberCase(p)?'disabled':'')}${prescriptionCallResultHtml(p)}</div></div></div></section>${actionbar([['← VOLVER AL MESÓN','back-counter','cream'],['⚠ NOTIFICAR O RETENER','notify','red'],['? MANUAL','manual','dark']])}`}
function medicineCartonSvg(drugId,number,{damaged=false,wrong=false,laboratory='Tulab'}={}){
 const drug=DRUGS[drugId]||DRUGS.clonazepam2;
 const name=drug.name.toUpperCase();
 const strength=drug.mg;
 const isChicle=laboratory==='Chicle';
 const template=assetUrl(isChicle?'assets/cartons/chicle_blank.webp':'assets/cartons/tulab_blank.webp');
 const words=name.split(/\s+/);
 let a=name,b='';
 if(name.length>17&&words.length>1){
  const midway=Math.max(1,Math.ceil(words.length/2));
  a=words.slice(0,midway).join(' ');b=words.slice(midway).join(' ');
 }
 const font=a.length>20?22:a.length>16?26:a.length>12?33:a.length>8?37:43;
 const fill=isChicle?'#f7f8ff':'#153d7e';
 const shadow=isChicle?'#142a6b':'#fef4e4';
 const mgFont=String(strength).length>10?26:36;
 const y1=b?118:138;
 const y2=b?151:138;
 const mgY=b?185:186;
 const pack=escapeText((drug.pack||'30 comprimidos').slice(0,24));
 return `<svg class="carton-svg ${isChicle?'chicle-carton':'tulab-carton'}" viewBox="0 0 600 300" role="img" aria-label="Caja ${isChicle?'Laboratorio Chicle':'Tulab'} ${escapeText(name)} ${escapeText(strength)}">
  <image href="${template}" x="0" y="0" width="600" height="300" preserveAspectRatio="none"/>
  <g font-family="Arial,Helvetica,sans-serif" font-weight="900" fill="${fill}" stroke="${shadow}" paint-order="stroke fill" stroke-width="1">
  <text x="116" y="${y1}" font-size="${font}" letter-spacing="-.6" textLength="${Math.min(280,a.length*font*.58)}" lengthAdjust="spacingAndGlyphs">${escapeText(a)}</text>
  ${b?`<text x="116" y="${y2}" font-size="${Math.min(27,font)}" textLength="${Math.min(275,b.length*15)}" lengthAdjust="spacingAndGlyphs">${escapeText(b)}</text>`:''}
  <text x="118" y="${mgY}" font-size="${mgFont}">${escapeText(strength)}</text>
  </g>
  <text x="140" y="228" fill="${fill}" font-size="22" font-weight="700" font-family="Arial,sans-serif">${pack}</text>
  <circle cx="116" cy="220" r="15" fill="none" stroke="${fill}" stroke-width="3"/><path d="M105 230 L126 209" stroke="${fill}" stroke-width="3"/>
  <text x="51" y="203" transform="rotate(-90 51 203)" text-anchor="middle" fill="${isChicle?'#f5f8fe':'#f8e5d1'}" font-size="15" font-weight="800" font-family="Arial,sans-serif">${escapeText(name.slice(0,22))}</text>
  ${damaged?'<path d="M320 83 L315 111 L340 132 L327 168 L351 198" fill="none" stroke="#80282d" stroke-width="5" stroke-linecap="square"/>':''}
 </svg>`;
}
function receiveHtml(){if(!game.delivery)game.delivery=makeDelivery();const d=game.delivery,plan=receivePlan(d);if(!Array.isArray(d.packItems)||d.packItems.length!==d.actual)d.packItems=buildDeliveryPackItems(d);let shown=game.boxOpened;
 let cards=shown?Array.from({length:Math.min(8,d.actual)},(_,i)=>{const item=d.packItems[i]||{drug:d.drug,laboratory:pickAltLaboratory(i),damaged:false};return `<button class="medicine-box-visual ${game.inspectedPacks.includes(i)?'examined':''}" style="--box-order:${i}" data-action="inspect-pack" data-pack="${i}" title="Examinar caja real">${medicineCartonSvg(item.drug,i,{damaged:item.damaged,laboratory:item.laboratory})}<span class="medbox-caption">CAJA ${i+1}${game.inspectedPacks.includes(i)?' · ✓ REVISADA':''}</span></button>`}).join(''):'';
 return `${stage('stockroom','RECEPCIÓN DE PEDIDOS',`Guía ${d.id} · Compara el contenido con el documento`)}<section class="content"><div class="content-grid"><div class="paper"><h2>GUÍA DE DESPACHO</h2><p class="mini">Guía de despacho · ${escapeText(d.id)}</p><hr><p><b>Proveedor:</b> ${escapeText(d.regular?d.name:'Entrega especial de rectificación')}</p><p><b>Fecha:</b> ${dateOf(game.day)}</p>${d.lines?`<p><b>DETALLE DE LA GUÍA</b></p>${d.lines.map(r=>`<p>• ${escapeText(drugName(r.drug))} · ${r.expected} caja(s)</p>`).join('')}`:`<p><b>Producto:</b> ${escapeText(drugName(d.drug))}</p><p><b>Presentación:</b> ${escapeText(DRUGS[d.drug].pack)}</p>`}<p><b>Envases admitidos:</b> Tulab / Laboratorio Chicle</p><h2 class="right">${d.expected} CAJAS</h2><p class="mini">${d.regular?'Verifica cantidad, concentración e integridad antes de aceptar.':'Entrega vinculada a una incidencia anterior: '+d.ref}</p></div><div class="dark-card"><h2>REVISIÓN FÍSICA</h2><div class="pkg-wrap">${!shown?`<button class="shipping-box" data-action="open-box"><span class="shipping-icon">▣</span><br>ABRIR CAJA DE CARTÓN</button>`:cards}</div>${shown?`<div class="notice">Envases revisados: ${game.inspectedPacks.length}/${Math.min(8,d.actual)}.</div>`:'<p class="small muted">Haz clic en la caja para abrirla. Luego revisa los envases.</p>'}</div></div>${shown?`<div class="count-board" style="margin-top:16px"><div class="count-grid"><div class="count-tile"><small>GUÍA DOCUMENTA</small><b>${d.expected}</b></div><div class="count-tile"><small>REVISADAS</small><b>${game.inspectedPacks.length}</b></div><div class="count-tile"><small>TOTAL EN LA CAJA</small><b>${d.actual}</b></div></div><p>Compara guía, contenido e integridad antes de decidir.</p></div>`:''}</section>${actionbar([['✓ INGRESAR PEDIDO','accept-order','green',shown?'':'disabled'],['! REPORTAR DIFERENCIA','report-order','red',shown?'':'disabled'],['▣ LIBRO DE CONTROL','book','cream'],['← VOLVER','back-receive','dark']])}`}
function bookHtml(){let id=DRUGS[ui.selectedDrug]?.book?ui.selectedDrug:CONTROLLED_IDS[0];let d=DRUGS[id];return `${stage('book','LIBRO DE CONTROL',`Cada presentación posee folios y saldos independientes`)}<section class="content"><div class="section-head"><h2>REGISTROS FARMACÉUTICOS</h2><div class="btn-row">${btn('← VOLVER A LA PANTALLA ANTERIOR','book-counter','cream')}</div></div><div class="split"><div class="paper"><h2>LIBRO FÍSICO</h2><div class="form-line"><label>Seleccionar presentación</label><select class="field" id="drugSelector">${CONTROLLED_IDS.map(k=>`<option value="${k}" ${k===id?'selected':''}>${drugName(k)}</option>`).join('')}</select></div><p class="mini">${d.pack} · Folio correlativo actual: ${game.folios[id]}.</p><hr><div class="book-scroll"><table class="data-table"><thead><tr><th>Fecha</th><th>Folio</th><th>Recetas</th><th>Egresos</th><th>Ingresos</th><th>Cantidad</th></tr></thead><tbody>${game.ledger.filter(x=>x.drug===id).map(x=>`<tr><td>${dateOf(x.originalDay)}${x.rectification?' *':''}</td><td>${x.folio}</td><td>${x.recipes}</td><td>${x.egress}</td><td>${x.ingress}</td><td>${x.balance}</td></tr>`).join('')||'<tr><td colspan="6">Sin asientos.</td></tr>'}</tbody></table></div><p class="mini">* Entrada de rectificación con respaldo y sin eliminación del historial.</p></div><div class="dark-card"><h2>CONCILIACIÓN</h2><div class="money-line"><span>Stock digital</span><b>${game.stock[id]} cajas</b></div><div class="money-line"><span>Saldo en libro</span><b>${game.bookStock[id]} cajas</b></div><div class="money-line"><span>Diferencia</span><b class="${game.stock[id]===game.bookStock[id]?'good':'danger'}">${game.stock[id]-game.bookStock[id]}</b></div><hr><h3>Movimientos pendientes</h3><p>${game.dispatches.filter(x=>!x.posted&&x.drug===id).length} receta(s) por transcribir</p><p>${game.receipts.filter(x=>!x.posted&&x.drug===id).length} ingreso(s) por transcribir</p><p class="small muted">La transcripción automática se ejecuta desde el cierre de jornada. El libro se mantiene como registro aparte del sistema digital.</p><p class="small">Puedes regularizar despachos históricos como asientos nuevos, sin borrar datos anteriores.</p>${btn('RECTIFICAR ASIENTOS ATRASADOS','post-backlog','cream')}</div></div></section>`}
function closeHtml(){const unpostedD=game.dispatches.filter(x=>x.day===game.day&&!x.posted),unpostedR=game.receipts.filter(x=>x.day===game.day&&!x.posted);return `${stage('stockroom','CIERRE DE JORNADA','Libro de control · Movimientos del día')}<section class="content"><div class="content-grid"><div class="paper"><h2>DESPACHOS DE HOY</h2><p>Recetas dispensadas: <b>${unpostedD.length}</b></p><p>Cajas despachadas pendientes: <b>${unpostedD.reduce((a,b)=>a+b.qty,0)}</b></p><hr>${Object.keys(DRUGS).map(id=>{let ar=unpostedD.filter(x=>x.drug===id);return ar.length?`<p><b>${drugName(id)}:</b> folio ${ar[0].folio}${ar.length>1?'–'+ar[ar.length-1].folio:''} · ${ar.length} receta(s) · ${ar.reduce((a,b)=>a+b.qty,0)} caja(s)</p>`:''}).join('')||'<p>No hay recetas pendientes de hoy.</p>'}${btn('REGISTRAR DESPACHOS EN LIBRO','post-dispatch','green',unpostedD.length?'':'disabled')}</div><div class="paper"><h2>INGRESOS DE HOY</h2><p>Recepciones pendientes: <b>${unpostedR.length}</b></p><p>Cajas recibidas pendientes: <b>${unpostedR.reduce((a,b)=>a+b.qty,0)}</b></p><hr>${unpostedR.map(r=>`<p>${drugName(r.drug)}: +${r.qty} caja(s), guía ${r.ref}</p>`).join('')||'<p>No hay ingresos pendientes de hoy.</p>'}${btn('REGISTRAR INGRESOS EN LIBRO','post-receipt','cream',unpostedR.length?'':'disabled')}</div></div><div class="content-grid" style="margin-top:14px"><div class="dark-card"><h3>ESTADO DE LA JORNADA</h3><p>Observaciones SEREMI: ${game.inspectionDone?1:0}</p><p>Multas de hoy: <b class="fine">${pesos(game.finesToday)}</b></p><p class="small">Los folios se numeran por presentación y no se reinician al día siguiente.</p></div><div class="dark-card"><h3>REGISTROS</h3><p>${game.ledger.length} asiento(s) acumulado(s).</p><p>${game.dispatches.filter(x=>!x.posted).length+game.receipts.filter(x=>!x.posted).length} movimientos totales por regularizar.</p><div class="small muted">${game.tutorial?'Registra los despachos para completar este turno de práctica.':'Puedes cerrar aunque olvides el libro; una fiscalización posterior podrá descubrir la omisión.'}</div>${game.dispatches.filter(x=>!x.posted).length+game.receipts.filter(x=>!x.posted).length>0?`<div class="notice warn" role="status"><b>REGISTROS PENDIENTES</b><p>Antes de salir, transcribe los movimientos de hoy o rectifica los atrasados. Cerrar sin registrarlos podría generar una observación posterior.</p></div>`:''}${btn('REGULARIZAR REGISTROS ATRASADOS','post-backlog','cream')}</div></div></section>${actionbar([['▤ REVISAR LIBRO','book','cream'],[game.tutorial?'TERMINAR PRÁCTICA':'COBRAR SUELDO Y REGRESAR A CASA →','go-home','green']])}`}
function schoolClothHtml(){
 if(game.day!==8)return '';
 const choice=game.schoolClothChoice;
 const cloth=availableSchoolCloth();
 const dirty=!cloth&&game.gifts.some(gift=>!gift.used&&gift.item===DIRTY_CLOTH);
 const note=dirty?'Puedes lavar la tela sucia desde Regalos.':'Puedes usar la tela de Don Victor si tienes una limpia.';
 return `<section class="paper school-cloth"><div><h2>Trabajo de Carlitos</h2>${choice
  ? `<p role="status">${choice==='bought'?'Compraste la tela para Carlitos por $10.000.':'Carlitos se llevó la tela de Don Victor para su trabajo.'}</p>`
  : `<p>En el colegio le pidieron una tela para su trabajo. En la tienda cuesta <b>${pesos(SCHOOL_CLOTH_PRICE)}</b>.</p>
    ${cloth?'':`<p class="small">${note}</p>`}
    <div class="btn-row">${btn('Comprar tela','buy-school-cloth','cream',game.cash<SCHOOL_CLOTH_PRICE?'disabled title="Necesitas $10.000"':'')}${btn('Usar tela de "Don Victor"','use-school-cloth','green',cloth?'':'disabled')}</div>`}</div>${cloth&&!choice?giftSprite(cloth):''}</section>`;
}
function homeHtml(){
 const crisis=game.currentHealthEvent==='crisis';
 const hospitalized=['hospitalizado','ingresó al hospital'].includes(game.currentHealthEvent);
 const hospitalDay=(game.dayHospitalCost||0)>0;
 const status=game.carlitosHealth||'estable';
 const mood=game.moodCarlitos>=75?'contento':game.moodCarlitos>=50?'tranquilo':game.moodCarlitos>=25?'desanimado':'muy decaído';
 return `${stage('home','HOGAR · ECONOMÍA FAMILIAR','21:30 · Regreso al hogar')}<section class="content"><div class="salary-grid"><div class="paper"><h2>LIQUIDACIÓN DEL DÍA</h2><div class="money-line pos"><span>Sueldo QF</span><strong>+${pesos(40000)}</strong></div>${game.dayBonus>0?`<div class="money-line pos"><span>Bono por libro al día</span><strong>+${pesos(game.dayBonus)}</strong></div>`:''}<div class="money-line neg"><span>Multas SEREMI</span><strong>−${pesos(game.finesToday)}</strong></div><div class="money-line neg"><span>Alimentación</span><strong>−$12.000</strong></div><div class="money-line neg"><span>Tratamiento Carlitos</span><strong>−${pesos(game.dayTreatmentCost??3000)}</strong></div>${game.couponUsedOnDay?`<div class="money-line pos"><span>Cupón aplicado</span><strong>${game.couponUsedOnDay.pct}%</strong></div>`:''}${crisis?'<div class="money-line neg"><span>Consulta extraordinaria</span><strong>−$25.000</strong></div>':''}${hospitalDay?`<div class="money-line neg"><span>Hospitalización (día ${game.hospital?.days||1})</span><strong>−${pesos(game.dayHospitalCost)}</strong></div>`:''}${game.day%20===0?'<div class="money-line neg"><span>Arriendo (25% sueldo mensual)</span><strong>−$200.000</strong></div>':''}<hr><div class="money-total"><span>GASTOS POR PAGAR</span><span>${pesos(game.dayExpenses)}</span></div><p class="mini">Sueldo diario $40.000 · 20 jornadas al mes · arriendo mensual $200.000.</p></div>
 <div class="dark-card family-diary"><h2>DIARIO DE CARLITOS · 8 AÑOS</h2><div class="family-status ${hospitalized?'family-status-alert':''}"><span class="family-pulse">♥</span><div><span class="family-status-label">ESTADO DE SALUD</span><strong>${escapeText(status.toUpperCase())}</strong></div></div>${moodBar('Ánimo de Carlitos',game.moodCarlitos,'carlitos')}<p class="small">Hoy se siente <b>${escapeText(mood)}</b>.</p><div class="family-day-story"><b>${hospitalized?'NOTICIAS DEL HOSPITAL':game.currentHealthEvent==='de alta'?'DE REGRESO EN CASA':crisis||game.currentHealthEvent==='molestias'?'UN DÍA DE DESCANSO':'ASÍ LE FUE HOY EN EL COLEGIO'}</b><p>${escapeText(game.dayStory||storyForDay(game.day,game.currentHealthEvent||'estable'))}</p></div>${game.lastFamilyGift?`<p class="small family-gift-note">${escapeText(game.lastFamilyGift)}</p>`:''}${hospitalized?`<p class="small family-hospital-note">${game.currentHealthEvent==='ingresó al hospital'?'Inicia hospitalización mañana: $10.000 por jornada.':`Jornadas hospitalizado: ${game.hospital?.days||0}. Costo de hoy: ${pesos(game.dayHospitalCost||0)}.`}</p>`:''}<div class="money-line"><span>Dinero disponible</span><strong>${pesos(game.cash)}</strong></div><div class="money-line"><span>Deudas acumuladas</span><strong>${pesos(game.debt)}</strong></div><div class="money-line"><span>Confianza familiar</span><strong>${game.familyTrust}/100</strong></div><div class="family-quote">«${hospitalized?'Lo importante es que estemos juntos. Mañana volvemos a acompañarlo.':'Hoy hubo cosas difíciles, pero también nos reímos un rato.'}» — Tu pareja</div>${moodBar('Ánimo del QF',game.moodQf,'qf')}<div class="ledger-row"><b>Regalos disponibles:</b> ${(game.gifts||[]).filter(g=>!g.used).length}</div>${(game.gifts||[]).some(g=>!g.used&&canGiftCarlitos(g))?`<p class="small good">Tienes dulces para Carlitos. Abre REGALOS y presiona «REGALAR A CARLITOS».</p>`:''}</div></div>${schoolClothHtml()}${game.day===ONCE_DAY&&game.neighborsOnce?.choice==='home'?'<div class="notice ok"><h3>LA ONCE DE LOS VECINOS</h3><p>Carlitos prueba una sopaipilla y decide que va primera en su ranking del barrio. «Es que todavía está calentita. Mañana vemos si sigue primera».</p></div>':''}${game.daySummary?`<div class="notice ${game.daySummary.paid?'ok':'warn'}">${game.daySummary.paid?'Gastos pagados. La familia puede descansar.':'Gastos pendientes registrados como deuda familiar.'} · Saldo: ${pesos(game.cash)}. ${game.daySummary.treatmentCovered===false?'El tratamiento de Carlitos sigue pendiente.':''}</div>`:''}${game.day===30&&game.daySummary?`<div class="notice ok"><h2>HITO: 30 JORNADAS COMPLETADAS</h2><p>Dinero: ${pesos(game.cash)} · Deuda: ${pesos(game.debt)} · Infracciones: ${game.infractions} · Regalos: ${(game.gifts||[]).length}.</p></div>`:''}</section>${game.daySummary?actionbar([['DESCANSAR · SIGUIENTE DÍA','next-day','green'],...(game.debt>0&&game.cash>0?[['ABONAR DEUDA','repay-debt','cream']]:[]),['REVISAR HISTORIAL','history','dark']]):actionbar([['✓ PAGAR GASTOS','pay-expenses','green'],['POSPONER Y GENERAR DEUDA','defer-expenses','amber'],...(game.debt>0&&game.cash>0?[['ABONAR DEUDA','repay-debt','cream']]:[]),['REVISAR MENSAJES','history','dark']])}`;
}

function gameOverHtml(){if(game.gameOverReason==='day-seven-false-prescription')return daySevenEndingHtml();if(game.gameOverReason==='reincidencia-cheque')return `${stage('inspection','FIN DE LA PARTIDA · REINCIDENCIA DOCUMENTAL','Final alternativo')}<section class="content"><div class="paper center"><h2>SEGUNDA ADVERTENCIA · CASO POLICIAL</h2><p>La persona volvió con otra receta blanca para un medicamento que requería cheque. Tras dos denuncias comprobadas, el paciente termina detenido y el caso queda cerrado.</p><p>FIN</p></div></section>${actionbar([['NUEVA PARTIDA','new','green'],['MENÚ PRINCIPAL','menu','dark']])}`;return `${stage('inspection','FIN DE LA PARTIDA · LA ÚLTIMA DISPENSACIÓN','Final secreto')}<section class="content"><div class="paper center"><h2>INVESTIGACIÓN Y CONDENA</h2><p>El cliente encubierto se identificó como fiscalizador tras la dispensación clandestina.</p><p>La investigación posterior termina en una condena de prisión para el protagonista.</p><p><b>FIN</b></p><p class="mini">La situación es un recurso narrativo ficticio; no representa un resultado judicial automático en Chile.</p></div></section>${actionbar([['NUEVA PARTIDA','new','green'],['MENÚ PRINCIPAL','menu','dark']])}`}
// ===== Manual práctico (1.9.106) =====
const MANUAL_TABS=['INICIO','RECETAS','CÉDULAS','DECISIONES','MEDICAMENTOS','INVENTARIO','SEREMI','SIS','CONTROLES','SOBRE LOS DATOS'];
// Botón de muestra: se ve igual que el del juego pero no hace nada.
function mb(label,cls='dark'){return `<span class="btn ${cls} mbtn" aria-hidden="true">${label}</span>`}
function mbs(...items){return `<div class="mbtns">${items.join('')}</div>`}
function mimg(src,alt,cls=''){return `<img class="msprite ${cls}" src="${assetUrl(src)}" alt="${escapeText(alt)}" loading="lazy">`}
function mspeech(text){return `<div class="mspeech">«${escapeText(text)}»</div>`}
function mcase({img='',title,see,doIt,btns='',tone=''}){return `<div class="mcase ${tone}">${img?`<div class="mcase-img">${img}</div>`:''}<div class="mcase-body"><h4>${title}</h4>${see?`<p><b>Qué ves:</b> ${see}</p>`:''}<p><b>Qué haces:</b> ${doIt}</p>${btns?mbs(...[].concat(btns)):''}</div></div>`}
function mfig(html,caption,hl=''){return `<figure class="mfig ${hl}"><div class="manual-doc">${html}</div><figcaption>${caption}</figcaption></figure>`}
function mtip(html,kind='tip'){return `<div class="mnote ${kind}">${html}</div>`}
// Pacientes de ejemplo generados con las mismas funciones del juego (una sola vez por sesión, sin tocar la partida).
function manualSamples(){
 if(ui.manualSamples)return ui.manualSamples;
 const u=game.usedCatalogIds?[...game.usedCatalogIds]:game.usedCatalogIds,r=game.priorRxUses?[...game.priorRxUses]:game.priorRxUses,out={};
 for(const [k,n] of [['correct',3],['typo',5],['expired',7],['wrongtype',9],['check',11],['idExpired',13],['electronic',15],['lookHair',17],['different',19]]){
  try{const p=makePatient(k,n);p.gaveId=true;p.done=false;out[k]=p}catch(e){out[k]=null}
 }
 try{if(out.check)out.regError={...out.check,rxReg:wrongRegistry(out.check.drug)}}catch(e){out.regError=null}
 game.usedCatalogIds=u;game.priorRxUses=r;ui.manualSamples=out;return out;
}
function mSafe(fn){try{return fn()}catch(e){return ''}}
function mRx(p){return p?mSafe(()=>prescriptionHtml(p)):''}
function mId(p){return p?mSafe(()=>idHtml(p)):''}
function manualTabHtml(tab){
 // Dibujar los documentos de ejemplo asigna rostros (assignPatientModel) y marca ids como usados: se restaura al terminar.
 const u=game?.usedCatalogIds?[...game.usedCatalogIds]:game?.usedCatalogIds,r=game?.priorRxUses?[...game.priorRxUses]:game?.priorRxUses;
 try{return manualTabInner(MANUAL_TABS.includes(tab)?tab:'INICIO')}finally{if(game){game.usedCatalogIds=u;game.priorRxUses=r}}
}
function manualTabInner(tab){
 const S=manualSamples();const day=Number(game?.day)||1;
 const today=mSafe(()=>dateOf(day))||'hoy';
 const tabs={
 INICIO:()=>{
  const ok=S.correct,ty=S.typo;
  return `<h3>Tu turno, paso a paso</h3>
  <ol class="msteps">
   <li><b>Escucha al paciente.</b> La burbuja de arriba dice a qué viene. Cuando algo anda mal, a veces suelta una pista (en algunos de los casos con problema): ${mspeech('El doctor la escribió corriendo y no la alcancé a revisar.')}Pero no todos avisan: decide siempre por lo que ves en los documentos, no por lo que dice el paciente. Después de tu decisión, la burbuja cambia a su reacción.</li>
   <li><b>Mira la receta.</b> Puedes arrastrarla por el escritorio, hacer doble clic sobre ella o tocar ${mb('Ampliar y comparar','cream')} para abrir la inspección.</li>
   <li><b>Pide la cédula.</b> ${mb('Solicitar cédula','cream')} A veces el paciente no trae ninguna: en ese caso se devuelve la receta, sin llamar a la policía.</li>
   <li><b>Compara.</b> Nombre, RUT, fechas, prescriptor y tipo de receta. En la pantalla de inspección tienes herramientas de ayuda: ${mbs(mb('COMPARAR DOCUMENTOS','cream'),mb('▦ CALENDARIO','cream'),mb('▧ VERIFICAR IDENTIDAD','blue'),mb('☎ LLAMAR AL MÉDICO','blue'),mb('▣ ABRIR REGISTRO SIS','green'))}</li>
   <li><b>Decide.</b> Tres caminos: ${mbs(mb('✓ DISPENSAR','green'),mb('↶ DEVOLVER','amber'),mb('⚠ NOTIFICAR O RETENER','red'))}<ul><li><b>Dispensar</b> solo si todo coincide.</li><li><b>Devolver</b> si hay un error corregible (eliges el motivo de la lista).</li><li><b>Notificar</b> si hay indicios de delito o falsificación (soborno, carnet falso, receta falsa, ejercicio ilegal).</li></ul></li>
   <li><b>Siguiente.</b> ${mb('SIGUIENTE CLIENTE →','green')} Al terminar la fila pasas a cierre de jornada: libro de control, gastos y descanso.</li>
  </ol>
  <h3>Caso resuelto 1 · Todo en regla</h3>
  <div class="mdocs">${mfig(mRx(ok),'Receta','hl-rut')}${mfig(mId(ok),'Cédula','')}</div>
  ${ok?mcase({title:'Cómo se ve un caso correcto',see:`El nombre <b>${escapeText(rxPatientName(ok))}</b> es el mismo en la receta y en la cédula, el RUT <b>${mSafe(()=>prescriptionPatientId(ok))}</b> coincide con el RUN de la cédula, la cédula está vigente y el prescriptor está bien identificado.`,doIt:'despachar. Si dudas, revisa una vez más el RUT: es el error más común.',btns:mb('✓ DISPENSAR','green'),tone:'ok'}):''}
  <h3>Caso resuelto 2 · RUT con un dígito errado</h3>
  <div class="mdocs">${mfig(mRx(ty),'Receta','hl-rut')}${mfig(mId(ty),'Cédula','')}</div>
  ${ty?mcase({title:'Cuando los números no calzan',see:`La receta dice RUT <b>${mSafe(()=>prescriptionPatientId(ty))}</b> y la cédula dice <b>${escapeText(ty.rut)}</b>. Con uno o dos dígitos distintos basta para devolver.`,doIt:'tocar «Devolver» y elegir el motivo <i>RUT, DNI o datos de identificación no coinciden</i>, luego «Confirmar». No es delito: es un error de escritura.',btns:[mb('↶ DEVOLVER','amber'),mb('Confirmar','green')],tone:'warn'}):''}
  <h3>Caso resuelto 3 · Casi ningún número calza</h3>
  <div class="mdocs">${mfig(mRx(S.different),'Receta','hl-rut')}${mfig(mId(S.different),'Cédula','')}</div>
  ${S.different?mcase({title:'Cuando es más que un error de tipeo',see:`La receta dice RUT <b>${mSafe(()=>prescriptionPatientId(S.different))}</b> y la cédula dice <b>${escapeText(S.different.rut)}</b>: son <b>${mSafe(()=>rutDigitDiffs(S.different))} dígitos distintos</b>.`,doIt:'con <b>1 o 2 dígitos</b> distintos es un error de escritura: devolver. Con <b>3 o más</b> (o un RUT completamente distinto) es como si te quisieran engañar: puedes devolver, o bien notificar como receta falsa en «Notificar o retener» → Avisar a SEREMI.',btns:[mb('↶ DEVOLVER','amber'),mb('⚠ NOTIFICAR O RETENER','red')],tone:'bad'}):''}
  <h3>Mapa de botones del mesón y la inspección</h3>
  <table class="data-table mtable"><thead><tr><th>Botón</th><th>Qué hace</th></tr></thead><tbody>
   <tr><td>${mb('Ampliar y comparar','cream')}</td><td>Abre la inspección: receta y cédula lado a lado, con zoom.</td></tr>
   <tr><td>${mb('Solicitar cédula','cream')}</td><td>Pide el documento de identidad. Sin él no puedes comparar ni verificar la huella.</td></tr>
   <tr><td>${mb('− ZOOM','dark')} ${mb('+ ZOOM','dark')}</td><td>Acerca o aleja los documentos para leer RUT y fechas pequeñas.</td></tr>
   <tr><td>${mb('▦ CALENDARIO','cream')}</td><td>Muestra el día de hoy para comparar con emisión y vencimiento.</td></tr>
   <tr><td>${mb('▧ VERIFICAR IDENTIDAD','blue')}</td><td>Lector de huella: dice si la persona corresponde a la cédula.</td></tr>
   <tr><td>${mb('☎ LLAMAR AL MÉDICO','blue')}</td><td>Intenta confirmar la receta con el prescriptor (un intento por atención).</td></tr>
   <tr><td>${mb('▣ ABRIR REGISTRO SIS','green')}</td><td>Consulta si el prescriptor está inscrito (disponible desde el día ${SIS_UNLOCK_DAY}).</td></tr>
   <tr><td>${mb('VALIDAR CÓDIGO','blue')}</td><td>Valida una receta electrónica.</td></tr>
   <tr><td>${mb('✓ DISPENSAR','green')}</td><td>Entrega el medicamento y descuenta stock.</td></tr>
   <tr><td>${mb('↶ DEVOLVER','amber')}</td><td>Devuelve la receta y registra el motivo.</td></tr>
   <tr><td>${mb('⚠ NOTIFICAR O RETENER','red')}</td><td>Avisar a policía o SEREMI, o retener sin notificar.</td></tr>
   <tr><td>${mb('← VOLVER AL MESÓN','cream')}</td><td>Sale de la inspección sin decidir (también con ESC).</td></tr>
  </tbody></table>`;
 },
 RECETAS:()=>{
  const ex=S.wrongtype,ch=S.check,ee=S.electronic,xp=S.expired;
  return `<h3>Los tres tipos de receta</h3>
  <p>El tipo que corresponde depende del medicamento (míralo en el catálogo). Si la receta presentada no es del tipo exigido, se devuelve.</p>
  <div class="mdocs">${mfig(mRx(S.correct),'<b>Receta blanca</b> · simple o retenida. Para la mayoría de los medicamentos.','')}${mfig(mRx(ch),'<b>Receta cheque</b> · exigida para ciertos medicamentos controlados (ej. metilfenidato). Valida todos los campos, la firma y que su Nº de Registro coincida con el del catálogo del manual.','')}${mfig(mRx(ee),'<b>Receta electrónica</b> · se valida con el botón de abajo.','')}</div>
  ${mbs(mb('VALIDAR CÓDIGO','blue'))}
  <h3>Vigencia: cuándo vence una receta</h3>
  <p>Regla del juego: la vigencia se cuenta en <b>meses de calendario</b> desde la fecha de emisión. Una receta emitida el 20/10 sirve hasta el 20/11 inclusive; desde el 21/11 está vencida.</p>
  <table class="data-table mtable"><thead><tr><th>Receta de…</th><th>Vigencia</th></tr></thead><tbody>
   <tr><td>Medicamento controlado (retenido con libro especial)</td><td><b>1 mes</b></td></tr>
   <tr><td>Medicamento de receta cheque</td><td><b>1 mes</b></td></tr>
   <tr><td>Retenidos sin libro: antibióticos, corticoides, antifúngicos y antiparasitarios</td><td><b>1 mes</b></td></tr>
   <tr><td>Todas las demás recetas simples</td><td><b>6 meses</b></td></tr>
  </tbody></table>
  <p>La receta <b>electrónica</b> es un formato, no un tipo aparte: puede ser a la vez de cheque o controlada, pero solo si el medicamento ya es de cheque o controlado: una receta normal no puede ser «electrónica cheque» (la etiqueta del documento lo dice, por ejemplo «RECETA ELECTRÓNICA · CHEQUE»). Vale igual que la física, y vence con las mismas reglas. Si validas el código de una electrónica vencida, el verificador lo rechaza con el aviso <b>«Receta vencida»</b>: <u>no es falsificación</u>, se devuelve con el motivo «Receta vencida».</p>
  <h3>Qué revisar siempre</h3>
  <ul class="mcheck"><li><b>Paciente:</b> el nombre debe ser el mismo que en la cédula (incluye los dos apellidos).</li><li><b>RUT:</b> comparar dígito por dígito con la cédula.</li><li><b>Fecha de emisión:</b> que no sea futura ni esté vencida (usa ${mb('▦ CALENDARIO','cream')} y revisa la tabla de vigencia).</li><li><b>Prescriptor:</b> nombre, RUT y título. Un tecnólogo médico o un podólogo <b>no son médicos</b>.</li><li><b>Tipo documental:</b> ¿es el que exige el medicamento?</li></ul>
  <h3>Errores típicos, uno por uno</h3>
  ${mcase({img:mimg('assets/cast600/cast_700_stage.webp','Paciente'),title:'1 · RUT con dígitos distintos',see:'La receta y la cédula muestran RUT que no son iguales.',doIt:'con 1 o 2 dígitos distintos, devolver con el motivo «RUT, DNI o datos de identificación no coinciden». Con 3 o más dígitos distintos (o un RUT completamente distinto) es un intento de engaño: devolver o avisar a SEREMI como receta falsa.',btns:[mb('↶ DEVOLVER','amber')],tone:'warn'})}
  ${xp?`<div class="mdocs">${mfig(mRx(xp),`Fecha de emisión: <b>${escapeText(xp.rxDate)}</b> · hoy: <b>${escapeText(today)}</b>`,'')}</div>`:''}
  ${mcase({img:mimg('assets/cast600/cast_701_stage.webp','Paciente'),title:'2 · Receta vencida',see:'La fecha de emisión quedó fuera de la vigencia: más de 1 mes en controlados, cheque y retenidos sin libro (antibióticos, corticoides, etc.), o más de 6 meses en las demás simples. Si es electrónica, «Validar código» responde «Receta vencida».',doIt:'devolver con el motivo «Receta vencida». También hay un motivo para fechas futuras o inválidas.',btns:[mb('↶ DEVOLVER','amber')],tone:'warn'})}
  ${ex?`<div class="mdocs">${mfig(mRx(ex),`El medicamento es <b>${escapeText(mSafe(()=>drugName(ex.drug)))}</b> y la receta es blanca`,'')}</div>`:''}
  ${mcase({img:mimg('assets/cast600/cast_702_stage.webp','Paciente'),title:'3 · Receta blanca para un medicamento de cheque',see:'El medicamento exige receta cheque, pero te traen una receta común.',doIt:'devolver con el motivo «El medicamento exige receta cheque…». En el evento especial, la primera denuncia confirmada solo lleva advertencia y el paciente puede volver con la receta correcta.',btns:[mb('↶ DEVOLVER','amber')],tone:'warn'})}
  ${S.regError?`<div class="mdocs">${mfig(mRx(S.regError),`La receta dice <b>${escapeText(S.regError.rxReg)}</b>; en el catálogo, ${escapeText(mSafe(()=>drugName(S.regError.drug)))} es <b>${escapeText(DRUGS[S.regError.drug].reg)}</b>`,'')}</div>`:''}
  ${mcase({img:mimg('assets/cast600/cast_706_stage.webp','Paciente'),title:'4 · Receta cheque con Número de Registro errado',see:'El «Nº de Registro» impreso en la receta cheque no es el que figura para ese medicamento en la pestaña MEDICAMENTOS del manual (grupo «Control legal · Receta cheque»).',doIt:'<b>no despachar</b>. Devolver con el motivo «El Número de Registro del medicamento no coincide…». El paciente <b>siempre vuelve al día siguiente</b> con la receta corregida por el médico.',btns:[mb('↶ DEVOLVER','amber')],tone:'warn'})}
  ${mcase({img:mimg('assets/cast600/cast_703_stage.webp','Paciente'),title:'5 · Receta electrónica ya despachada',see:`Al validar, aparece ${mb('▣ RECETA DESPACHADA','red')}: el folio ya se usó.`,doIt:'elegir qué hacer con la copia: devolverla (el paciente puede volver con el mismo folio) o destruirla (termina el caso). Si la despachas otra vez, queda como error.',btns:[mb('↶ DEVOLVER RECETA','amber'),mb('✕ DESTRUIR RECETA','red')],tone:'warn'})}
  ${mcase({img:mimg('assets/cast600/cast_704_stage.webp','Paciente'),title:'6 · Paciente extranjero: RUT sin la glosa',see:'El RUT de la receta es igual al número del DNI, pero falta «(EXTRANJERO)».',doIt:'devolver con el motivo «RUT extranjero sin glosa». Para todo paciente no chileno el RUT de la receta debe ser el número del DNI <b>seguido de «(EXTRANJERO)»</b>; vale para recetas simples, retenidas, cheque y electrónicas.',btns:[mb('↶ DEVOLVER','amber')],tone:'warn'})}
  ${mcase({img:mimg('assets/cast600/cast_705_stage.webp','Paciente'),title:'7 · Receta falsificada',see:'Firma que no coincide, prescriptor que no figura en el SIS o código electrónico inválido.',doIt:'avisar a SEREMI; la receta se retiene. Existe la probabilidad de que el verificador detecte un código inválido aunque no haya otras incongruencias.',btns:[mb('⚠ NOTIFICAR O RETENER','red')],tone:'bad'})}
  ${mtip('<b>Regla del juego:</b> receta controlada y libro especial solo para pacientes de 18 años o más. Una validación fallida acredita receta falsa en esta ficción; no es una norma clínica real.','info')}`;
 },
 CÉDULAS:()=>{
  const ok=S.correct,ex=S.idExpired,lh=S.lookHair;
  return `<h3>Cómo leer una cédula</h3>
  <div class="mdocs">${mfig(mId(ok),'Cédula chilena de ejemplo','')}</div>
  <ul class="mcheck"><li><b>Apellidos y nombres:</b> deben ser los de la receta.</li><li><b>RUN:</b> es el RUT que debe repetirse en la receta.</li><li><b>Fecha de emisión y vencimiento:</b> la vigencia es de 7 u 8 años (regla de esta simulación).</li><li><b>Sexo:</b> compáralo con el de la ficha; sin inferir nada por la apariencia.</li><li><b>Foto:</b> debe ser la misma persona que tienes al frente.</li></ul>
  <h3>Estados de vigencia</h3>
  <table class="data-table mtable"><thead><tr><th>Lo que ves</th><th>Qué es</th><th>Qué haces</th></tr></thead><tbody>
   <tr><td>Emisión posterior a hoy</td><td>Sospechosa (fecha inválida)</td><td>${mb('↶ DEVOLVER','amber')} motivo «Fecha de emisión futura o inválida»</td></tr>
   <tr><td>Vence antes de hoy</td><td>Vencida</td><td>${mb('↶ DEVOLVER','amber')} motivo «Cédula o DNI vencido». No es delito: sin policía.</td></tr>
   <tr><td>Vence el mismo día</td><td>Vigente</td><td>Se acepta.</td></tr>
   <tr><td>Sexo distinto al de la ficha</td><td>Dato inconsistente</td><td>${mb('↶ DEVOLVER','amber')} para aclaración.</td></tr>
   <tr><td>No trae cédula (existe la probabilidad de que ocurra en encuentros ordinarios)</td><td>Sin identificación</td><td>${mb('↶ DEVOLVER','amber')} motivo «El paciente no porta cédula». Sin aviso policial.</td></tr>
   <tr><td>Documento evidentemente fabricado</td><td>Falso</td><td>${mb('⚠ NOTIFICAR O RETENER','red')} → policía por carnet falsificado.</td></tr>
  </tbody></table>
  ${ex?`<div class="mdocs">${mfig(mId(ex),`Esta cédula vence el <b>${escapeText(mSafe(()=>fictionalIdDates(ex).expires))}</b>; hoy es <b>${escapeText(today)}</b>.`,'')}</div>`:''}
  <h3>Cédulas de los países del juego</h3>
  <div class="mflags">${[['cl','Chile'],['ve','Venezuela'],['ht','Haití'],['ar','Argentina'],['pe','Perú'],['bo','Bolivia'],['cn','China'],['it','Italia'],['de','Alemania']].map(([c,n])=>`<figure><img src="${assetUrl(`assets/idcards/${c}.webp`)}" alt="Modelo de cédula de ${n}" loading="lazy"><figcaption>${n}</figcaption></figure>`).join('')}</div>
  <p>Con pacientes extranjeros, el campo RUT de la receta debe repetir el número del DNI más «(EXTRANJERO)».</p>
  <h3>Huella: cuando la foto no se parece</h3>
  <p>El peinado, la ropa y los años cambian a las personas. Eso <b>no es fraude</b> si la huella coincide.</p>
  <div class="mtrio"><figure>${mimg('assets/cast600/cast_700_stage.webp','Paciente')}<figcaption>Foto de la cédula</figcaption></figure><figure>${mimg('assets/cast600/cast_740_stage.webp','Mismo paciente con otro peinado y ropa')}<figcaption>Hoy, con otro peinado y ropa</figcaption></figure></div>
  ${mcase({title:'Cómo se usa el lector',see:'Una foto que parece distinta, pero con el RUN y los datos correctos.',doIt:'abrir la inspección, tocar «Verificar identidad» y luego «Colocar dedo · Iniciar».',btns:[mb('▧ VERIFICAR IDENTIDAD','blue'),mb('COLOCAR DEDO · INICIAR','green')],tone:'info'})}
  <div class="mdocs mresults"><div class="fingerprint-mini matched">● HUELLA COINCIDENTE</div><div class="fingerprint-mini unmatched">● HUELLA NO COINCIDENTE</div></div>
  <p><b>Verde:</b> es la persona, aunque se vea distinta: sigue con la revisión normal. <b>Roja:</b> la persona no corresponde a la cédula; puedes devolver o notificar a la policía.</p>`;
 },
 DECISIONES:()=>`<h3>Qué botón apretar según lo que encuentres</h3>
  <table class="data-table mtable"><thead><tr><th>Situación</th><th>Decisión</th></tr></thead><tbody>
   <tr><td>Todo coincide y es válido</td><td>${mb('✓ DISPENSAR','green')}</td></tr>
   <tr><td>Error de escritura (RUT con 1 o 2 dígitos distintos, fecha, glosa), cédula vencida, falta cédula, receta vencida, tipo equivocado, menor de edad, sin stock</td><td>${mb('↶ DEVOLVER','amber')} y elige el motivo</td></tr>
   <tr><td>RUT de la receta con 3 o más dígitos distintos al de la cédula (o completamente distinto)</td><td>${mb('↶ DEVOLVER','amber')} <b>o</b> ${mb('⚠ NOTIFICAR O RETENER','red')} → <b>Avisar a SEREMI</b> (intento de engaño)</td></tr>
   <tr><td>Receta falsa, prescriptor que no existe en el SIS</td><td>${mb('⚠ NOTIFICAR O RETENER','red')} → <b>Avisar a SEREMI</b></td></tr>
   <tr><td>Carnet falsificado o huella que no coincide</td><td>${mb('⚠ NOTIFICAR O RETENER','red')} → <b>Avisar a policía · Carnet presuntamente falsificado</b></td></tr>
   <tr><td>Te ofrecen plata por el medicamento</td><td>${mb('RECHAZAR LA OFERTA','green')} o ${mb('⚠ NOTIFICAR','amber')} → <b>Policía por intento de soborno</b> (nunca ${mb('ACEPTAR $50.000','red')})</td></tr>
   <tr><td>Receta firmada por un tecnólogo médico o un podólogo</td><td>${mb('⚠ NOTIFICAR O RETENER','red')} → <b>Policía · Ejercicio ilegal de la profesión médica</b>. Aquí no se puede llamar al médico.</td></tr>
  </tbody></table>
  <h3>Menú «Notificar o retener»</h3>
  <div class="mnotify">
   <div><b>⚖ AVISAR A POLICÍA</b><small>Intento de soborno</small></div>
   <div><b>▣ AVISAR A POLICÍA</b><small>Carnet presuntamente falsificado</small></div>
   <div><b>⚖ AVISAR A POLICÍA</b><small>Ejercicio ilegal de la profesión médica</small></div>
   <div><b>✚ AVISAR A SEREMI</b><small>Receta presuntamente falsificada · se retiene la receta</small></div>
   <div><b>RETENER SIN NOTIFICAR</b><small>Opción de benevolencia · el paciente se retira</small></div>
  </div>
  <h3>Motivos para devolver</h3>
  <div class="mreasons">${(typeof RETURN_REASON_GROUPS!=='undefined'?RETURN_REASON_GROUPS:[]).map(([g,list])=>`<div><b>${escapeText(g)}</b><ul>${list.map(k=>`<li>${escapeText(RETURN_REASONS[k])}</li>`).join('')}</ul></div>`).join('')}</div>
  ${mbs(mb('Confirmar','green'),mb('CANCELAR Y SEGUIR REVISANDO','cream'))}
  ${mtip('<b>Ojo:</b> avisar a la autoridad por algo que no era delito cuenta como error profesional y aumenta la frecuencia de las fiscalizaciones. Cuando dudes entre devolver y notificar, devuelve.','warn')}
  <h3>Después de decidir</h3>
  <p>La burbuja de arriba cambia a lo que dice el paciente: aliviado si lo atendiste, enojado si lo devolviste, asustado o indignado si lo denunciaste. Si el prescriptor era falso, el paciente solo está confundido: la denuncia es contra quien firmó.</p>
  ${mbs(mb('SIGUIENTE CLIENTE →','green'))}`,
 INVENTARIO:()=>`<h3>Recepción física y control</h3>
  <ol class="msteps"><li><b>Abre la caja</b> con un clic.</li><li><b>Compara la guía con los envases</b> uno por uno. ${mimg('assets/cartons/tulab_blank.webp','Caja de medicamento','wide')}</li><li><b>Reporta</b> faltantes, sobrantes, errores de concentración o envases dañados. Solo las unidades aptas y bien documentadas pasan al stock de dispensación.</li><li>Las entregas de rectificación llegan con su propia guía.</li></ol>
  <h3>Libro de control y cierre</h3>
  ${mbs(mb('REGISTRAR INGRESOS EN LIBRO','cream'),mb('REGISTRAR DESPACHOS EN LIBRO','green'),mb('▤ CONSULTAR LIBRO','cream'))}
  <p>Al cierre, usa «Registrar ingresos» y «Registrar despachos» para transcribir automáticamente los movimientos del día. Si hubo movimientos del libro especial y los transcribes todos antes de cerrar la jornada, recibes un <b>bono de $4.000</b>.</p>
  ${mbs(mb('REGULARIZAR REGISTROS ATRASADOS','cream'),mb('RECTIFICAR ASIENTOS ATRASADOS','cream'))}
  <p>Los asientos de rectificación se agregan con respaldo, sin borrar el historial.</p>`,
 SEREMI:()=>`<h3>Fiscalizaciones y rectificaciones</h3>
  <div class="mfig" style="max-width:none"><img src="assets/inspection.webp" alt="Fiscalizador de SEREMI Salud" style="width:100%;height:190px;object-fit:cover;object-position:50% 20%;image-rendering:pixelated;border:2px solid #2b2b22"><small>El <b>fiscalizador de SEREMI Salud</b>: llega con su credencial y su carpeta a revisar libros, recetas y registros.</small></div>
  <ul class="mcheck"><li><b>Cuándo vienen:</b> el día 2 con certeza y el día 4 con buena probabilidad. Desde el día 5 existe la probabilidad de una nueva visita, y sube con cada error profesional acumulado.</li><li><b>Primera infracción:</b> una advertencia sin multa. Después, multas ficticias por gravedad y reincidencia, con tope de ${pesos(MAX_INSPECTION_FINE)} por fiscalización, descontadas del sueldo de esa jornada.</li><li><b>Errores ya sancionados</b> cuentan para la frecuencia, pero no se sancionan dos veces.</li></ul>
  <h3>Ejemplo: receta electrónica ya usada</h3>
  <p>Solo el verificador electrónico puede mostrar ${mb('▣ RECETA DESPACHADA','red')} Puedes destruir o devolver la copia presentada; si la despachas otra vez queda registrado como error.</p>
  ${mbs(mb('↶ DEVOLVER RECETA','amber'),mb('✕ DESTRUIR RECETA','red'))}
  <p>Si la devuelves, existe la probabilidad de que el paciente vuelva desde el día siguiente. Destruirla termina el evento de ese folio. Una receta física retenida se archiva al despacharse y no puede reaparecer como «ya usada».</p>
  <h3>Avisos que sí corresponden</h3>
  ${mbs(mb('⚠ NOTIFICAR O RETENER','red'))}
  <p>Receta falsa → SEREMI. Soborno, carnet falso o ejercicio ilegal → policía. Son escenas narrativas, no sanciones legales automáticas. En el evento especial de receta blanca para medicamento de cheque, la primera denuncia confirmada es advertencia y el mismo paciente puede volver con receta corregida; si reincide, se activa un final policial ficticio.</p>`,
 SIS:()=>`<h3>Registro SIS (ficticio)</h3>
  <p>Disponible desde el día ${SIS_UNLOCK_DAY}. Consulta la inscripción de un prescriptor y muestra una firma de referencia para contrastar con la de la receta.</p>
  ${mbs(mb('▣ ABRIR REGISTRO SIS','green'),mb('⌕ CONSULTAR REGISTRO','blue'))}
  <ol class="msteps"><li>Abre el SIS desde la inspección.</li><li>Consulta al prescriptor que aparece en la receta.</li><li><b>Si no figura</b> en el registro, en el juego la receta se considera falsa y corresponde notificar a SEREMI (es una regla de ficción: en la realidad un registro puede estar incompleto o desactualizado).</li><li><b>Si figura:</b> compara además la firma gráfica con la de la receta.</li></ol>
  <div class="msigs"><figure>${mimg('assets/signatures/sig_00.png','Firma de referencia del SIS','wide')}<figcaption>Firma de referencia (SIS)</figcaption></figure><figure>${mimg('assets/signatures/sig_00_forged.png','Firma de la receta','wide')}<figcaption>Firma de la receta</figcaption></figure></div>
  ${mcase({title:'Firmas que no calzan',see:'La firma de la receta se ve distinta de la de referencia del SIS.',doIt:'es una receta falsificada: avisar a SEREMI.',tone:'bad'})}
  ${mtip('<b>Tecnólogos médicos y podólogos:</b> si emiten recetas (o la podóloga indica un antibiótico), el aviso correcto es <b>Policía · Ejercicio ilegal de la profesión médica</b>. No se puede llamar al médico porque no lo son. Si la SEREMI detecta recetas de médicos ficticios dispensadas, advierte la primera vez y desde el segundo caso aplica multa leve.','warn')}`,
 CONTROLES:()=>`<h3>Controles del juego</h3>
  <table class="data-table mtable"><thead><tr><th>Acción</th><th>Qué hace</th></tr></thead><tbody>
   <tr><td>Arrastrar con el mouse</td><td>Mueve los documentos sobre el escritorio.</td></tr>
   <tr><td>Doble clic en un documento</td><td>Abre la inspección.</td></tr>
   <tr><td>${mb('+ ZOOM','dark')} ${mb('− ZOOM','dark')}</td><td>Aumento en la inspección.</td></tr>
   <tr><td>ESC</td><td>Regresa a la pantalla anterior.</td></tr>
   <tr><td>Clic en la caja (recepción)</td><td>La abre; luego clic en los medicamentos para examinarlos.</td></tr>
   <tr><td>${mb('GUARDAR PARTIDA','cream')}</td><td>Guarda tu progreso.</td></tr>
   <tr><td>${mb('? MANUAL','dark')}</td><td>Abre este manual desde cualquier pantalla.</td></tr>
  </tbody></table>
  <h3>Regalos y objetos</h3>
  <div class="mgifts">${[['chocolate.png','Chocolate'],['caramelo-cuarto-hora.png','Caramelo'],['bombon-licor.png','Bombón de licor'],['coupon.png','Cupón'],['tela-limpia.png','Tela limpia'],['tela-sucia.png','Tela sucia'],['carta-tarot.png','Carta de tarot'],['sopaipillas.png','Sopaipillas']].map(([f,n])=>`<figure><img src="${assetUrl('assets/gifts/'+f)}" alt="${n}" loading="lazy"><figcaption>${n}</figcaption></figure>`).join('')}</div>
  ${mbs(mb('GUARDAR REGALO','green'),mb('NO GUARDAR','dark'),mb('VER INVENTARIO','cream'))}
  <ul class="mcheck"><li>Los regalos quedan en el inventario narrativo; cada objeto se usa <b>una sola vez</b>.</li><li>Los cupones se aplican a mano desde Regalos, en la casa y antes de pagar.</li><li>Los dulces se pueden comer o regalar a Carlitos al final del día. El bombón de licor solo lo puede comer un adulto.</li><li>Los objetos también se pueden vender al precio fijado o botar.</li></ul>
  <h3>Carlitos y su salud</h3>
  <p>Carlitos puede tener crisis de salud (los días 4, 8, 12… y de vez en cuando al azar, mientras no esté hospitalizado). Si acumula tres crisis desde su último ingreso, lo hospitalizan: desde la jornada siguiente son tres días a $10.000 cada uno y recibe el alta al tercero. No depende de tus errores profesionales.</p>`,
 'SOBRE LOS DATOS':()=>'<h3>Sobre los datos</h3><p>Los nombres, fotografías, RUT, números de documento, firmas, folios, recetas, instituciones, fechas y situaciones de RECIPE, PLEASE se utilizan como parte de una simulación narrativa. Los personajes, pacientes, establecimientos y profesionales están creados para el videojuego; cualquier parecido con la realidad es coincidencia. Los casos no reemplazan las normas ni los procedimientos sanitarios vigentes.</p>'
 };
 if(tab==='MEDICAMENTOS')return catalogHtml();
 return (tabs[tab]||tabs.INICIO)();
}

function catalogHtml(){
 const grHtml=GROUP_NAMES.map(gr=>{
  const rows=Object.entries(DRUGS).filter(([id,d])=>d.group===gr).map(([id,d])=>`<div class="catalog-entry"><b>${escapeText(d.name)}</b> · ${escapeText(d.mg)} <small>${escapeText(d.form)}${d.kind==='RETENIDA_COMUN'?' · RETENIDA (SIN LIBRO)':''}${d.reg?' · CHEQUE · Nº de Registro '+escapeText(d.reg):''}</small></div>`).join('');
  return `<details class="catalog-group"><summary>${escapeText(gr)}</summary>${rows}</details>`;
 }).join('');
 const controlled=CONTROLLED_IDS.map(id=>`<div class="catalog-entry"><b>${escapeText(drugName(id))}</b> · ${DRUGS[id].kind} · ${escapeText(DRUGS[id].pack)}${DRUGS[id].reg?' · <b>Nº de Registro '+escapeText(DRUGS[id].reg)+'</b>':''}</div>`).join('');
 return `<h3>Catálogo de principios activos · Chile 2026</h3><p><b>${SIMPLE_IDS.length} presentaciones no controladas</b> en cinco grupos, más <b>${CONTROLLED_IDS.length} presentaciones sujetas a control legal</b>. Selección inicial referencial y no inventario exhaustivo de registros ISP.</p><p>Las recetas simples no generan folios ni asientos en el libro de control. Las recetas retenidas comunes (p. ej., antibióticos seleccionados, antifúngicos, antiparasitarios y corticoides) se archivan sin folios de libro especial. Condiciones de venta simplificadas para el videojuego, no referencia sanitaria oficial.</p><p><a href="https://registrosanitario.ispch.gob.cl/" target="_blank" rel="noopener noreferrer">Verificador oficial ISP</a></p>${grHtml}<details class="catalog-group"><summary>CONTROL LEGAL · RETENIDA (${RETENIDA_IDS.length})</summary>${RETENIDA_IDS.map(id=>`<div class="catalog-entry"><b>${escapeText(drugName(id))}</b> · ${escapeText(DRUGS[id].pack)}</div>`).join('')}</details><details class="catalog-group"><summary>CONTROL LEGAL · RECETA CHEQUE (${CHEQUE_IDS.length})</summary>${CHEQUE_IDS.map(id=>`<div class="catalog-entry"><b>${escapeText(drugName(id))}</b> · ${escapeText(DRUGS[id].pack)}${DRUGS[id].reg?' · <b>Nº de Registro '+escapeText(DRUGS[id].reg)+'</b>':''}</div>`).join('')}</details>`;
}
function calendarHtml(){
 const now=parseCalendarDate(dateOf(game.day)),weekday=now.getUTCDay(),monthYear=now.toLocaleString('es-CL',{timeZone:'UTC',month:'long',year:'numeric'});
 const start=new Date(Date.UTC(now.getUTCFullYear(),now.getUTCMonth(),1));const last=new Date(Date.UTC(now.getUTCFullYear(),now.getUTCMonth()+1,0));
 const weekdayOffset=(start.getUTCDay()+6)%7;
 let cells='';for(let i=0;i<weekdayOffset;i++)cells+='<span class="calendar-blank"></span>';
 for(let d=1;d<=last.getUTCDate();d++)cells+=`<span class="calendar-date ${d===now.getUTCDate()?'current':''}">${d}</span>`;
 const p=game.scene==='counter'||game.scene==='inspect'?game.patients[game.patientIndex]:null;
 const result=p&&!isPaperEvent(p)&&p.kind!=='bribe'&&p.kind!=='donVictor'?idDocumentCheck(p,{checkRegistry:p.identityScan==='mismatch'}):null;
 return `<div class="overlay" role="dialog" aria-modal="true"><div class="modal calendar-modal"><div class="section-head"><h2>▦ CALENDARIO · ${escapeText(monthYear.toUpperCase())}</h2><button class="smallbtn" data-action="close-modal">✕ CERRAR</button></div><div class="paper"><h3>HOY · ${dateOf(game.day)}</h3><div class="calendar-grid">${['L','M','M','J','V','S','D'].map(t=>`<strong>${t}</strong>`).join('')}${cells}</div><p><b>Reglas de cédulas en el juego:</b> emisión futura = documento sospechoso; vencimiento anterior a hoy = vencida; vencimiento hoy = todavía vigente. La vigencia configurada es de 7 u 8 años.</p>${p&&!p.noDocument&&result&&game.idRequested||p?.gaveId&&!p?.noDocument&&result?`<div class="calendar-status ${result.status==='valid'?'calendar-valid':'calendar-warning'}"><b>Cédula presentada:</b> ${escapeText(result.reason)}<div class="mini">Emisión: ${escapeText(p.idIssued)} · Vencimiento: ${escapeText(p.idExpires)}</div></div>`:''}<p class="tiny">El calendario avanza al cerrar cada jornada; no cambia la fecha del dispositivo.</p></div></div></div>`;
}
const TACA_PRIZE=25000;
const TACA={
 2:['El trato de los lápices',{show:'Muéstrame cómo fue',benja:'¿Y Benjamín qué hizo?'}],
 9:['La inscripción',{attack:'Jugar en ataque',goal:'Jugar al arco'}],
 10:['El gol de la victoria',{pass:'Pasarle la pelota a Carlitos',shoot:'Tirar al arco'}]
};
function tacaPending(){
 return game?.scene==='home'&&Object.prototype.hasOwnProperty.call(TACA,game.day)&&!game.carlitosArc?.[game.day]?.closed;
}
function tacaHtml(){
 if(!tacaPending())return '';
 const day=game.day;
 const [title,options]=TACA[day];
 const choice=game.carlitosArc?.[day]?.choice;
 const intro=game.carlitosArc?.[2]?.choice;
 const role=game.carlitosArc?.[9]?.choice;
 const img=(name,alt)=>`<img class="taca-${name}" src="${assetUrl('assets/carlitos/'+name+'.webp')}" alt="${alt}">`;
 let text,visual;
 if(day===2){
  text=choice==='show'?'Ya, visto desde acá, fue peor. ¡Le pegué al arco equivocado!':choice==='benja'?'El Benja también se equivocó de arco. Empatamos y acordamos buscar pareja para el campeonato del barrio.':'El Benja me cambió dos lápices por un turno en el taca-taca del recreo. Metí un gol al tiro. Fue en mi propio arco, pero igual cuenta como gol, ¿cierto?';
  visual=img('jugador','Carlitos sonríe')+`<div class="taca-lapices ${choice==='show'?'autogol':''}" aria-hidden="true"><i></i><i></i><b></b></div>`;
 }else if(day===9){
  const callback=intro==='show'?'Esta vez te voy a mostrar cuál es nuestro arco. ':intro==='benja'?'El Benja inscribió a su hermana. ':'';
  text=choice==='attack'?'Ya, tú adelante. Yo me quedo al arco. Si grito «¡mía!», es que de verdad es mía.':choice==='goal'?'Tú al arco entonces. Yo busco el gol. Te prometo mirar a cuál le estoy pegando.':callback+'Te puse de pareja. Si ganamos, nos dan un trofeo. Si perdemos, igual hay completos.';
  visual=img('jugador','Carlitos levanta la ficha de inscripción');
 }else{
  const roleLine=role==='goal'?'Tú nos cuidaste el arco todo el partido. ':role==='attack'?'Tú partiste en ataque. ':'';
  text=choice==='pass'?'¡Viste que te convenía jugar conmigo! Ese sí fue en el arco correcto.':choice==='shoot'?'¡Golazo! Yo voy a decir que fue jugada preparada.':roleLine+'Vamos dos a dos y queda una pelota. ¿Cómo la jugamos?';
  visual=img('mesa','Mesa de taca-taca')+'<span class="taca-ball" aria-hidden="true"></span>'+
   (choice?img('trofeo','Carlitos y su papá levantan el trofeo'):'')+`<span class="taca-score">${choice?'¡Victoria! · 3 a 2':'2 a 2'}</span>`;
 }
 return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="taca-title"><div class="modal taca-modal">
 <div class="section-head"><h2 id="taca-title">${title}</h2><span class="pill">Día ${day} · Fin del turno</span></div>
 ${day===2?`<blockquote class="taca-diary">${SCHOOL_STORIES[1]}</blockquote>`:''}
 <div class="taca-scene taca-day-${day}${day===10&&choice?' taca-scored taca-shot-'+choice:''}">${visual}</div>
 <p class="taca-speech"><b>Carlitos</b><br>«${escapeText(text)}»</p>${day===10&&choice?`<p class="taca-prize" role="status"><b>🏆 ¡Campeones!</b> Premio de $${TACA_PRIZE.toLocaleString('es-CL')} · Ánimo +20 para Carlitos y QF.</p>`:''}
 <div class="btn-row">${choice?btn('Cerrar','taca-close','cream'):Object.entries(options).map(([key,label])=>btn(label,'taca-choice','cream',`data-choice="${key}"`)).join('')}</div></div></div>`;
}
function tacaChoose(choice){
 if(ui.modal!=='taca'||!tacaPending()||game.carlitosArc?.[game.day]?.choice)return;
 if(!Object.prototype.hasOwnProperty.call(TACA[game.day][1],choice))return;
 if(!game.carlitosArc)game.carlitosArc={};
 game.carlitosArc[game.day]={choice,closed:false};
 if(game.day===10&&!TACA_PREVIEW){
  // Ganar el campeonato: premio en dinero y ánimo para Carlitos y QF.
  game.cash+=TACA_PRIZE;changeMood('carlitos',20,'Ganó el campeonato de taca-taca');changeMood('qf',20,'Ganó el campeonato de taca-taca');
  record(`Campeonato de taca-taca ganado: premio de $${TACA_PRIZE.toLocaleString('es-CL')} y +20 de ánimo para Carlitos y QF.`);
 }
 save();render();
}
function tacaClose(){
 if(ui.modal!=='taca'||!tacaPending()||!game.carlitosArc?.[game.day]?.choice)return;
 game.carlitosArc[game.day].closed=true;ui.modal=null;
 if(TACA_PREVIEW){
  const next={2:9,9:10}[game.day];
  if(next){openTacaPreview(next);return;}
  game=null;menuHtml();
  return;
 }
 save();render();
}
function openTacaPreview(day){
 game.scene='close';game.day=day;game.dayPay=false;game.daySummary=null;
 closeDayGoHome();
}

function modalHtml(){
 if(['start-choice','prologue','practice-help','practice-complete'].includes(ui.modal))return onboardingModal();let m=ui.modal;if(!m)return '';
 if(m==='taca')return tacaHtml();
 if(m==='compare-documents')return compareDocumentsHtml(game.patients[game.patientIndex]);
 if(m==='return-reason'){
  const group=ui.returnCategory;
  const choice=ui.returnReason;
  return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="return-reason-title"><div class="modal return-reason-modal">
   <div class="section-head"><h2 id="return-reason-title">DEVOLVER RECETA</h2></div>
   <div class="return-reason-layout">
    <nav class="return-categories" aria-label="Categorías de devolución">
     ${RETURN_REASON_GROUPS.map(([label],index)=>btn(label,'return-category',index===group?'green':'dark',`data-index="${index}" aria-pressed="${index===group}"`)).join('')}
    </nav>
    <section class="paper return-reasons" aria-label="${escapeText(RETURN_REASON_GROUPS[group][0])}">
     ${RETURN_REASON_GROUPS[group][1].map(key=>btn(RETURN_REASONS[key],'select-return-reason',key===choice?'green':'cream',`data-reason="${key}" aria-pressed="${key===choice}"`)).join('')}
    </section>
   </div>
   <p class="tiny">Elige un solo motivo. Si hay más de un motivo válido, cualquiera cuenta como correcto.</p>
   <p class="small" role="status">${choice?'Motivo seleccionado: '+escapeText(RETURN_REASONS[choice]):'Selecciona un motivo.'}</p>
   <div class="btn-row">${btn('Confirmar','confirm-return-reason','green',choice?'':'disabled')}${btn('Cancelar','close-modal','dark')}</div>
  </div></div>`;
 }
 if(m==='qr-used'){
  const p=game.patients?.[game.patientIndex];
  if(!p||p.done||p.qrValidation!=='dispensed')return '';
  const previous=electronicUseRecord(p);
  return `<div class="overlay used-rx-overlay" role="dialog" aria-modal="true" aria-label="Receta electrónica ya despachada"><div class="modal used-rx-modal">
    <div class="used-rx-stamp">▦ VERIFICADOR DE RECETAS ELECTRÓNICAS</div>
    <h2>RECETA DESPACHADA</h2>
    <div class="paper"><p>El código electrónico <b>${escapeText(p.folio)}</b> ya figura como dispensado.</p>
    <p><b>Paciente:</b> ${escapeText(p.name)}<br><b>Medicamento:</b> ${escapeText(drugName(p.drug))}</p>
    ${previous?`<p class="mini">Primer despacho registrado: ${escapeText(dateOf(previous.day))} · ${escapeText(previous.ref||'Registro electrónico')}</p>`:''}
    <p class="warning">Un segundo despacho con este código sería irregular.</p></div>
    <p class="small">Puedes destruir la copia presentada o devolverla. Si la devuelves, el paciente podría intentar usarla otro día.</p>
    <div class="btn-row">${btn('✕ DESTRUIR RECETA','destroy-used-qr','red')}${btn('↶ DEVOLVER RECETA','return-used-qr','amber')}${btn('VOLVER AL MESÓN','close-modal','cream')}</div>
   </div></div>`;
 }
 if(m==='fingerprint'){
  const p=game.patients?.[game.patientIndex];if(!p)return '';
  const phase=ui.fingerprintPhase||'ready';
  const result=p.identityScan;
  const state=result==='match'?'match':result==='mismatch'?'mismatch':phase;
  return `<div class="overlay fingerprint-overlay" role="dialog" aria-modal="true" aria-label="Lector de identidad"><div class="modal fingerprint-modal">
   <div class="section-head"><h2>▧ VERIFICACIÓN DE IDENTIDAD</h2><button class="smallbtn" data-action="close-modal" ${phase==='scanning'?'disabled':''}>✕</button></div>
   <div class="fingerprint-reader ${state}">
    <div class="fingerprint-info"><span>LECTOR DE HUELLA</span><span>${phase==='scanning'?'ANALIZANDO...':result?'RESULTADO REGISTRADO':'ESPERANDO DEDO'}</span></div>
    <div class="fingerprint-console">
      <div class="scanner-housing"><div class="scanner-glass"><svg class="fingerprint-lines" viewBox="0 0 120 132" aria-hidden="true"><g fill="none" stroke="#a9e1cd" stroke-width="3" stroke-linecap="round"><path d="M59 124C17 119 12 77 16 51 21 22 42 13 61 12c34-1 52 31 47 60-3 20-7 41-26 51"/><path d="M58 112C27 108 23 76 26 54 29 34 43 24 61 24c22 0 38 21 36 43-1 18-6 38-20 46"/><path d="M58 102C37 99 35 74 36 58c2-16 9-25 26-25 19 0 28 17 26 34-2 15-6 28-18 35"/><path d="M58 90C47 87 44 72 46 58c1-11 6-15 16-15 13 0 18 11 16 24-2 13-4 20-12 24"/><path d="M58 79c-3-4-4-14-2-21 1-7 10-7 11 0 2 9 0 17-4 21"/></g></svg><div class="scan-line"></div></div><div class="fingerprint-led"></div><div class="fingerprint-label">LECTOR 01</div></div>
      <div class="fingerprint-hand"><svg viewBox="0 0 170 150" aria-hidden="true"><path d="M55 146 L55 74 Q55 60 68 60 Q81 60 81 74 L81 30 Q81 14 96 14 Q111 14 111 30 L111 78 Q114 68 121 69 Q143 70 140 92 L136 128 L128 147Z" fill="#edc298" stroke="#86583f" stroke-width="5"/><path d="M85 29 L108 29 M62 76 L79 76" stroke="#c28b69" stroke-width="3"/></svg></div>
    </div>
   </div>
   <div class="fingerprint-result" aria-live="polite">${result==='match'?'<strong class="fingerprint-pass">● IDENTIDAD CONFIRMADA</strong><p>La huella corresponde a la identidad registrada en la cédula. Los cambios de apariencia no constituyen suplantación.</p>':result==='mismatch'?'<strong class="fingerprint-deny">● IDENTIDAD NO COINCIDENTE</strong><p>La huella no coincide con la registrada para esta cédula. Notifica a Policía por carnet presuntamente falsificado.</p>':phase==='scanning'?'<strong>COMPARANDO HUELLAS...</strong><p>Analizando la impresión del lector.</p>':'<strong>COLOQUE EL DEDO EN EL LECTOR</strong><p>Compara la identidad de la persona con el documento presentado.</p>'}</div>
   <div class="btn-row">${!result&&phase!=='scanning'?btn('COLOCAR DEDO · INICIAR','scan-fingerprint','green'):''}${phase!=='scanning'?btn(result?'CERRAR RESULTADO':'VOLVER A INSPECCIÓN','close-modal','cream'):''}</div>
  </div></div>`;
 }
 if(m==='calendar')return calendarHtml();
 if(m==='phone'){
  let notes=(game.notifications||[]).filter(n=>ui.notificationFilter==='Todos'||n.type===ui.notificationFilter);
  return `<div class="overlay" role="dialog" aria-modal="true"><div class="modal phone-panel"><div class="section-head"><h2>☎ TELÉFONO · NOTIFICACIONES</h2><button class="smallbtn" data-action="close-modal">✕ CERRAR</button></div><p class="small">Archivo permanente de alertas. Puedes consultar folios robados, pedidos, avisos SIS y observaciones.</p><div class="tabs">${['Todos','alerta','pedido','sistema','seremi','seguridad'].map(f=>`<button class="tab ${ui.notificationFilter===f?'active':''}" data-action="phone-filter" data-filter="${f}">${f==='Todos'?'TODOS':f.toUpperCase()}</button>`).join('')}</div><div class="notification-list">${notes.map(n=>`<article class="notification-item"><div class="notification-meta">DÍA ${z(n.day)} · ${escapeText(n.type.toUpperCase())}</div><h3>${escapeText(n.title)}</h3><p>${escapeText(n.body)}</p></article>`).join('')||'<p>Sin notificaciones de este tipo.</p>'}</div><div class="btn-row">${btn('VOLVER AL JUEGO','close-modal','cream')}</div></div></div>`;
 }
 if(m==='sis-intro')return `<div class="overlay" role="dialog" aria-modal="true" aria-labelledby="sis-intro-title"><div class="modal sis-intro-modal"><div class="sis-intro-icon" aria-hidden="true">▣</div><h2 id="sis-intro-title">¡NUEVO BOTÓN! REGISTRO SIS</h2><p>Consulta si un prescriptor está inscrito y compara su firma. Lo encuentras al pulsar «VERIFICAR».</p><div class="btn-row">${btn('ENTENDIDO','sis-intro-ok','green')}</div></div></div>`;
 if(m==='sis'){
  const p=game.patients[game.patientIndex];
  const found=p&&game.sisChecks[p.folio];
  return `<div class="overlay" role="dialog" aria-modal="true"><div class="modal sis-panel"><div class="section-head"><h2>▣ REGISTRO SIS · SIMULACIÓN</h2><button class="smallbtn" data-action="close-modal">✕</button></div><div class="paper"><p class="mini">Registro de prestadores <b>ficticios</b> del videojuego. No realiza consultas reales en internet.</p>${p&&p.kind!=='bribe'?`<div class="form-line"><label>Prescriptor indicado en receta</label><div class="field static-field">${escapeText(prescriberNameOnPrescription(p))}</div></div><div class="form-line"><label>RUT indicado en la receta</label><div class="field static-field">${escapeText(p.prescriberRut||'Pendiente')}</div></div>${found?sisResultHtml(p):'<p>Presiona CONSULTAR para buscar al profesional en el registro ficticio del juego.</p>'}`:'<p>Abre este registro durante una atención para verificar al prescriptor.</p>'}</div><div class="btn-row">${p&&p.kind!=='bribe'?btn('⌕ CONSULTAR REGISTRO','sis-check','blue'):''}${btn('CERRAR','close-modal','cream')}</div></div></div>`;
 }
 if(m==='gift-reveal'){
  const g=game.pendingGift;
  if(!g)return '';
  const once=g.event===ONCE_GIFT;
  const choice=game.neighborsOnce?.choice;
  const onceText=choice==='share'
   ?'Repartes las seis sopaipillas. Desde la fila alguien dice «con pebre, obvio». Por primera vez en toda la tarde, los dos vecinos que venían discutiendo se ponen de acuerdo.'
   :choice==='home'
    ?'Envuelves el plato para llevarlo a casa. Carlitos ya tiene con quién compartir la once.'
    :'Antes de cerrar, una vecina te deja seis sopaipillas calentitas. «Están recién hechas. Usté vea con quién las comparte».';
  const onceButtons=choice?btn('LISTO','once-close','green'):btn('LLEVAR A CASA','once-home','green')+btn('COMPARTIR EN LA FILA','once-share','cream');
  return `<div class="overlay gift-overlay" role="dialog" aria-modal="true" aria-label="${once?'La once de los vecinos':'Regalo sorpresa de un paciente'}"><div class="modal gift-reveal"><div class="gift-rays">✦ &nbsp; ✧ &nbsp; ✦</div><div class="eyebrow">¡UNA SORPRESA!</div><h2>${once?'LA ONCE DE LOS VECINOS':'REGALO DE PACIENTE'}</h2><div class="gift-hero">${giftSprite(g)}</div><h3>${escapeText(g.item)}</h3><p>${once?onceText:g.effect==='coupon'?`Podrás descontar ${g.pct}% de una compra de medicamentos de Carlitos en casa.`:g.item===CLEAN_CLOTH?'Creo que esto me puede servir.':g.item===DIRTY_CLOTH?'Don Victor dejó esta tela sobre el mesón. Está sucia, pero quizá se pueda lavar y servir para algo.':g.item==='Papel en chino'?'El visitante te dejó una nota en mandarín. No es una receta, pero quizá quieras conservarla.':isSweet(g)?'Puedes comer este dulce durante el turno, venderlo o guardarlo para regalarlo a Carlitos al llegar a casa (excepto el bombón con licor).':`Un objeto curioso que puedes guardar en tu colección.`}</p><div class="btn-row">${once?onceButtons:btn('GUARDAR REGALO','keep-gift','green')+btn('VER INVENTARIO','gift-inventory','cream')+btn('NO GUARDAR','decline-gift','dark')}</div></div></div>`;
 }
 if(m==='gifts'){
   const items=(game.gifts||[]).map((g,i)=>{
     const price=giftSalePrice(g), available=!g.used;
     if(g.item===DIRTY_CLOTH||g.item===CLEAN_CLOTH){
      const dirty=g.item===DIRTY_CLOTH;
      const controls=available?`<div class="gift-controls cloth-actions">
        ${dirty?`<button class="smallbtn gift-action" data-action="sell-gift" data-index="${i}">Vender · ${pesos(price)}</button>`:''}
        <button class="smallbtn gift-action gift-drop" data-action="discard-gift" data-index="${i}">Botar</button>
        ${dirty?`<button class="smallbtn gift-action" data-action="wash-school-cloth" data-index="${i}">Lavar</button>`:''}
       </div>`:`<span class="tag-dim">${escapeText(g.usedBy)} · día ${g.usedOnDay}</span>`;
      return `<article class="gift-item ${available?'':'used'}">${giftSprite(g)}<div class="gift-info"><b>${escapeText(g.item)}</b><p class="small">${dirty?'Tela de Don Victor':'creo que esto me puede servir'}</p></div>${controls}</article>`;
     }
     const sweet=isSweet(g),giveAllowed=available&&canGiftCarlitos(g)&&game.scene==='home';
     const priceText=price===null?'Valor de venta no definido':`Valor de venta: ${pesos(price)}`;
     const disabled=(okay,reason='Acción no disponible para este objeto')=>okay?'':` disabled title="${escapeText(reason)}"`;
     const controls=!available?`<span class="tag-dim">${escapeText(g.usedBy||'UTILIZADO')} · día ${g.usedOnDay||game.day}</span>`:
       `<div class="gift-controls gift-four-actions">
         <button class="smallbtn gift-action" data-action="give-sweet" data-index="${i}" ${disabled(giveAllowed,!sweet?'Este objeto no es un dulce':!canGiftCarlitos(g)?'No se le puede dar licor a un niño':'Solo disponible al terminar el turno en casa')}>REGALAR A CARLITOS</button>
         <button class="smallbtn gift-action" data-action="eat-sweet" data-index="${i}" ${disabled(sweet,'Solo se pueden comer dulces')}>COMER</button>
         <button class="smallbtn gift-action" data-action="sell-gift" data-index="${i}" ${disabled(price!==null,'Este objeto aún no tiene valor de venta')}>VENDER${price===null?'':` · ${pesos(price)}`}</button>
         <button class="smallbtn gift-action gift-drop" data-action="discard-gift" data-index="${i}">BOTAR</button>
       </div>${g.effect==='coupon'&&game.scene==='home'&&!game.daySummary?`<button class="smallbtn gift-coupon-btn" data-action="apply-coupon" data-index="${i}">APLICAR CUPÓN ${g.pct}% A TRATAMIENTO</button>`:''}`;
     return `<article class="gift-item ${available?'':'used'}">${giftSprite(g)}<div class="gift-info"><b>${escapeText(g.item)}</b><p class="small">Día ${g.day} · ${g.effect==='coupon'?'Cupón de '+g.pct+'%':sweet?'Dulce consumible':g.item==='Luca'?'Dinero':'Coleccionable'}</p><p class="small gift-price">${priceText}</p></div>${controls}</article>`;
   }).join('');
   return `<div class="overlay" role="dialog" aria-modal="true" aria-label="Inventario de regalos"><div class="modal gifts-modal"><div class="section-head"><h2>♢ REGALOS DE PACIENTES</h2><button class="smallbtn" data-action="close-modal">✕ CERRAR</button></div><p class="small">Cada obsequio se puede usar una sola vez. Los dulces mejoran el ánimo, los cupones abaratan el tratamiento y los recuerdos pueden venderse o descartarse.</p><div class="mood-duo">${moodBar('QF',game.moodQf)}${moodBar('CARLITOS',game.moodCarlitos)}</div><div class="gift-list">${items||'<p>Todavía no tienes regalos. Algunos pacientes dejan sorpresas después de atenderlos.</p>'}</div><div class="btn-row">${btn('VOLVER AL JUEGO','close-modal','cream')}</div></div></div>`;
 }
 if(m==='manual')return `<div class="overlay" role="dialog" aria-modal="true"><div class="modal"><div class="section-head"><h2>▤ MANUAL DEL FARMACÉUTICO</h2><button class="smallbtn" data-action="close-modal">✕</button></div>${!game.tutorial?btn('REPETIR TURNO DE PRÁCTICA · DÍA 0','practice-replay','green'):''}<div class="tabs">${MANUAL_TABS.map(t=>`<button class="tab ${ui.manual===t?'active':''}" data-action="manual-tab" data-tab="${t}">${t}</button>`).join('')}</div><div class="paper">${manualTabHtml(ui.manual)}</div><p class="tiny muted">El marco normativo es intencionalmente simplificado para la ficción; no utilices este manual como instrucción profesional sanitaria.</p></div></div>`;
 if(m==='report')return `<div class="overlay" role="dialog" aria-modal="true"><div class="modal"><div class="section-head"><h2>! REPORTAR DIFERENCIA DE PEDIDO</h2><button class="smallbtn" data-action="close-modal">✕</button></div><div class="paper"><p>Guía <b>${game.delivery.id}</b> · ${game.delivery.lines?game.delivery.lines.map(x=>drugName(x.drug)).join(" / "):drugName(game.delivery.drug)}</p><p>Unidades documentadas: <b>${game.delivery.expected}</b></p><div class="form-line"><label for="actualCount">Cantidad físicamente recibida</label><input id="actualCount" class="field" type="number" min="0" max="40" value="${ui.reportCount}"></div><div class="form-line"><label for="reportKind">Tipo de incidencia</label><select id="reportKind" class="field"><option value="" selected>Seleccionar incidencia…</option><option value="missing" ${ui.reportType==='missing'?'selected':''}>Faltante</option><option value="surplus" ${ui.reportType==='surplus'?'selected':''}>Sobrante</option><option value="wrong" ${ui.reportType==='wrong'?'selected':''}>Principio activo / concentración incorrecta</option><option value="damaged" ${ui.reportType==='damaged'?'selected':''}>Caja dañada</option></select></div><p class="mini">Solo se ingresa al sistema stock apto; las unidades en cuarentena se mantienen separadas.</p></div><div class="btn-row">${btn('CONFIRMAR REPORTE','confirm-report','green')}${btn('CANCELAR','close-modal','dark')}</div></div></div>`;
 if(m==='notify'){
  const practicePolice=Boolean(game.tutorial&&game.patientIndex===2);
  const p=game.patients[game.patientIndex];
  return `<div class="overlay" role="dialog" aria-modal="true" aria-label="Notificar a las autoridades"><div class="modal notify-menu ${practicePolice?'practice-police':''}"><div class="section-head"><h2>⚠ NOTIFICAR O RETENER</h2><button class="smallbtn" data-action="close-modal">✕</button></div><p class="notify-intro">${practicePolice?'La huella no coincide con el DNI. En este caso, selecciona «Avisar a Policía · Carnet presuntamente falsificado».':'Elige qué hacer con el documento o cómo informar el incidente.'}</p><div class="notify-options"><button class="notify-option" data-action="notify-police-bribe"><span class="notify-option-icon">⚖</span><span><b>AVISAR A POLICÍA</b><small>Intento de soborno</small></span></button><button class="notify-option" data-action="notify-police-id"><span class="notify-option-icon">▣</span><span><b>AVISAR A POLICÍA</b><small>Carnet presuntamente falsificado</small></span></button><button class="notify-option" data-action="notify-police-illegal-practice"><span class="notify-option-icon">⚖</span><span><b>AVISAR A POLICÍA</b><small>${ILLEGAL_PRACTICE_REASON} · se denuncia al emisor</small></span></button><button class="notify-option" data-action="notify-seremi-rx"><span class="notify-option-icon">✚</span><span><b>AVISAR A SEREMI</b><small>Receta presuntamente falsificada · se retiene la receta</small></span></button>${p?.folio&&!isPaperEvent(p)&&p.qrValidation!=='dispensed'?`<button class="notify-option" data-action="retain-unreported"><span class="notify-option-icon">▣</span><span><b>RETENER SIN NOTIFICAR</b><small>Opción de benevolencia · el paciente se retira</small></span></button>`:''}</div><p class="tiny notify-footnote">La denuncia no significa que exista una condena. Las secuencias representan desenlaces narrativos ficticios del juego.</p><div class="btn-row">${btn('CANCELAR Y SEGUIR REVISANDO','close-modal','cream')}</div></div></div>`;
 }
 if(m==='notify-animation'){
  const o=ui.notifyOutcome;if(!o)return '';
  const p=game.patients?.[game.patientIndex]||{};
  const jail=Boolean(o.imprisoned)||(o.success&&o.kind.startsWith('police-')&&!o.investigation);
  const fine=o.success&&o.kind==='seremi-rx'&&!o.warning&&!o.imprisoned&&!o.callConfirmed;
  return `<div class="overlay authority-overlay" role="dialog" aria-modal="true" aria-label="Resultado narrativo de la notificación"><div class="modal notify-result"><div class="section-head"><h2>${o.kind==='seremi-rx'?'✚ SEREMI DE SALUD':'⚖ POLICÍA'}</h2></div><div class="authority-scene ${jail?'police-scene':fine?'seremi-scene':'review-scene'}">
  <div class="authority-backdrop"><span class="authority-brick"></span><span class="authority-brick"></span><span class="authority-brick"></span></div>
  <div class="authority-subject">${o.detainedPrescriber?portraitImg(60,o.detainedPrescriber):subjectPortrait(p,'stage')}</div>
  ${jail?`<div class="jail-bars"><i></i><i></i><i></i><i></i><i></i></div><div class="authority-scene-label">DEPENDENCIAS POLICIALES</div>`:fine?`<div class="fine-ticket"><span>ACTA SANITARIA</span><b>MULTA</b><small>Notificación del caso</small></div>`:`<div class="review-ticket"><b>${o.callConfirmed||o.investigation?'AVISO REGISTRADO':o.warning?'PRIMERA ADVERTENCIA':'EN REVISIÓN'}</b><small>${o.investigation?'Emisora en investigación':o.callConfirmed?'Receta falsa confirmada':o.warning?'Receta cheque requerida':'Sin antecedentes suficientes'}</small></div>`}
  </div><div class="notify-result-copy"><h3>${o.title}</h3><p>${o.description}</p></div><div class="btn-row">${btn('CONTINUAR LA JORNADA →','notify-animation-done','green')}</div></div></div>`;
 }
 if(m==='police')return `<div class="overlay" role="dialog" aria-modal="true"><div class="modal"><div class="section-head"><h2>☎ POLICÍA · AVISO FICTICIO</h2><button class="smallbtn" data-action="close-modal">✕</button></div><div class="paper"><h3>Posible falsedad documental</h3><p>Este aviso queda registrado ante la policía.</p><p>Verifica documentos y título declarado: foto discordante, suplantación profesional, folio denunciado o firma no concordante pueden fundamentar una sospecha; devolver sin denunciar sigue siendo posible. El juego registra solo una denuncia ficticia.</p><p class="mini">Paciente: ${escapeText(game.patients[game.patientIndex].name)}.</p></div><div class="btn-row">${btn('CONFIRMAR AVISO','confirm-police','red')}${btn('CANCELAR','close-modal','cream')}</div></div></div>`;
 if(m==='proof'){
  const issue=game.inspectionIssue||{}, error=issue.error||game.errors.find(x=>x.desc===issue.text);
  const archived=error?.kind==='double'?((game.priorRxUses||[]).find(x=>x.folio===error.rxFolio&&x.drug===error.drug)):null;
  const pending=issue.type==='book'?((issue.kind==='dispatch'?game.dispatches:game.receipts).filter(x=>x.day===issue.day&&x.drug===issue.drug)):[];
  const details=archived?`<div class="proof-list"><p><b>Receta:</b> ${escapeText(archived.folio)}</p><p><b>Medicamento:</b> ${escapeText(drugName(archived.drug))}</p><p><b>Paciente:</b> ${escapeText(archived.patient)}</p><p><b>Fecha de primer despacho:</b> ${dateOf(archived.day)}</p><p><b>Registro:</b> ${escapeText(archived.ref)}</p><p class="mini">La misma receta consta como dispensada en el archivo previo de la farmacia. La fecha de emisión de este caso es ${dateOf(archived.issuedOn)}.</p></div>`:pending.length?`<p><b>${pending.length} movimiento(s) archivado(s).</b></p><p>Presentación: ${escapeText(drugName(issue.drug))} · Fecha original: ${dateOf(issue.day)}</p><p>${escapeText(pending.map(r=>r.ref||r.rxFolio).join(', '))}</p>`:issue.type==='gap'?`<p>Diferencia inventario: <b>${game.inventoryGap?.[issue.drug]||0} caja(s)</b> de ${escapeText(drugName(issue.drug))}. Verificar el recuento físico antes de ajustar el libro.</p>`:'';
  const risks=inspectionReviewReasons(issue,error);
  const explanation=risks.length?`<h4>¿Por qué importa?</h4>${risks.map(reason=>`<p>${escapeText(REVIEW_RISKS[reason]||REVIEW_RISKS['general-review'])}</p>`).join('')}`:'';
  const resolution=issue.proof?'Puedes transcribir el movimiento pendiente con el documento original.':archived?'El historial acredita el primer despacho del folio.':issue.type==='clean'?'':'El expediente no cuenta con un asiento pendiente que pueda rectificarse aquí.';
  return `<div class="overlay" role="dialog" aria-modal="true" aria-label="Respaldo documental"><div class="modal"><div class="section-head"><h2>▣ RESPALDO DOCUMENTAL</h2><button class="smallbtn" data-action="close-modal" aria-label="Cerrar respaldo documental">✕</button></div><div class="paper"><h3>Expediente de revisión</h3><p>${escapeText(issue.text||'Revisión de registros.')}</p>${details}${explanation}${resolution?`<hr><p class="small">${resolution}</p>`:''}</div><div class="btn-row">${btn('VOLVER A FISCALIZACIÓN','close-modal','cream')}</div></div></div>`;
 }
 if(m==='translate-paper')return `<div class="overlay" role="dialog" aria-modal="true"><div class="modal"><h2>TRADUCCIÓN DEL PAPEL</h2><div class="paper"><p class="foreign-symbols">有时候，只有翻译才能理解一些事情。</p><p>«A veces solo hay que traducir para entender algo».</p></div><div class="btn-row">${btn('CERRAR','close-modal','cream')}</div></div></div>`;
 if(m==='history')return `<div class="overlay" role="dialog" aria-modal="true"><div class="modal"><div class="section-head"><h2>▣ HISTORIAL DE JORNADAS</h2><button class="smallbtn" data-action="close-modal">✕</button></div><div class="paper ledger">${game.history.length?game.history.map(x=>`<div class="ledger-row"><b>${escapeText(x.date)}</b> · ${escapeText(x.message)}</div>`).join(''):'Sin movimientos.'}</div></div></div>`;
 if(m==='menu')return `<div class="overlay" role="dialog" aria-modal="true"><div class="modal"><h2>PAUSA · RECIPE, PLEASE</h2><p>Tu partida se guarda automáticamente en este navegador.</p><div class="btn-row">${btn('CONTINUAR','close-modal','green')}${btn('GUARDAR PARTIDA','save','cream')}${btn('IR AL INICIO','go-menu','amber')}${btn('REINICIAR PARTIDA','confirm-new','red')}</div></div></div>`;
 if(m==='confirm-new')return `<div class="overlay" role="dialog" aria-modal="true"><div class="modal"><h2>¿COMENZAR DE CERO?</h2><p>Se sustituirá el progreso guardado de esta demo.</p><div class="btn-row">${btn('SÍ, REINICIAR','new','red')}${btn('CANCELAR','close-modal','dark')}</div></div></div>`;
 return '';
}
function inspectionHtml(){
 const issue=game.inspectionIssue||{type:'clean',text:'Revisión de registros y existencias.',proof:false};
 const finished=Boolean(game.inspectionDone);
 const consent=ui.inspectionConsent===issue;
 const result=game.inspectionOutcome||{};
 const relevant=issue.type==='book'?`Movimiento del día ${issue.day} sin registrar: ${issue.kind==='dispatch'?'salida':'ingreso'} de ${drugName(issue.drug)}. El libro requiere transcripción o rectificación.`:issue.type==='error'?'Irregularidad detectada en una atención anterior. El motivo específico consta en esta acta.':issue.type==='gap'?`El stock físico y digital no coincide para ${drugName(issue.drug)}.`:issue.type==='fakeDoctor'?'La identidad profesional consignada no figura en el registro SIS del juego.':'Sin observaciones. No hay motivo de sanción.';
 const title=finished?'FISCALIZACIÓN FINALIZADA':'ACTA DE INSPECCIÓN';
 return `${stage('inspection','FISCALIZACIÓN · SEREMI','Revisión de registros y antecedentes')}<section class="content"><div class="content-grid"><div class="paper"><h2>${title}</h2><p>${escapeText(issue.text||'Revisión de inventario y recetas.')}</p><p class="small">${relevant}</p>${btn('▤ CONSULTAR RESPALDO','proof','cream')}</div><div class="dark-card"><h2>${finished?'RESULTADO REGISTRADO':'DECISIÓN'}</h2>${finished?`<p><b>${result.action==='rectify'?'Rectificación registrada.':issue.type==='clean'?'Fiscalización sin observaciones.':'Observación aceptada.'}</b></p><p>${result.fine?'Multa aplicada una sola vez: '+pesos(result.fine):'Sin multa en esta fiscalización.'}</p><p class="small">El acta ya está cerrada; no se pueden volver a aplicar faltas por el mismo expediente.</p>${btn('CONTINUAR AL CIERRE →','inspection-continue','green')}`:`${issue.type==='clean'?'':`<label class="inspection-consent" for="inspectionConsent"><input id="inspectionConsent" type="checkbox" ${consent?'checked':''}><span>Estoy de acuerdo con la fiscalización, asumo mi responsabilidad y me comprometo a que no se vuelva a repetir.</span></label>`}${btn('REGISTRAR RECTIFICACIÓN Y CERRAR','inspect-rectify','green',issue.proof?'':'disabled')}${btn(issue.type==='clean'?'CERRAR FISCALIZACIÓN':'ACEPTAR OBSERVACIÓN Y CERRAR','inspect-acknowledge','amber',issue.type==='clean'||consent?'':'disabled')}`}</div></div></section>`;
}
function render(){if(!game){menuHtml();return;}if(game.scene==='welcome')ui.modal='start-choice';if(game.scene==='prologue')ui.modal='prologue';if(game.tutorial?.helpOpen)ui.modal='practice-help';if(game.tutorial?.completed)ui.modal='practice-complete';activateDaySevenEnding();ensureDaySevenPatient();ensureSicolasPatient();maybeShowSisIntro();if(!ui.modal&&tacaPending())ui.modal='taca';switch(game.scene){case'welcome':case'prologue':wrap(stage('pharmacy','RECIPE, PLEASE','Antes de abrir'));break;case'briefing':wrap(briefingHtml());break;case'counter':wrap(counterHtml());break;case'inspect':wrap(inspectHtml());break;case'receive':wrap(receiveHtml());break;case'inspector':wrap(inspectionHtml());break;case'close':wrap(closeHtml());break;case'book':wrap(bookHtml());break;case'home':wrap(homeHtml());break;case'gameover':wrap(gameOverHtml());break;default:wrap(briefingHtml())}}
function pushReceipt(drug,qty,ref){if(qty<=0)return;if(DRUGS[drug]?.book){game.stock[drug]+=qty;game.receipts.push({day:game.day,drug,qty,ref,posted:false});}else{game.receiptsNormal.push({day:game.day,drug,qty,ref});} }
function afterReceiving(){game.deliveryDone=true;game.delivery=null;game.inspectedPacks=[];game.boxOpened=false;
 if(eligibleInspection()){game.scene='inspector';game.inspectionIssue=getInspectionIssue();game.inspectionDone=false;game.inspectionResolutionLocked=false}else game.scene='close';save();render();}
function acceptDelivery(){let d=game.delivery;if(!d||!game.boxOpened)return;
 if(d.kind==='multi'&&Array.isArray(d.lines)){
  for(const row of d.lines)pushReceipt(row.drug,row.expected,d.id);
  record(`Guía mixta ${d.id} ingresada: ${d.lines.length} presentaciones y ${d.actual} cajas.`);
  toast('Recepción mixta registrada por presentación.');afterReceiving();return;
 }
 if(d.kind==='pickup'){const r=game.pendingCorrections.find(x=>x.id===d.ref);if(r){game.quarantine[r.drug]=Math.max(0,(game.quarantine[r.drug]||0)-r.amount);game.pendingCorrections=game.pendingCorrections.filter(x=>x!==r)}record(`Retiro documentado de ${d.actual} caja(s) sobrantes en cuarentena.`);toast('Retiro de excedente confirmado');afterReceiving();return}
 const plan=receivePlan(d);
 if(d.kind==='corrected'){
  pushReceipt(d.drug,d.actual,d.id);game.pendingCorrections=game.pendingCorrections.filter(x=>x.id!==d.ref);record(`Guía rectificatoria ${d.id}: +${d.actual} caja(s).`);toast('Rectificación recibida con guía propia');afterReceiving();return;
 }
 if(d.kind==='surplus'){
  pushReceipt(d.drug,d.expected,d.id);game.hidden[d.drug]=(game.hidden[d.drug]||0)+(d.actual-d.expected);
  record(`Sobrante de ${drugName(d.drug)} no informado: ${d.actual-d.expected} caja(s) fuera del inventario oficial.`);toast('El sobrante quedó sin informar. Hay riesgo de inventario.');
 }else if(d.kind==='correct'){
  pushReceipt(d.drug,d.expected,d.id);record(`Pedido ${d.id} ingresado sin diferencias.`);toast('Pedido aceptado');
 }else{
  pushReceipt(d.drug,d.expected,d.id);
  const gap=d.kind==='missing'?d.expected-d.actual:d.kind==='wrong'?d.expected:1;
  if(DRUGS[d.drug].book)game.inventoryGap[d.drug]=(game.inventoryGap[d.drug]||0)+gap;
  addProfessionalError({day:game.day,level:d.kind==='wrong'?'grave':'moderada',reviewReasons:[{missing:'receipt-missing',wrong:'receipt-wrong',damaged:'receipt-damaged'}[d.kind]||'receipt-inconsistent'],desc:`Recepción inconsistente ${d.id}: ${drugName(d.drug)}`,reported:false});
  record(`Recepción ${d.id} ingresada incorrectamente. Diferencia digital/física ${gap} caja(s).`);toast('Se ingresó una cantidad incorrecta; podría haber fiscalización.');
 }
 afterReceiving();
}
function reportDelivery(actual,type){let d=game.delivery;if(!d||!game.boxOpened)return;
 if(d.kind==='multi' && Array.isArray(d.lines)){
   addProfessionalError({day:game.day,level:'leve',reviewReasons:['receipt-unsubstantiated'],desc:`Se notificó una diferencia no sustentada de la guía ${d.id}.`,reported:false});
   for(const row of d.lines)pushReceipt(row.drug,row.expected,d.id);
   record(`Reporte no sustentado sobre guía mixta ${d.id}.`);
   ui.modal=null;afterReceiving();return;
 }
 if(!Number.isInteger(actual)||actual<0||actual>40){toast('Ingresa un número entero válido');return}
 if(!['missing','surplus','wrong','damaged'].includes(type)){toast('Selecciona el tipo de incidencia');return}
 if(type!==d.kind&&!(d.kind==='correct'||d.kind==='corrected')){
  addProfessionalError({day:game.day,level:'moderada',reviewReasons:['receipt-category'],desc:`Incidencia de guía ${d.id} clasificada incorrectamente.`,reported:false});
 }
 if(actual!==d.actual){addProfessionalError({day:game.day,level:'moderada',reviewReasons:['receipt-count'],desc:`Recuento incorrecto en guía ${d.id}.`,reported:false})}
 const plan=receivePlan(d);
 const good=(type===d.kind)?plan.good:Math.min(actual,d.expected);
 const held=Math.max(0,actual-good);
 if(good>0)pushReceipt(d.drug,good,d.id);
 if(held>0)game.quarantine[d.drug]=(game.quarantine[d.drug]||0)+held;
 if(d.kind==='missing'&&d.expected>d.actual)game.pendingCorrections.push({id:d.id,drug:d.drug,amount:d.expected-d.actual,due:game.day+1,mode:'deliver',laboratory:d.laboratory});
 if(d.kind==='surplus'&&d.actual>d.expected)game.pendingCorrections.push({id:d.id,drug:d.drug,amount:d.actual-d.expected,due:game.day+1,mode:'pickup',laboratory:d.laboratory});
 if(d.kind==='wrong')game.pendingCorrections.push({id:d.id,drug:d.drug,amount:d.expected,due:game.day+1,mode:'deliver',laboratory:d.laboratory});
 if(d.kind==='damaged')game.pendingCorrections.push({id:d.id,drug:d.drug,amount:1,due:game.day+1,mode:'deliver',laboratory:d.laboratory});
 record(`Diferencia reportada en guía ${d.id}: ${type}; ingresadas ${good} caja(s), cuarentena ${held}.`);
 ui.modal=null;toast('Reporte enviado. Stock actualizado solo con producto aceptado.');afterReceiving();
}
function nextPatient(){if(game.tutorial){advancePractice();return;}if(offerNeighborsOnce())return;game.patientIndex++;game.patientResult=null;game.patientVerified=false;game.idRequested=false;game.qrChecked=false;ui.inspectZoom=100;
 if(game.patientIndex>=game.patients.length){game.scene='receive';game.delivery=makeDelivery()}else game.scene='counter';save();render()}
function openReport(){let d=game.delivery;if(!d||!game.boxOpened)return;ui.modal='report';ui.reportCount=d.actual;ui.reportType='';render()}
function chooseDonVictor(donate){
 const patient=game.patients[game.patientIndex];
 if(game.scene!=='counter'||patient?.kind!=='donVictor'||patient.done||game.patientResult)return;
 if(donate&&game.cash<VICTOR_DONATION){toast('Necesitas $100 para darle.');return}
 if(donate)game.cash-=VICTOR_DONATION;
 const item=donate?CLEAN_CLOTH:DIRTY_CLOTH;
 const cloth={item,day:game.day,used:false};
 game.pendingGift=cloth;
 ui.modal='gift-reveal';
 patient.done=true;
 const message=donate?'Don Victor te da las gracias. Antes de irse, te deja una tela limpia.':'Don Victor se despide tranquilo y deja una tela sucia sobre el mesón.';
 game.patientResult={message,gift:item};
 record(donate?'Le diste $100 a Don Victor. Te regaló una tela limpia.':'Don Victor dejó una tela sucia en el mesón.');
 save();render();
}
function resolveSchoolCloth(buy){
 if(game.day!==8||game.scene!=='home'||game.schoolClothChoice)return;
 if(buy){
  if(game.cash<SCHOOL_CLOTH_PRICE){toast('Necesitas $10.000 para comprar la tela.');return}
  game.cash-=SCHOOL_CLOTH_PRICE;
  game.schoolClothChoice='bought';
  record('Compraste la tela para el trabajo de Carlitos por $10.000.');
 }else{
  const cloth=availableSchoolCloth();
  if(!cloth){toast('Necesitas una tela limpia de Don Victor.');return}
  cloth.used=true;cloth.usedBy='Trabajo de Carlitos';cloth.usedOnDay=game.day;
  game.schoolClothChoice='donVictor';
  record('Carlitos usó la tela de Don Victor para su trabajo.');
 }
 save();render();
}
function chooseBribe(accept){let p=game.patients[game.patientIndex];if(!p||p.kind!=='bribe')return;
 if(!accept){game.patientResult={message:'Rechazaste el soborno. No se realiza una dispensación ilegal.'};record('Oferta clandestina rechazada.');save();render();return}
 game.illegalCount++;game.undercover=!!p.undercover;game.hidden.clonazepam2=Math.max(0,(game.hidden.clonazepam2||0)-1);
 if(game.undercover){game.gameOver=true;game.scene='gameover';record('Final secreto: cliente encubierto; investigación y condena (ficción).');save();render();return}
 game.earnedIllegal+=50000;game.illegalToday+=50000;game.cash+=50000;game.familyTrust=Math.max(0,game.familyTrust-10);changeMood('qf',-12,'Conflicto por la venta clandestina');addProfessionalError({day:game.day,level:'grave',reviewReasons:['unofficial-sale'],desc:'Dispensación clandestina de medicamento controlado.',reported:false});
 game.patientResult={message:'Recibiste $50.000 fuera del sistema. La operación ilegal podrá tener consecuencias profesionales y familiares posteriores.'};record('El protagonista aceptó una oferta clandestina.');save();render();
}
function applyCoupon(index){
 if(game.scene!=='home'||game.daySummary){toast('Puedes usar cupones solo antes de pagar los gastos familiares');return}
 const g=game.gifts?.[index];if(!g||g.used||g.effect!=='coupon'){toast('Cupón no disponible');return}
 if(game.couponUsedOnDay){toast('Solo un cupón puede aplicarse a este tratamiento');return}
 const pct=Math.max(1,Math.min(70,Number(g.pct)||0));const amount=Math.round(3000*pct/100);
 game.dayExpenses=Math.max(0,game.dayExpenses-amount);game.dayTreatmentCost=Math.max(0,(game.dayTreatmentCost??3000)-amount);g.used=true;game.couponUsedOnDay={pct,amount,index};
 record(`Cupón de ${pct}% aplicado al tratamiento de Carlitos. Ahorro: ${pesos(amount)}.`);save();ui.modal=null;render();toast(`Descuento de ${pct}% aplicado · Ahorras ${pesos(amount)}`)
}
function repayDebt(){if(game.scene!=='home'||game.debt<=0||game.cash<=0)return;const amount=Math.min(game.debt,game.cash);game.cash-=amount;game.debt-=amount;record(`Abono de deuda familiar: ${pesos(amount)}. Saldo de deuda ${pesos(game.debt)}.`);save();render();toast(`Deuda abonada: ${pesos(amount)}`)}
function homePay(defer){
 if(game.daySummary)return;
 let paid=0;if(!defer){paid=Math.max(0,Math.min(game.cash,game.dayExpenses));game.cash-=paid}
 const cost=game.dayTreatmentCost??3000;
 const treatmentCovered=cost===0 || (!defer && paid>=cost); // El tratamiento se prioriza frente a otros gastos.
 let remainder=game.dayExpenses-paid;game.debt+=remainder;
 if(game.couponUsedOnDay)game.couponUsedOnDay=null;
 if(!treatmentCovered){changeMood('carlitos',-18,'Tratamiento del día sin pagar');record('No alcanzó el dinero para pagar el tratamiento de Carlitos.');}
 if(remainder>0)game.familyTrust=Math.max(0,game.familyTrust-(defer?8:5));else game.familyTrust=Math.min(100,game.familyTrust+1);
 game.daySummary={paid:remainder===0,deferred:remainder,total:game.dayExpenses,treatmentCovered};
 record(`Gastos familiares: pagados ${pesos(paid)}, pendientes ${pesos(remainder)}. Tratamiento ${treatmentCovered?'cubierto':'pendiente'}.`);save();render();
}
function notifyAuthority(kind){
 const p=game.patients?.[game.patientIndex];
 if(!p||p.done||game.patientResult){toast('Esta atención ya fue resuelta.');return}
 if(!['police-bribe','police-id','police-illegal-practice','seremi-rx'].includes(kind))return;
 if(!practiceDecisionAllowed(kind==='seremi-rx'?'seremi':'police',kind,null))return;
 // Do not telegraph the correct choice while the player is deciding.
 const illegalPractice=kind==='police-illegal-practice'&&unauthorizedPrescriberCase(p);
 const success=illegalPractice||kind==='police-bribe'&&p.kind==='bribe'||kind==='police-id'&&isForgedIdentityCase(p)||kind==='seremi-rx'&&isReportablePrescription(p);
 const chequeMismatch=kind==='seremi-rx'&&['wrongtype','wrongtypeRepeat'].includes(p.kind)&&p.rxType==='SIMPLE'&&DRUGS[p.drug]?.kind==='CHEQUE';
 const samePatientKey=p.catalogId!==undefined?'id:'+p.catalogId:'rut:'+p.rut;
 const repeat=chequeMismatch&&Number(game.chequeWarnings?.[samePatientKey]||0)>=1;
 const agency=kind==='seremi-rx'?'SEREMI':'POLICÍA';
 if(kind==='police-bribe' && p.kind==='bribe'){
  p.done=true;
  game.patientResult={message:'Se registró la denuncia por intento de soborno. La venta no se realizó.',decision:'police',correct:true,p};
  const report={day:game.day,patient:p.name,folio:'',reason:'Intento de soborno',agency,confirmed:true};
  game.policeReports.push(report);game.authorityReports.push(report);
  addNotice(`autoridad-${game.day}-${game.patientIndex}-soborno`,'AVISO A POLICÍA · SOBORNO','Oferta clandestina denunciada. No se dispensó el medicamento.','seguridad');
  record('Intento de soborno reportado a policía dentro del juego.');
 }else{
  finalizePatient(kind==='seremi-rx'?'seremi':'police',kind);
 }
 if(!game.patientResult)return;
 const stolenOutcome=kind==='seremi-rx'&&isStolenPrescription(p)&&game.patientResult.correct?ui.notifyOutcome:null;
 const sicolasDetained=kind==='seremi-rx'&&p.kind==='sicolasMuros'&&success;
 if(sicolasDetained){
  game.patientResult.detained=true;
  const reason='Derivación SEREMI · falsificación de receta con prescriptor inexistente';
  const report={day:game.day,patient:p.name,folio:p.folio,reason,agency:'POLICÍA',confirmed:true};
  game.policeReports.push(report);
  game.authorityReports.push(report);
  addNotice('sicolas-muros-detenido','POLICÍA · FALSIFICACIÓN DE RECETA','La denuncia de la receta de Clínica Kerito fue derivada a la policía. Sicolás Muros queda detenido.','seguridad');
  record('Sicolás Muros queda detenido por falsificación de receta.');
 }
 if(chequeMismatch){
   game.chequeWarnings[samePatientKey]=(game.chequeWarnings[samePatientKey]||0)+1;
   if(repeat){
     // Se detiene al personaje reincidente en la narrativa, no al jugador.
     game.patientResult.detained=true;
     const policeReferral={day:game.day,patient:p.name,folio:p.folio||'',reason:'Reincidencia de receta falsa tras advertencia SEREMI',agency:'POLICÍA',confirmed:true};
     game.policeReports.push(policeReferral);game.authorityReports.push(policeReferral);
     addNotice('cheque-reincidencia-'+game.day,'SEREMI · REINCIDENCIA',
       'Segunda receta blanca irregular presentada por el mismo paciente; caso derivado a la policía.', 'seremi');
     record('Reincidencia con receta blanca para medicamento de cheque: paciente derivado a la policía.');
   }else{
     // La primera notificación produce una advertencia, sin multa ni cárcel.
     const corrected=Math.random()<0.65;
     game.pendingChequeRevisit={due:game.day+1,corrected,patient:{...p}};
     addNotice('cheque-primer-aviso-'+samePatientKey,'SEREMI · PRIMERA ADVERTENCIA',
       'Se advirtió a '+p.name+' por presentar receta blanca cuando se exigía receta cheque. Podrá presentar un documento correcto.', 'seremi');
     record('Primera advertencia SEREMI por receta de formato incorrecto presentada por '+p.name+'.');
   }
 }
 if(p.kind==='tuguelFake'&&kind==='police-id'&&success){game.specialEvents.tuguelArrested=true;addNotice('tuguel-detenido','POLICÍA · DOCUMENTO FALSIFICADO','Tuguel Pagaba fue detenido tras presentar una identificación fabricada.','seguridad');}if(!game.gameOver)game.scene='counter'; // En casos ordinarios, proseguir atención.
 ui.notifyOutcome={kind,success,agency,warning:chequeMismatch&&!repeat,imprisoned:repeat,title:chequeMismatch?(repeat?'REINCIDENCIA · DETENCIÓN':'PRIMERA ADVERTENCIA · SEREMI'):success?(illegalPractice||(kind==='seremi-rx'&&p.kind==='fakeDoctor')?'DENUNCIA CONTRA EL PRESCRIPTOR':kind==='seremi-rx'?'ACTA DE SANCIÓN':'DETENIDO POR CARABINEROS'):'DENUNCIA RECIBIDA',description:chequeMismatch?(repeat?'Es la segunda denuncia comprobada de este paciente. SEREMI deriva el caso a policía y puedes continuar la jornada.':'SEREMI registra una primera advertencia sin multa. El paciente podrá volver con una receta cheque correcta.'):success?authorityStory(kind,p): 'La notificación quedó registrada, pero el expediente no acredita esta acusación. No se muestra detención ni multa.'};
 if(kind==='seremi-rx'&&(p.callRejected||electronicValidationFailed(p))&&!chequeMismatch&&!sicolasDetained){
  ui.notifyOutcome.callConfirmed=true;
  ui.notifyOutcome.title='AVISO REGISTRADO';
  ui.notifyOutcome.description=electronicValidationFailed(p)
   ?'SEREMI recibió el aviso por la receta electrónica falsa detectada por el verificador. Puedes continuar la jornada.'
   :'SEREMI recibió el aviso por la receta desconocida en la llamada. Puedes continuar la jornada.';
 }
 if(stolenOutcome)ui.notifyOutcome=stolenOutcome;
 if(illegalPractice&&game.patientResult.correct){
  const prescriber=prescriberNameOnPrescription(p);
  const podiatrist=p.kind==='podiatristRx';
  if(!podiatrist){
   game.patientResult.detainedPrescriber=prescriber;
   game.specialEvents.tmDetained=true;
  }
  game.correctedPrescriptionQueue.push({due:game.day+1,patient:{...p},prescriber:'Dra. Elisa Molina',
   quote:podiatrist||declaresTechnologistTitle(p)
    ?'Hola, volví. Me cobraron por una receta que no servía. Ahora me atendió una doctora y aquí está la receta nueva.'
    :'Hola, volví. El falso médico me estafó. Ahora me atendió una doctora de verdad y aquí está la receta nueva.'});
  if(podiatrist){
   ui.notifyOutcome.investigation=true;
   ui.notifyOutcome.title='PRESCRIPCIÓN DE ANTIBIÓTICO · AVISO REGISTRADO';
   ui.notifyOutcome.description='La policía recibe el aviso y abre una investigación sobre la emisora. La paciente volverá mañana con una receta nueva.';
  }else{
   ui.notifyOutcome.imprisoned=true;
   ui.notifyOutcome.detainedPrescriber=prescriber;
   ui.notifyOutcome.title=`${escapeText(prescriber.toUpperCase())} · DETENIDO`;
   ui.notifyOutcome.description=`La policía detiene a ${escapeText(prescriber)} por ejercicio ilegal de la profesión médica. La paciente volverá mañana con una receta nueva.`;
  }
 }
 if(sicolasDetained){
  ui.notifyOutcome.imprisoned=true;
  ui.notifyOutcome.title='SICOLÁS MUROS · DETENIDO';
  ui.notifyOutcome.description='SEREMI deriva el caso a Carabineros. Sicolás Muros, con la cara llena de tatuajes y ni una pizca de vergüenza, se despide con una sonrisa: «Nos vemos pronto, químico».';
 }
 if(p.kind==='tuguelFake'&&success&&kind==='police-id'){ui.notifyOutcome.title='TUGUEL PAGABA · DETENIDO';ui.notifyOutcome.description='La policía recibe la denuncia de la identificación falsificada. Tuguel se va esposado, saludando como si fuera un desfile: «¡Esto es un error, papito! ¡Díganle a mi mamá que estoy bien!». El químico farmacéutico continúa su jornada.';ui.notifyOutcome.imprisoned=true;}ui.modal='notify-animation';save();render();
}
const BOOK_ORIGINS=['briefing','counter','inspect','receive','inspector','close','home','gameover'];
function bookDestination(state){
 if(BOOK_ORIGINS.includes(state.bookReturnScene))return state.bookReturnScene;
 if(state.gameOver)return 'gameover';
 if(state.dayPay)return 'home';
 if(state.patientIndex<state.patients.length)return 'counter';
 if(!state.deliveryDone)return 'receive';
 if(state.inspectionIssue&&!state.inspectionDone)return 'inspector';
 return 'close';
}
function leaveBook(){
 if(game.scene!=='book')return;
 const destination=bookDestination(game);
 game.bookReturnScene=null;
 goScene(destination);
}
function goScene(scene){game.scene=scene;save();render()}
function handleAction(action,target){if(action==='new'){startNew();return}
 if(action==='continue'){game=load()||newState();if(!game.patients?.length&&!game.tutorial&&!['welcome','prologue'].includes(game.scene))prepareDay();ui.modal=game.pendingGift?'gift-reveal':null;render();return}
 if(action==='go-menu'){ui.modal=null;game=null;menuHtml();return}
 if(action==='menu'){if(game?.gameOverReason==='day-seven-false-prescription'){ui.modal=null;game=null;menuHtml();return}ui.modal='menu';render();return}
 if(action==='toggle-top'){ui.topOpen=!ui.topOpen;render();return}
 if(action==='toggle-sound'){ui.soundEnabled=!ui.soundEnabled;render();if(ui.soundEnabled)soundEffect('good');return}
 if(action==='toggle-music'){setMusicEnabled(!ui.musicEnabled);render();if(ui.soundEnabled)soundEffect('good');return}
 if(!game)return;
 if(action==='choose-practice'){chooseOpening('practice');return;}
 if(action==='choose-campaign'){chooseOpening('campaign');return;}
 if(action==='prologue-next'){nextPrologue();return;}
 if(action==='prologue-back'&&game.scene==='prologue'){game.onboarding.step=Math.max(0,game.onboarding.step-1);save();render();return;}
 if(action==='practice-dismiss'&&game.tutorial){game.tutorial.helpOpen=false;game.tutorial.feedback=null;ui.modal=null;save();render();return;}
 if(action==='practice-help'&&game.tutorial){game.tutorial.helpOpen=true;ui.modal='practice-help';render();return;}
 if(action==='practice-finish'&&game.tutorial?.completed){finishPractice();return;}
 if(action==='practice-exit'&&game.tutorial){finishPractice();return;}
 if(action==='practice-replay'&&!game.tutorial){startPractice(JSON.parse(JSON.stringify(game)));return;}
 if(game.gameOverReason==='day-seven-false-prescription'){
  if(action==='day-seven-credits'){game.daySevenConsequence.creditsShown=true;save();render();return;}
  if(!['close-modal','confirm-new','save','history'].includes(action))return;
 }
 if(action==='taca-choice'){tacaChoose(target.dataset.choice);return;}
 if(action==='taca-close'){tacaClose();return;}
 if(action==='sis-intro-ok'){ui.modal=null;save();render();return}
 if(action==='close-modal'){if(ui.modal==='gift-reveal'){toast('Elige guardar o no guardar el regalo.');return}ui.modal=null;render();return}
 if(action==='confirm-new'){ui.modal='confirm-new';render();return}
 if(action==='save'){save();ui.modal=null;render();toast('Partida guardada');return}
 if(action==='calendar'){ui.modal='calendar';render();return}
 if(action==='manual'){ui.modal='manual';render();return}
 if(action==='catalog'){ui.manual='MEDICAMENTOS';ui.modal='manual';render();return}
 if(action==='manual-tab'){ui.manual=target.dataset.tab;render();return}
 if(action==='book'){
  if(game.scene==='book')return;
  game.bookReturnScene=game.scene;
  ui.modal=null;goScene('book');return;
 }
 if(action==='back-book'||action==='book-counter'){leaveBook();return;}
 if(action==='history'){ui.modal='history';render();return}
 if(action==='gifts'){ui.modal='gifts';render();return}
 if(action==='once-home'||action==='once-share'){chooseNeighborsOnce(action==='once-home'?'home':'share');return}
 if(action==='once-close'){closeNeighborsOnce();return}
 if(action==='keep-gift'){acceptPendingGift(false);return}
 if(action==='gift-inventory'){acceptPendingGift(true);return}
 if(action==='decline-gift'){declinePendingGift();return}
 if(action==='apply-coupon'){applyCoupon(Number(target.dataset.index));return}
 if(action==='eat-sweet'){useSweet(Number(target.dataset.index),'qf');return}
 if(action==='give-sweet'){useSweet(Number(target.dataset.index),'carlitos');return}
 if(action==='wash-school-cloth'){washSchoolCloth(Number(target.dataset.index));return}
 if(action==='sell-gift'){sellGift(Number(target.dataset.index));return}
 if(action==='discard-gift'){discardGift(Number(target.dataset.index));return}
 if(action==='keep-paper'){finalizePatient('keep-paper');return}
 if(action==='phone'){game.notifications.forEach(n=>n.seen=true);ui.notificationFilter='Todos';ui.modal='phone';save();render();return}
 if(action==='phone-filter'){ui.notificationFilter=target.dataset.filter;render();return}
 if(action==='verify-identity'){
  const p=game.patients?.[game.patientIndex];
  if(!p||p.done||isPaperEvent(p)||p.kind==='bribe'||p.kind==='donVictor'){toast('Necesitas una atención y una cédula para comparar.');return}
  if(!canShowPatientId(p)){toast(p.noDocument?'El paciente no trae DNI; no hay huella que comparar.':'Solicita la cédula antes de comprobar la huella.');return}
  ui.fingerprintPhase=p.identityScan?'result':'ready';
  ui.fingerprintSubject=p.folio;
  ui.modal='fingerprint';render();return;
 }
 if(action==='scan-fingerprint'){
  const p=game.patients?.[game.patientIndex];
  if(ui.modal!=='fingerprint'||ui.fingerprintPhase!=='ready'||!p||p.done||p.identityScan)return;
  ui.fingerprintPhase='scanning';ui.fingerprintSubject=p.folio;render();
  const subject=p;
  setTimeout(()=>{
    if(ui.modal!=='fingerprint'||ui.fingerprintPhase!=='scanning'||game?.patients?.[game.patientIndex]!==subject)return;
    subject.identityScan=identityFingerprintMatches(subject)?'match':'mismatch';
    subject.identityScanDay=game.day;
    ui.fingerprintPhase='result';
    record('Lector de huella: '+(subject.identityScan==='match'?'identidad coincidente':'discrepancia de identidad')+' para '+subject.name+'.');
    save();render();
    if(ui.soundEnabled)soundEffect(subject.identityScan==='match'?'good':'alert');
  },1300);
  return;
 }
 if(action==='sis'){if(!sisAvailable()){toast(`Registro SIS disponible desde el día ${SIS_UNLOCK_DAY}`);return}ui.modal='sis';render();return}
 if(action==='sis-check'){const p=game.patients[game.patientIndex];if(sisAvailable()&&p&&!isPaperEvent(p)&&p.kind!=='bribe'){game.sisChecks[p.folio]=true;record(`Consulta SIS de ${p.prescriber}: ${({match:'datos coincidentes',typo:'RUT mal escrito',unknown:'prescriptor inexistente',mismatch:'nombre y RUT no corresponden','signature-mismatch':'firma discordante',incomplete:'datos incompletos'})[sisPrescriptionStatus(p).status]}.`);save();render()}return}
 if(action==='go-counter'){goScene('counter');return}
 if(action==='request-id'){const p=game.patients[game.patientIndex];if(!p||p.done)return;if(p.noDocument){game.idRequested=true;record('Se solicitó identificación a '+p.name+', pero el paciente confirmó que no porta documento.');toast('El paciente no trae su documento de identidad.');save();render();return}if(isPaperEvent(p)){if(!['chinese','clubNocturno'].includes(p.kind)){toast('Este visitante no trae cédula');return}game.idRequested=true;record(p.kind==='clubNocturno'?'El visitante mostró un huevo con una corona tallada.':'El visitante mostró su tablilla china con retrato grabado.');save();render();return}game.idRequested=true;record('Documento de identidad solicitado.');save();render();return}
 if(action==='translate-paper'){const p=game.patients?.[game.patientIndex];if(p?.kind==='chinese'){ui.modal='translate-paper';render()}return}
 if(action==='destroy-used-qr'){resolveUsedElectronicRecipe('destroy');return}
 if(action==='return-used-qr'){resolveUsedElectronicRecipe('return');return}
 if(action==='show-used-qr'){const p=game.patients?.[game.patientIndex];if(p&&!p.done&&p.qrValidation==='dispensed'){ui.modal='qr-used';render()}return}
 if(action==='verify-qr'){
  const p=game.patients?.[game.patientIndex];
  if(!p||p.done||p.rxType!=='ELECTRÓNICA'||game.scene!=='counter')return;
  if(p.callRejected){toast('Receta falsa confirmada por llamada. Avisa a SEREMI.');return;}
  if(!p.qrValidation&&rxIsExpired(p)){
   p.qrValidation='expired';p.qrExpiredNote=`Receta vencida: emitida el ${p.rxDate}, vigente por ${rxValidityLabel(p)}.`;game.qrChecked=false;
   record(`Verificador electrónico: código rechazado · ${p.qrExpiredNote}`);
   save();render();toast('Código rechazado: la receta electrónica está vencida.');return;
  }
  const issue=electronicPrescriptionIntegrityIssue(p);
  if(issue&&['valid',null,undefined].includes(p.qrValidation)){
   flagElectronicPrescriptionFraud(p,issue);
   game.qrChecked=false;
   record(`Verificador electrónico: receta falsa · folio ${p.folio} · ${issue}`);
   save();render();toast('Receta electrónica no válida. Revisa el resultado del verificador.');return;
  }
  if(p.qrValidation){
   if(p.qrValidation==='dispensed'){ui.modal='qr-used';render();return;}
   toast(p.qrValidation==='valid'?'Código ya validado.':p.qrValidation==='expired'?'Receta vencida. Devuélvela indicando el motivo.':electronicValidationFailed(p)?'Receta falsa. Decide cómo proceder en Notificar o retener.':'Código no válido. Decide cómo proceder en Notificar o retener.');return;
  }
  const alreadyUsed=electronicUseRecord(p);
  if(alreadyUsed){
   p.qrValidation='dispensed';game.qrChecked=false;
   ui.modal='qr-used';
   record(`Verificador electrónico: receta folio ${p.folio} ya despachada. Se requiere decidir si destruir o devolver la copia.`);
   save();render();
   if(ui.soundEnabled)soundEffect('alert');
   return;
  }
  const fail=Math.random()<0.15;
  game.qrChecked=!fail;
  if(fail){
    flagElectronicPrescriptionFraud(p,'El código electrónico no pudo ser validado.');
    p.qrReported=false;
    record(`Validación electrónica fallida: receta falsa de ${p.name}, folio ${p.folio}. Decisión del jugador pendiente.`);
    save();render();toast('Receta electrónica falsa. Decide cómo proceder en Notificar o retener.');
  }else{p.qrValidation='valid';record('Validación electrónica correcta para '+p.name+'.');toast('Código electrónico validado correctamente.');save();render();}
  return;
 }
 if(action==='inspect'){
  ui.inspectZoom=100;
  goScene('inspect');
  if(window.matchMedia?.('(max-width: 740px), (pointer: coarse)').matches)
   document.getElementById('document-review')?.scrollIntoView?.({block:'start'});
  return;
 }
 if(action==='back-counter'){goScene('counter');return}
 if(action==='zoom-out'){ui.inspectZoom=Math.max(75,ui.inspectZoom-25);render();return}
 if(action==='zoom-in'){ui.inspectZoom=Math.min(175,ui.inspectZoom+25);render();return}
 if(action==='compare'&&game.scene==='inspect'){ui.modal='compare-documents';render();return}
 if(action==='call-doctor'){callPrescriptionOffice(game.patients[game.patientIndex]);return}
 if(action==='dispense'){finalizePatient('dispense');return}
 if(action==='return'){
  const p=game.patients[game.patientIndex];
  if(!p||p.done)return;
  if(isPaperEvent(p)||p.qrValidation==='dispensed'||p.qrValidation==='invalid'){finalizePatient('return');return}
  ui.modal='return-reason';ui.returnCategory=0;ui.returnReason=null;render();return;
 }
 if(action==='return-category'&&ui.modal==='return-reason'){
  const index=Number(target.dataset.index);
  if(!RETURN_REASON_GROUPS[index])return;
  ui.returnCategory=index;render();
  app.querySelector?.(`[data-action="return-category"][data-index="${index}"]`)?.focus();return;
 }
 if(action==='select-return-reason'&&ui.modal==='return-reason'){
  const reason=target.dataset.reason;
  if(!RETURN_REASON_GROUPS[ui.returnCategory][1].includes(reason))return;
  ui.returnReason=reason;render();
  app.querySelector?.(`[data-action="select-return-reason"][data-reason="${reason}"]`)?.focus();return;
 }
 if(action==='confirm-return-reason'){
  if(ui.modal!=='return-reason')return;
  const reason=ui.returnReason;
  if(!Object.prototype.hasOwnProperty.call(RETURN_REASONS,reason)){toast('Selecciona un motivo para confirmar.');return}
  ui.modal=null;
  finalizePatient('return',null,reason);return;
 }
 if(action==='notify'||action==='retain'){if(!['counter','inspect'].includes(game.scene)||game.patientResult){toast('Primero inicia una atención que no esté resuelta.');return}ui.modal='notify';render();return}
 if(['notify-police-bribe','notify-police-id','notify-police-illegal-practice','notify-seremi-rx'].includes(action)){notifyAuthority(action.slice(7));return}
 if(action==='notify-animation-done'){ui.notifyOutcome=null;ui.modal=game.gameOver?null:game.pendingGift?'gift-reveal':null;save();render();return}
 if(action==='report-police'){ui.modal='notify';render();return}
 if(action==='confirm-police'){notifyAuthority('police-id');return}
 if(action==='retain-unreported'&&ui.modal==='notify'){
  const p=game.patients[game.patientIndex];
  if(!p?.folio||isPaperEvent(p)||p.done||p.qrValidation==='dispensed')return;
  ui.modal=null;finalizePatient('retain','retain-unreported');return;
 }
 if(action==='next-patient'){nextPatient();return}
 if(action==='give-don-victor'){chooseDonVictor(true);return}
 if(action==='decline-don-victor'){chooseDonVictor(false);return}
 if(action==='reject-bribe'){chooseBribe(false);return}
 if(action==='accept-bribe'){chooseBribe(true);return}
 if(action==='open-box'){
  if(ui.openingBox)return;
  ui.openingBox=true;
  const button=target.closest('.shipping-box')||target;
  button.classList.add('box-opening');button.disabled=true;
  setTimeout(()=>{game.boxOpened=true;game.inspectedPacks=[];ui.openingBox=false;save();render()},560);
  return;
 }
 if(action==='inspect-pack'){let i=Number(target.dataset.pack);if(!game.inspectedPacks.includes(i))game.inspectedPacks.push(i);toast('Envase inspeccionado');save();render();return}
 if(action==='inspect-rectify'){inspectDecision('rectify');return}
 if(action==='inspect-acknowledge'){
  if(game.inspectionIssue?.type==='clean'||document.getElementById('inspectionConsent')?.checked)inspectDecision('acknowledge');
  return;
 }
 if(action==='inspection-continue'){if(game.scene==='inspector'&&game.inspectionDone){ui.modal=null;goScene('close');}return}
 if(action==='accept-order'){acceptDelivery();return}
 if(action==='report-order'){openReport();return}
 if(action==='confirm-report'){const el=document.getElementById('actualCount'),sel=document.getElementById('reportKind');reportDelivery(Number(el.value),sel.value);return}
 if(action==='back-receive'){toast('Termina la recepción para continuar la jornada.');return}
 if(action==='show-proof'||action==='proof'){ui.modal='proof';render();return}
 if(action==='rectify'){if(game.inspectionIssue?.proof)inspectDecision('rectify');return}
 if(action==='acknowledge'){inspectDecision('acknowledge');return}
 if(action==='go-close'){if(game.deliveryDone&&(!game.inspectionIssue||game.inspectionDone))goScene('close');return}
 if(action==='post-backlog'){const n=postHistoricalBacklog();toast(`Asientos atrasados regularizados: ${n}`);render();return}
 if(action==='post-dispatch'){let n=postMovements(game.day,'dispatch');toast(`Despachos registrados: ${n} presentación(es).`);render();return}
 if(action==='post-receipt'){let n=postMovements(game.day,'receipt');toast(`Ingresos registrados: ${n} presentación(es).`);render();return}
 if(action==='buy-school-cloth'){resolveSchoolCloth(true);return}
 if(action==='use-school-cloth'){resolveSchoolCloth(false);return}
 if(action==='go-home'){if(game.scene==='close'&&game.deliveryDone&&(!game.inspectionIssue||game.inspectionDone))closeDayGoHome();return}
 if(action==='repay-debt'){repayDebt();return}
 if(action==='pay-expenses'){homePay(false);return}
 if(action==='defer-expenses'){homePay(true);return}
 if(action==='next-day'){if(game.scene==='home'&&game.daySummary&&!tacaPending())beginNextDay();return}
}
app.addEventListener('click',e=>{let el=e.target.closest('[data-action]');if(!el||el.disabled)return;
 if(renderedModal&&el.matches&&!el.closest('.overlay'))return;
 e.preventDefault();
 const action=el.dataset.action;
 if(ui.soundEnabled && !['toggle-sound','toggle-music'].includes(action)){
  const audioActions={
    'open-box':'box','inspect-pack':'paper','accept-order':'cash','report-order':'alert','confirm-report':'stamp',
    'post-dispatch':'stamp','post-receipt':'stamp','post-backlog':'stamp','sell-gift':'cash','eat-sweet':'good',
    'give-don-victor':'cash','wash-school-cloth':'paper','buy-school-cloth':'cash','use-school-cloth':'good',
    'give-sweet':'good','apply-coupon':'cash','discard-gift':'paper','keep-gift':'good','decline-gift':'reject',
    'return':'reject','retain':'stamp','notify':'bell','notify-police-bribe':'alert','notify-police-id':'alert','notify-police-illegal-practice':'alert',
    'notify-seremi-rx':'alert','request-id':'paper','verify-identity':'finger','compare':'paper',
    'dispense':'cash','verify-qr':'good','sis-check':'bell','call-doctor':'bell',
    'next-patient':'footsteps','go-counter':'footsteps','next-day':'page','go-home':'hospital',
    'pay-expenses':'cash','defer-expenses':'reject','inspect':'page','back-counter':'page',
    'book':'page','back-book':'page','manual':'page','phone':'bell','gifts':'page','calendar':'page',
    'open-report':'page','retain-unreported':'stamp','inspect-rectify':'good','inspect-acknowledge':'stamp',
    'new':'bell','continue':'bell','save':'good','menu':'page'};
  soundEffect(audioActions[action]||'tap');
 }
 clickedAction=el;
 try{handleAction(action,el);}finally{clickedAction=null;}
});
app.addEventListener('change',e=>{
 if(e.target.id==='drugSelector'){ui.selectedDrug=e.target.value;render();}
 if(e.target.id==='inspectionConsent'){
  const accept=app.querySelector('[data-action="inspect-acknowledge"]');
  ui.inspectionConsent=e.target.checked?game.inspectionIssue:null;
  accept.disabled=!e.target.checked;
 }
});
document.addEventListener('focusin',event=>{
 if(!renderedModal)return;
 const dialog=app.querySelector('.overlay .modal');
 if(dialog?.matches?.('.modal')&&!dialog.contains(event.target))dialog.focus({preventScroll:true});
});
document.addEventListener('keydown',event=>{
 if(!game)return;
 if(event.key==='Tab'&&renderedModal){trapModalTab(event);return;}
 if(event.key==='Escape'){
  if(ui.modal==='taca'){event.preventDefault();tacaClose();return;}
  if(ui.modal){
   if(ui.modal==='gift-reveal'||(ui.modal==='fingerprint'&&ui.fingerprintPhase==='scanning'))return;
   event.preventDefault();ui.modal=null;render();
  }else if(game.scene==='inspect')goScene('counter');
  else if(game.scene==='book')leaveBook();
 }
});
let dblSceneAtStart=null;
document.addEventListener('dblclick',e=>{dblSceneAtStart=game?game.scene:null},true);
document.addEventListener('dblclick',e=>{
 // Solo vuelve al mesón si el doble clic empezó YA en la pantalla de verificación
 // (si no, el mismo doble clic que abre la verificación la cerraría de inmediato).
 if(!game||game.scene!=='inspect'||dblSceneAtStart!=='inspect'||ui.modal)return;
 const t=e.target;
 if(!t.isConnected||!t.closest||t.closest('button,input,select,textarea,a'))return;
 if(t.closest('.inspect-doc,.chile-id-card,.idtpl')){e.preventDefault();goScene('counter')}
});
function bindDrag(){for(const el of app.querySelectorAll('.draggable')){
 let start=null,position={x:0,y:0},didDrag=false;
 el.addEventListener('pointerdown',e=>{if(e.button!==0||e.pointerType==='touch')return;start={x:e.clientX,y:e.clientY,x0:position.x,y0:position.y};didDrag=false;el.setPointerCapture(e.pointerId)});
 el.addEventListener('pointermove',e=>{if(!start)return;let dx=e.clientX-start.x,dy=e.clientY-start.y;if(Math.abs(dx)+Math.abs(dy)>7)didDrag=true;if(didDrag){position.x=Math.min(180,Math.max(-180,start.x0+dx));position.y=Math.min(100,Math.max(-100,start.y0+dy));el.style.transform=`translate(${position.x}px,${position.y}px)`;el.style.zIndex='5'}});
 el.addEventListener('pointerup',()=>{start=null});
 el.addEventListener('pointercancel',()=>{start=null});
 el.addEventListener('dblclick',e=>{if(game.scene==='counter'&&!didDrag){e.preventDefault();ui.inspectZoom=100;goScene('inspect')}});
 }
}
// Bootstrap. The saved state stays local to this browser/device.
if(TACA_PREVIEW){game=newState();openTacaPreview(2);}
else if(load()){game=load();ui.modal=game.pendingGift?'gift-reveal':null;render()}else menuHtml();

if(typeof document!=='undefined')document.addEventListener('visibilitychange',()=>{
 if(document.hidden){stopMusic()} else if(ui.musicEnabled){playMusic()}
});
