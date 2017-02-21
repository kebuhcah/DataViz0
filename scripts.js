/**
 * @author Kevin Sun
 */

/* a. a number */
var numberOfCountriesYugoslaviaSplitInto = 7;
/* although Montenegro split off peacefully several years after the war */

/* b. a string */
var researchTopic = "Croatian and Bosnian Refugees in Serbia";

/* c. a Boolean */
var isItSafeToReturnToCountriesOfOrigin = true;
/* barrier to return is no longer physical safety but other factors  */

/* d. an array of at least 5 items*/
var federalSubjectsOfYugoslavia = [{
	name : "Bosnia and Herzegovina"
}, {
	name : "Croatia"
}, {
	name : "Macedonia"
}, {
	name : "Montenegro"
}, {
	name : "Serbia"
}, {
	name : "Slovenia"
}];
/* Kosovo was not a federal subject but a special province of Serbia*/

/* e. an object with at least 4 distinct properties, at least one of which must be a list, and another of which must be an object */
var BosniaAndHerzegovina = {
	independenceDate : new Date(1992, 4, 6), /* intl recognition date - declaration was one month prior */
	capital : "Sarajevo",
	entities : ["Federation of Bosnia and Herzegovina", "Republika Srpska"],
	percentagesOfPopulation : {/* per 2013 census */
		bosniaks : 0.5011,
		serbs : 0.3078,
		croats : 0.1543,
		others : 0.0273
	}
};

/* Extra Credit */
console.log(federalSubjectsOfYugoslavia[4].name);
console.log(BosniaAndHerzegovina.capital);

/*
 * Australian Counter People Smuggling Communication Activities in Indonesia
 * As described in a brief from the "Indonesia-Australia 13TH Customs-to-Customs Bilateral Discussions"
 * (document acquired from Australian Border Department FOI archive)
 */
var communicationOperations = [{
	"type" : "Community Liaison Officer (CLO) Program",
	"provider" : "IOM Indonesia",
	"audience" : "potential irregular immigrants under IOM supervision (i.e. in detention centers)",
	"details" : "CLOs with relevant Dari/Farsi, Tamil and Arabic language skills meet with detainees on a regular basis to discuss Australian Government messaging and relevant news stories, and report back to IOM with information on detainee reactions and receptiveness to such messaging."
}, {
	"type" : "Public Information Campaign Targeting Crew",
	"provider" : "IOM Indonesia",
	"audience" : "potential people smuggling facilitators",
	"details" : "IOM spreads anti-smuggling awareness throughout 14 impoverished fishing villages in east Indonesia considered to be at risk of turning to people smuggling. Information is spread through a variety of channels - in the past these have included: hosting outdoor movie nights, handing out materials at booths in the market (which also provide family photo services and branded merchandise), providing religious leaders with smuggling-themed sermon booklets,  holding workshops with community leaders, and organizing \"Proud Fisherman Day\" festivities."
}, {
	"type" : "Physical Advertising",
	"provider" : "Leo Burnett (advertising agency)",
	"audience" : "potential irregular immigrants",
	"details" : "Leo Burnett has been engaged to deliver and place leaflets, posters, banners and billboards in 17 cities across Indonesia."
}, {
	"type" : "Online Advertising",
	"provider" : "Universal McCann (advertising agency)",
	"audience" : "potential irregular immigrants",
	"details" : "UM advertising is delivered through Cadreon (sponsored advertising on internet pages), Google search, Facebook and YouTube advertising. UM advertising targets those cohorts in Indonesia (Iranian, Afghan, Sri Lankan, Pakistani and Iraqi) searching in their native languages."
}];

/* alternate article list with random content for function demonstration  */
var lol = [{
	"type" : "hmmm",
	"provider" : "IOM Indonesia",
	"audience" : "idk",
	"details" : "!!!!!!!! news stories, and report back to IOM with information on detainee reactions and receptiveness to such messaging."
}, {
	"type" : "xxxxxxxxx",
	"provider" : "IOM Indonesia",
	"audience" : "@@@@@",
	"details" : " e smuggling. Information is spread through a variety of channels - in the past these have included: hosting outdoor movie nights, handing out materials at booths in the market (which also provide family photo services and branded merchandise), providing religious leaders with smuggling-themed sermon booklets,  holding workshops with community leaders, and organizing \"Proud Fisherman Day\" festivities."
}, {
	"type" : "!!!!!!",
	"provider" : "%%%%%%",
	"audience" : "............",
	"details" : "--------------"
}, {
	"type" : "===========",
	"provider" : "////////////",
	"audience" : "^^^^^^^^^^^^^^^^",
	"details" : "09809we9iwfsdnfsdfng targets those cohorts in Indonesia (Iranian, Afghan, Sri Lankan, Pakistani and Iraqi) searching in their native languages."
}];

/*
 * Goal: sort through my list of communication operations and console.log only the ones carried out by IOM
 */
function doTheLoop(theList) {
	for (var i = 0; i < theList.length; i++) {
		// stored in a variable for later reference
		var op = theList[i];
		// check if provider is IOM Indonesia
		if (op.provider === "IOM Indonesia") {
			// if so, log operation object
			console.log(op);
		} else {
			// if not, print message
			console.log("Not an IOM operation");
		}
	}
	console.log("DONE")
}

