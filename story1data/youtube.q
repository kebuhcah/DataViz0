s:read0`:youtube_ads.txt;
t:flip`length`title`viewinfo`description!flip{(`$x[0];`$x[1];`$x[2];" "sv 3_x)}each(where s like "  *") cut s;
update title:`$ssr[;"’";"'"]each ssr[;"No way";"No Way"]each ssr[;"protections measures";"protection measures"]each ssr[;".";""]each string title  from delete viewinfo,description from update timeAgo:`$(first each" ago"vs/:string viewinfo),viewCount:("I"$ssr[;",";""]each -6_/:last each" ago"vs/:string viewinfo)  from `t;
langFirst:select from t where (`$last each " - "vs/:string title) in exec `$distinct last each " - "vs/:string title from t where title like "* - *",not " "in/:first each " - "vs/:string title;
langLast:select from t where (`$first each " - "vs/:string title) in exec `$distinct first each " - "vs/:string title from t where title like "* - *",not title like "Working in the ABF - *",not title like "Can I bring it back - *", not " "in/:last each " - "vs/:string title;
breakdown:(select title:last each `$" - "vs/:string title,language:`$first each " - "vs/:string title,length,viewCount,timeAgo from langFirst),
(select title:first each `$" - "vs/:string title,language:`$last each " - "vs/:string title,length,viewCount,timeAgo from langLast);
delete from `breakdown where language like "Australia*";
update language:`Indonesian from `breakdown where (language like "*Bahasa*");
update language:`$"Kurdish (Sorani)" from `breakdown where (language like "Kurdish Sorani")or(language=`Kurdish);
update language:`$"Sinhalese" from `breakdown where (language like "Sinhal*");
update language:`$"Sudanese Arabic" from `breakdown where (language like "Sudanese*");
update language:`$"Pashto" from `breakdown where (language like "Pasht*");
breakdown

select count i,sum viewCount by language from breakdown
