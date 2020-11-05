from flask import Flask, render_template, url_for, request, redirect
from database import *

app = Flask(__name__)

@app.route('/')
def index():
	contacts = get_contacts()
	return render_template('index.html', contacts=contacts)

@app.route('/add', methods=['GET','POST'])
def add():
	if request.method == "POST":
		name = request.form['name']
		phone = request.form['phone']
		add_contact(name,phone)
		return redirect(url_for('index'))
	else:
		return render_template('form.html')

@app.route('/delete/<int:con_id>')
def delete(con_id):
	delete_contact(con_id)
	return redirect(url_for('index'))


app.run()