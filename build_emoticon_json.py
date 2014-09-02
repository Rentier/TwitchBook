import json
import urllib2

GLOBAL_EMOTES = 'http://twitchemotes.com/global.json'
SUBSCRIBER_EMOTES = 'http://twitchemotes.com/subscriber.json'
URL_PREFIX = "http://static-cdn.jtvnw.net/jtv_user_pictures/"

def get_json(url):
	response = urllib2.urlopen(url)
	return json.loads(response.read())

def merge_dicts(x, y):
	z = x.copy()
	z.update(y)
	return z

def remove_prefix(s):
	return s.replace(URL_PREFIX, "")

def get_global():
	""" Returns a dictionary whose keys are emoticon names and values
	the URL to the picture
	"""
	data = get_json(GLOBAL_EMOTES)

	result = {}

	for name, obj in data.items():
		result[name] = obj["url"]
	return result

def get_subscriber():
	data = jdata = get_json(SUBSCRIBER_EMOTES)

	result = {}	

	for name, obj in data.items():
		result = merge_dicts(result, obj["emotes"])

	return result



if __name__ == '__main__':
	global_emotes = get_global()
	subscriber_emotes = get_subscriber()
	result = merge_dicts(global_emotes, subscriber_emotes)

	for k, v in result.items():
		if not v.startswith(URL_PREFIX):
			print v
			break
		else:
			result[k] = remove_prefix(v)

	print "WOrked"
	
	with open("out.txt", "w") as f:
		f.write(json.dumps(result))

