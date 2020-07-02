<?php $id="service";?>
<?php include($_SERVER['DOCUMENT_ROOT'] . '/assets/include/header.php'); ?>

<div class="p-service">

<div class="c-title4">
	<div class="c-title4__inner">
		<h2>Service</h2>
		<p>subTitlesubTitle</p>
	</div>
</div>

<div class="l-content">
<main class="l-main">


<?php
//==============================================
// navi
//============================================== ?>
<nav class="c-navi1">
	<ul>
		<li><a href="#a1">LocalNavi1</a></li>
		<li><a href="#a2">LocalNavi2</a></li>
		<li><a href="#a3">LocalNavi3</a></li>
		<li><a href="#a4">LocalNavi4</a></li>
	</ul>
</nav>


<?php
//==============================================
// service 1
//============================================== ?>
<section class="p-service1" id="a1">
	
<div class="c-title2">
	<h3>DummyDummy</h3>
</div>

<div class="c-list1">

<?php for($i=0;$i<6;$i++){ ?>

	<div class="c-list1__card">
		<div class="c-list1__img1">
			<img src="https://placehold.jp/185x180.png">
		</div>
		<div class="c-list1__info">
			<div class="c-list1__img2">
				<img src="https://placehold.jp/50x50.png">
			</div>
			<div class="c-list1__text">
				<h3>titletitle</h3>
				<p>Dummy Dummy Dummy </p>
			</div>
		</div>
	</div>

<?php } ?>

</div>


</section>


<?php
//==============================================
// service 2
//============================================== ?>
<section class="p-service2" id="a2">
		
<div class="c-title2">
	<h3>DummyDummy</h3>
</div>

<div class="p-service2__txt1">
	<p>ダミーテキストが入ります<span class="u-red">ダミーテキストが入ります</span>ダミーテキストが入ります</p>
</div>

<div class="c-list1 c-list1--col3">

<?php for($i=0;$i<6;$i++){ ?>

	<div class="c-list1__card">
		<div class="c-list1__img1">
			<img src="https://placehold.jp/253x180.png">
		</div>
		<div class="c-list1__info">
			<div class="c-list1__img2">
				<img src="https://placehold.jp/50x50.png">
			</div>
			<div class="c-list1__text">
				<h3>titletitle</h3>
				<p>Dummy Dummy Dummy </p>
			</div>
		</div>
	</div>

<?php } ?>

</div>


<div class="c-message1">
	<p>メッセージが入りますメッセージが入りますメッセージが入りますメッセージが入ります</p>
</div>

</section>


<?php
//==============================================
// service 3
//============================================== ?>
<section class="p-service3" id="a3">
	
	<div class="c-title2">
		<h3>DummyDummy</h3>
	</div>

	<div class="c-table1">
		<table>
			<thead>
				<tr>
					<th></th>
					<th>title</th>
					<th>title</th>
					<th>title</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>title</th>
					<td>texttexttext</td>
					<td>texttexttext</td>
					<td>texttexttext</td>
				</tr>
				<tr>
					<th>title</th>
					<td>texttexttext</td>
					<td>texttexttext</td>
					<td>texttexttext</td>
				</tr>
				<tr>
					<th>title</th>
					<td>texttexttext</td>
					<td>texttexttext</td>
					<td>texttexttext</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div class="c-title1">
		<h4>DummyDummy</h4>
	</div>

	<p>ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。</p>

	<div class="l-btn1 l-btn1--center">
		<div class="c-btn1">
			<a href="">DummyDummy</a>
		</div>
	</div>

</section>


<?php
//==============================================
// service 4
//============================================== ?>
<section class="p-service4" id="a4">
	
	<div class="c-title2">
		<h3>DummyDummy</h3>
	</div>

	<div class="c-title1">
		<h4>DummyDummy</h4>
	</div>

	<div class="c-imgtext1">
		<div class="c-imgtext1__img">
			<img src="https://placehold.jp/150x150.png">
		</div>
		<div class="c-imgtext1__text">
			<p>Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy </p>
		</div>
	</div>

	<div class="c-title3">
		<h4>DummyDummy</h4>
	</div>

	<p>ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。</p>


	<div class="c-title3">
		<h4>DummyDummy</h4>
	</div>

	<p>ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。ダミーテキストが入ります。</p>

</section>


</main>
<?php include($_SERVER['DOCUMENT_ROOT'] . '/assets/include/side.php'); ?>
</div>

</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . '/assets/include/footer.php'); ?>
