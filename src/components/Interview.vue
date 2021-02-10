<template>
	<section id="interview_page" class="wrapper">
		<h1>Работа твоей мечты</h1>

		<div class="interview">
			<el-form ref="form" :model="form" :rules="rules" :label-position="labelPosition" class="interview__form">

				<el-form-item label="Вакансия *" prop="vacancy">
					<el-select v-model="form.vacancy" placeholder="Выберите вакансию">
						<el-option
							v-for="vacancy in vacancies"
							:key="vacancy.name"
							:label="vacancy.name"
							:value="vacancy.name">
						</el-option>
					</el-select>
				</el-form-item>

				<el-form-item label="ФИО *" prop="name">
					<el-input v-model="form.name" placeholder="Введите имя"></el-input>
				</el-form-item>


				<div class="interview-form__grid">
					<el-form-item label="Дата рождения *" prop="date">
						<el-date-picker
							type="date"
							placeholder="Выберите дату"
							v-model="form.date"
							style="width: 100%;">
						</el-date-picker>
					</el-form-item>

					<el-form-item label="Пол" class="gender">
						<el-radio-group v-model="form.gender">
							<el-radio label="мужской"></el-radio>
							<el-radio label="женский"></el-radio>
						</el-radio-group>
					</el-form-item>

					<el-form-item label="Контактый телефон *" prop="phone">
						<el-input v-model="form.phone"></el-input>
					</el-form-item>

					<el-form-item label="Электронная почта" prop="email">
						<el-input v-model="form.email"></el-input>
					</el-form-item>
				</div>


				<el-form-item label="Резюме" class="summary">
					<el-input type="textarea" v-model="form.summary"></el-input>
				</el-form-item>

				<el-form-item>
					<el-upload
						class="interview__upload-btn"
						ref="upload"
						action="https://jsonplaceholder.typicode.com/posts/"
						:auto-upload="false"
						v-model="form.files">

						<el-button slot="trigger" size="small">
							выберете или перетащите файл</el-button>
					</el-upload>
				</el-form-item>

				<!-- captcha -->

				<el-form-item>
					<el-checkbox id="agreePolicy" label="я подтверждаю согласие на обработку персональных данных и принимаю условия рассмотрения обращений *"></el-checkbox>
				</el-form-item>

				<el-form-item>
					<el-button class="interview__btn-submit" @click="checkPolicy()">отправить</el-button>
				</el-form-item>

			</el-form>


			<div class="interview__info">
				<h2>Наша суперцель</h2>

				<p>
					— стать любимым магазином для каждой российской семьи.
				</p>
				<p>
					Сотни тысяч наших сотрудников ежедневно работают над её достижением.
				</p>
				<p>
					Мы уверены, что в ближайшие годы достигнем этого и будет здорово, если вместе с тобой.
				</p>

				<a href="tel:+79264331416" class="phone">+7 (926) 433-14-16</a>
			</div>

		</div>

	</section>
</template>

