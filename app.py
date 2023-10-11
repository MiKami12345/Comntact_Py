from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.template_folder = 'templates'
app.static_folder = 'static'

# データベースの設定
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///contact.db'  # SQLiteを使用
db = SQLAlchemy(app)

# データモデルを作成
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    message = db.Column(db.Text, nullable=False)

# データベースの初期化
with app.app_context():
    db.create_all()

@app.route('/', methods=['POST', 'GET'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')

        new_contact = Contact(name=name, email=email, message=message)

        db.session.add(new_contact)
        db.session.commit()

        return jsonify({'message': '送信できました'})

    return render_template('contact.html')


if __name__ == '__main__':
    app.run(debug=True)