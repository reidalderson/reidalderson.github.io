import cgi
form = cgi.FieldStorage()
searchterm =  form.getvalue('fname')
print('it worked!')
print(searchterm)