<script>
// todo - выделение красным незаполненных полей!
// todo - все поля проводить через checkEmpty, далее делать проверку по rule.field и перебрасывать на подходящие доп.валидаторы (например, email по типу)
	export default {
		name: 'Interview',
		data () {
			var checkEmpty = (rule, value, callback) => {
				console.log(rule.field) // выводит запущенное правило валидации
				if (value === '') {
					callback(new Error('поле обязательно для заполнения'))
				} else {
					callback()
				}
			}

			var checkPhone = (rule, value, callback) => {

				if (value === '') {
					callback(new Error('поле обязательно для заполнения'))
				} else {
					if (value.length >=7) {
						callback()
					} else {
						callback(new Error('поле не заполнено до конца'))
					}
				}
			}

			return {
				form: {
					vacancy: '',
					name: '',
					date: '',
					gender: '',
					phone: '',
					email: '',
					summary: '',
					files: '',
					// policy: []
				},
				labelPosition: 'top',
				vacancies: [
					{ name: 'Водитель' },
					{ name: 'Кассир' },
					{ name: 'Пекарь' },
					{ name: 'Повар' },
					{ name: 'Приемщик' },
					{ name: 'Продавец' },
					{ name: 'Товаровед' }
				],
				rules: {
					vacancy: [
						{
							validator: checkEmpty,
							trigger: 'change'
						}
					],
					name: [
						{
							validator: checkEmpty,
							trigger: 'blur'
						}
					],
					date: [ // todo custom validator (с маской для даты дд.мм.гггг)
						{
							type: 'date',
							required: true,
							message: 'выберите дату',
							trigger: 'change'
						}
					],
					phone: [ // todo custom validator (с маской для телефона)
						{
							validator: checkPhone,
							trigger: 'blur'
						}
					],
					email: [ // todo custom validator (по типу @mail)
						{
							type: 'email',
							required: true,
							message: 'поле обязательно для заполнения',
							trigger: 'blur'
						}
					],
					// captcha: [],
					// policy: [ // todo custom validator (галочка не должна идти до всей 		      			валидации!)
					// 	{
					// 		required: true,
					// 		// type: 'array', // todo
					// 		message: 'поле обязательно для заполнения',
					// 		trigger: 'change'
					// 	}
					// ],
				}
			}
		},
		methods: {
			checkPolicy () {
				let policy = document.getElementById('agreePolicy')

				let checkbox = policy.querySelector('.el-checkbox__original')

				if (checkbox.checked) {
					this.submitForm('form')
				} else {
					console.log('error submit!!');

					// todo - красная заливка

					return false;
				}
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$refs.upload.submit()
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	#interview_page {
		h1 {
			font-size: 72px;
			margin-top: 70px;
			margin-bottom: 50px;
		}
		.el-form-item__label {
			line-height: 18px;
			padding-bottom: 12px;
			color: #000;
		}
		.el-input__inner, .el-textarea__inner {
			background-color: #F5F5F5;
			border: none;
			font-size: 18px;
			color: #000;
			font-weight: 500;
			height: 47px;
			width: 100%;
		}
		.el-textarea__inner {
			height: 94px;
		}
		.el-form-item {
			margin-bottom: 30px;
		}
		.el-select {
			width: 100%;
		}
	}
	.interview-form__grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-gap: 0 30px;
	}
	.interview {
		display: flex;
		-webkit-justify-content: flex-start;
				  justify-content: flex-start;
			 -webkit-align-items: flex-start;
						align-items: flex-start;
		.interview__form {
			max-width: 540px;
			min-width: 540px;
		}
		.interview__info {
			margin-left: 125px;
			min-width: 445px;
		}
	}
	.interview__info {
		h2 {
			font-size: 32px;
			margin-bottom: 25px;
			margin-top: 30px;
		}
		p {
			font-size: 18px;
			line-height: 23px;
			margin-bottom: 25px;
		}
		.phone {
			font-size: 24px;
			color: #000000;
			background: #F5F5F5;
			width: 100%;
			height: 73px;
			display: flex;
			-webkit-justify-content: center;
					  justify-content: center;
				 -webkit-align-items: center;
							align-items: center;
			overflow: hidden;
			-webkit-border-radius: 8px;
					  border-radius: 8px;
			&:hover {
				background-color: #FFDF31;
			}
		}
	}
	.gender {
		.el-radio__input.is-checked+.el-radio__label {
			color: #000;
		}
		.el-radio__inner {
			width: 24px;
			height: 24px;
			border: none;
			background-color: #f5f5f5;
		}
		.el-radio__input.is-checked .el-radio__inner {
			background-color: #f5f5f5;
			&:after {
				width: 10px;
				height: 10px;
				background-color: #000;
			}
		}
	}
	.interview__btn-submit {
		border: none;
		font-size: 18px;
		color: #000000;
		background: #F5F5F5;
		width: 100%;
		height: 47px;
		display: flex;
		-webkit-justify-content: center;
					justify-content: center;
				-webkit-align-items: center;
						align-items: center;
		overflow: hidden;
		-webkit-border-radius: 8px;
				  border-radius: 8px;
		&:hover {
			background-color: #FFDF31;
		}
		&:focus {
			background-color: #f5f5f5;
		}
	}
	#agreePolicy {
		max-width: 435px;
		display: flex;
		-webkit-justify-content: flex-start;
				  justify-content: flex-start;
			 -webkit-align-items: center;
						align-items: center;
		.el-checkbox__label {
			color: #000;
			font-size: 14px;
			line-height: 18px;
			max-width: 100%;
			white-space: normal;
		}
		.el-checkbox__inner {
			width: 24px;
			height: 24px;
			overflow: hidden;
			-webkit-border-radius: 8px;
	        		  border-radius: 8px;
			background-color: #f5f5f5;
			border: none;
			&:after {
				border: none;
				width: 13px;
				height: 11px;
				left: 50%;
				top: 50%;
				-webkit-transform: translate(-50%, -50%);
					-moz-transform: translate(-50%, -50%);
					 -ms-transform: translate(-50%, -50%);
					  -o-transform: translate(-50%, -50%);
						  transform: translate(-50%, -50%);
				background: none;
			}
		}
		.el-checkbox__input.is-checked .el-checkbox__inner::after {
			background: url('../assets/images/accept.svg') no-repeat center center;
		}
	}
	#interview_page .summary {
		margin-bottom: 10px;
		textarea {
			resize: none;
		}
	}
	.interview__upload-btn {
		border: none;
		width: 100%;
		.el-upload, button {
			width: 100%;
			height: 47px;
			overflow: hidden;
		}
		button {
			border: none;
			background-color: #f5f5f5;
			-webkit-border-radius: 8px;
	        		  border-radius: 8px;
			text-align: left;
			padding-left: 50px;
			&:before {
				position: absolute;
				content: '';
				background: url('../assets/images/clip.svg') no-repeat center center;
				width: 14px;
				height: 24px;
				display: block;
				left: 20px;
				top: 12px;
				// top: 50%;
				// -webkit-transform: translateY(-50%);
				// 	-moz-transform: translateY(-50%);
				// 	 -ms-transform: translateY(-50%);
				// 	  -o-transform: translateY(-50%);
				// 		  transform: translateY(-50%);
			}
			&:active, &:focus, &:hover {
				background-color: #f5f5f5;
				&:before {
					background: url('../assets/images/clip-active.svg') no-repeat center center;
				}
			}
			span {
				color: #acacac;
				font-size: 14px;
				line-height: 18px;
			}
		}
	}
	.el-upload-list__item:first-child {
		margin-top: 0;
	}
</style>