<!DOCTYPE html>
<html lang="ja" id="pagetop">
<head>
<meta charset="UTF-8">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<?php include($_SERVER['DOCUMENT_ROOT'] . '/assets/include/meta.php'); ?>
<link href="/assets/css/style.css" rel="stylesheet">
<script src="/assets/js/jquery-1.12.4.min.js"></script>
</head>
<body class="page-<?php echo $id; ?>">

<?php
//==============================================
// header PC
//============================================== ?>
<div class="pc-only">

	<header class="c-headPC">
		<div class="c-headPC__inner">
			<h1><a href=""><img src="https://placehold.jp/250x50.png"></a></h1>
			<ul>
				<li><a href="">Link1</a></li>
				<li><a href="">Link2</a></li>
				<li><a href="">Link3</a></li>
			</ul>
		</div>
	</header>

	<nav class="c-gnavi">
		<ul>
			<li><a href="">navi</a></li>
			<li><a href="">navi</a></li>
			<li><a href="">navi</a></li>
			<li><a href="">navi</a></li>
			<li><a href="">navi</a></li>
		</ul>
	</nav>

</div>

<?php
//==============================================
// header SP
//============================================== ?>
<div class="sp-only">
<header class="c-headSP">

	<div class="c-headSP_inner">
		
		<h1><a href=""><img src="https://placehold.jp/150x40.png"></a></h1>

		<div class="c-menuSP">
			<div class="c-menuSP__1"></div>
			<div class="c-menuSP__2"></div>
			<div class="c-menuSP__3"></div>
		</div>

		<nav class="c-menulistSP">
			<ul>
				<li><a href="">navi</a></li>
				<li><a href="">navi</a></li>
				<li><a href="">navi</a></li>
				<li><a href="">navi</a></li>
				<li><a href="">navi</a></li>
			</ul>
		</nav>

	</div>

</header>
</div>

<?php
//==============================================
// breadcrumb
//============================================== ?>
<nav class="c-breadcrumb1 c-breadcrumb1--bottomline pc-only">
	<ul>
		<li><a href="">HOME</a></li>
		<li><a href="">タイトル</a></li>
		<li><a href="">タイトル</a></li>
		<li>タイトル</li>
	</ul>
</nav>
