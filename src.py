from pymongo import MongoClient
import json

res_sum = 999
match_flag = 0

client = MongoClient('localhost', 27017)
db = client.collection								#using database (collection)
coll = db.foods										#using collection in the db (foods)
with open('example-input.json') as data:
	curr_user = json.load(data)

for prev in coll.find({"user_name":curr_user["user_name"]}):
	for other in coll.find():
		if prev["user_name"] != other["user_name"] and prev["rest_name"]==other["rest_name"] and prev["dish_name"]==other["dish_name"]:
			if prev["review"][1]==other["review"][1]:
				x = abs(prev["review"][0] - other["review"][0])
				y = abs(prev["review"][2] - other["review"][2])
				res_sum = x + y
		if res_sum < 3:
			match = other
			match_flag = 1
			break
	if match_flag  == 1:
		break
if match_flag == 1:
	if curr_user["veg"] == True:
		for items in coll.find({"user_name":match["user_name"], "rest_name":curr_user["rest_name"], "veg": True}):
			print items["dish_name"]


