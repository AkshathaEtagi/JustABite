from pymongo import MongoClient
import json

res_sum = 999
match_flag = 0
count = 0

client = MongoClient('localhost', 27017)

db = client.testdb								#using database (collection)
coll = db.foods									#using collection in the db (foods)
curru= db.current
curr = db.restveg
curr_user = curr.find_one({})
c= curru.find_one({})

db.outputc.remove({})

for prev in coll.find({"user_name":c["user_name"]}):
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

if match_flag == 1:	#if a match is found with someone
	if curr_user["veg"] == True:
		for items in coll.find({"user_name":match["user_name"], "rest_name":curr_user["rest_name"], "veg": True}):
			if count < 3:
				count += 1
				db.outputc.insert({"dish_name":items["dish_name"]})
	else :
		for items in coll.find({"user_name":match["user_name"], "rest_name":curr_user["rest_name"]}, {'_id':0}):
			if count < 3:
				count += 1
				db.outputc.insert({"dish_name":items["dish_name"]})

else: 	#if no match is found, take a random review of that restuarant
	if curr_user["veg"] == True:
		user = coll.find_one({"rest_name":curr_user["rest_name"]})
		for rand in coll.find({"user_name":user["user_name"], "rest_name":curr_user["rest_name"], "veg": True}):
			if count < 3:
				count += 1
				db.outputc.insert({"dish_name":rand["dish_name"]})
	else:
		user = coll.find_one({"rest_name":curr_user["rest_name"]})
		for rand in coll.find({"user_name":user["user_name"], "rest_name":curr_user["rest_name"]}):
			if count < 3:
				count += 1
				db.outputc.insert({"dish_name":rand["dish_name"]})
		
